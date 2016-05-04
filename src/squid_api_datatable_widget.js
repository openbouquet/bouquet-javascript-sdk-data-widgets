(function (root, factory) {
    root.squid_api.view.DataTableView = factory(root.Backbone, root.squid_api);
}(this, function (Backbone, squid_api) {

    View = Backbone.View.extend( {

        template : null,

        maxRowsPerPage : 10000,

        format : null,

        d3Formatter : null,

        config : null,

        paging : false,

        ordering : false,

        noDataMessage : "No data available in table",

        headerBadges : false,

        paginationView : null,

        rollupSummaryColumn : null,

        rollups : null,

        reRunMessage : "Please manually refresh your analysis",

        staleMessage : "Click refresh to update",

        currentDomain : null,

        addFacetValueFromResults: false,

        initialize : function(options) {
            var me = this;

            // config is used for orderBy
            if (options.config) {
                this.config = options.config;
            } else {
                this.config = squid_api.model.config;
            }

            if (this.model) {
                this.listenTo(this.model, 'change:status', this.render);
                this.listenTo(this.model, 'change:facets', this.render);
                this.listenTo(this.model, 'change:metricList', this.render);
                this.listenTo(this.model, 'change:orderBy', this.render);
            }

            // setup options
            if (options.template) {
                this.template = options.template;
            } else {
                this.template = squid_api.template.squid_api_datatable_widget;
            }

            // filters are used to get the Dimensions and Metrics names
            if (options.filters) {
                this.filters = options.filters;
            } else {
                this.filters = squid_api.model.filters;
            }

            if (options.maxRowsPerPage) {
                this.maxRowsPerPage = options.maxRowsPerPage;
            }
            if (options.paging) {
                this.paging = options.paging;
            }
            if (options.ordering) {
                this.ordering = options.ordering;
            }
            if (options.noDataMessage) {
                this.noDataMessage = options.noDataMessage;
            }
            if (options.headerBadges) {
                this.headerBadges = options.headerBadges;
            }
            if (options.rollupSummaryColumn) {
                this.rollupSummaryColumn = options.rollupSummaryColumn;
            }
            if (options.staleMessage) {
                this.staleMessage = options.staleMessage;
            }
            if (options.reRunMessage) {
                this.reRunMessage = options.reRunMessage;
            }
            if (options.addFacetValueFromResults) {
                this.addFacetValueFromResults = options.addFacetValueFromResults;
            }
            if (d3) {
                this.d3Formatter = d3.format(",");
            }
            if (options.format) {
                this.format = options.format;
            } else {
                // default number formatter
                if (this.d3Formatter) {
                    this.format = function(f){
                        if (isNaN(f)) {
                            return f;
                        } else {
                            return me.d3Formatter(f);
                        }
                    };
                } else {
                    this.format = function(f){
                        return f;
                    };
                }
            }

            this.renderBaseViewPort();
        },

        events : ({
            "click thead th" : function(event) {
                if (this.ordering) {
                    var originType = $(event.currentTarget).attr("origin-type");
                    if (originType !== "COMPARETO") {
                        var orderBy = this.config.get("orderBy");
                        var expressionValue = $(event.currentTarget).attr("data-content");
                        var obj = {"expression" : {"value" : expressionValue}};
                        if (orderBy) {
                            if (orderBy[0]) {
                                if (orderBy[0].expression) {
                                    if (orderBy[0].expression.value == expressionValue) {
                                        if ($(event.currentTarget).hasClass("ASC")) {
                                            obj.direction = "DESC";
                                        } else {
                                            obj.direction = "ASC";
                                        }
                                    } else {
                                        obj.direction = "DESC";
                                    }
                                }
                            }
                        }
                        this.config.set("orderBy", [obj]);
                    }
                }
            },
            "click td.dimension" : function(event) {
                if (this.addFacetValueFromResults) {

                    var value = $(event.currentTarget).text();
                    var facetId = $(event.currentTarget).parents('tbody').siblings('thead').find('> tr > th:eq(' + $(event.currentTarget).index() + ')').attr("data-content");

                    var selectionClone = $.extend(true, {}, this.filters.get("selection"));
                    var facets = selectionClone.facets;
                    if (facets) {
                        for (i=0; i<facets.length; i++) {
                            if (facets[i].id === facetId) {
                                var selectedItems = facets[i].selectedItems;
                                var add = true;
                                for (ix=0; ix<selectedItems.length; ix++) {
                                    if (selectedItems[ix].value === value) {
                                        add = false;
                                        delete facets[i].selectedItems[ix];
                                    }
                                }
                                if (add) {
                                    facets[i].selectedItems.push({
                                        id    : value,
                                        type  : "v",
                                        value : value
                                    });
                                }
                            }
                        }
                        // Set the updated filters model
                        this.config.set("selection", squid_api.utils.buildCleanSelection(selectionClone));
                    }
                }
            }
        }),

        setModel : function(model) {
            this.model = model;
            this.initialize();
        },

        /**
         * see : http://stackoverflow.com/questions/10966440/recreating-a-removed-view-in-backbone-js
         */
        remove: function() {
            this.undelegateEvents();
            this.$el.empty();
            this.stopListening();
            return this;
        },

        displayTableHeader : function(selector) {
            var me = this;
            var i;
            var metrics;

            if (! me.headerInformation || this.currentDomain !== this.config.get("domain")) {
                this.currentDomain = this.config.get("domain");
                var parentId = this.config.get("domain");
                return squid_api.getCustomer().then(function(customer) {
                    return customer.get("projects").load(me.config.get("project")).then(function(project) {
                        return project.get("domains").load(parentId).then(function(domain) {
                            return domain.get("metrics").load().then(function(metrics) {
                                var arr = [];
                                for(i=0; i<metrics.size(); i++) {
                                    arr.push(metrics.models[i].toJSON());
                                }
                                me.domainMetrics = arr;
                                me.headerInformation = true;
                                me.displayTableHeader();
                            });
                        });
                    });
                });
            } else  {
                var columns = [];
                var originalColumns;//unaltered by rollup splice
                var invalidSelection = false;
                var status = this.model.get("status");

                var analysis = this.model;
                // in case of a multi-analysis model
                if (analysis.get("analyses")) {
                  analysis = analysis.get("analyses")[0];
                }
                var results = analysis.get("results");
                var rollups;
                if (results && status !== "PENDING" && status !== "RUNNING") {
                    // Analysis computed : use results columns
                    columns = results.cols;

                    // init rollups
                    rollups = analysis.get("rollups");
                    if (rollups && (rollups.length ===0)) {
                        rollups = this.rollups = null;
                    }
                    originalColumns = columns;
                } else {
                    // Analysis not computed yet : use analysis definition
                    if (this.filters.get("selection")) {
                        var obj;
                        var facets = this.model.get("facets");
                        if (facets) {
                            for (i=0; i<facets.length; i++) {
                                obj = squid_api.utils.find(this.filters.get("selection").facets, "id", facets[i].value);
                                if (obj) {
                                    obj.dataType = "STRING";
                                    columns.push(obj);
                                } else {
                                    // impossible to get column data from selection
                                    invalidSelection = true;
                                }
                            }
                        }
                        metrics = this.model.get("metricList");
                        if (metrics) {
                            if (metrics.length === 0) {
                                metrics = squid_api.model.config.get("chosenMetrics");
                            }
                        }
                        if (metrics) {
                            var metric;
                            for (i=0; i<metrics.length; i++) {
                                metric = metrics[i];
                                if (metrics[i].id) {
                                    for (ix=0; ix<me.domainMetrics.length; ix++) {
                                        if (metrics[i].id.metricId === me.domainMetrics[ix].oid) {
                                            metrics[i].name = me.domainMetrics[ix].name;
                                        }
                                    }
                                    obj = squid_api.utils.find(me.domainMetrics, "oid", metrics[i].id.metricId);
                                    if (obj) {
                                        obj.dataType = "NUMBER";
                                    } else {
                                        // impossible to get column data from selection
                                        invalidSelection = true;
                                    }
                                } else {
                                    obj = {
                                            "id" : null,
                                            "name" : metrics[i].name,
                                            "dataType" : "NUMBER"
                                    };
                                }
                                columns.push(obj);
                            }
                        }
                        if (this.config.get("rollups") && Array.isArray(this.config.get("rollups")) && this.config.get("rollups").length>0 && this.rollupSummaryColumn >= 0 && status !== "DONE") {
                            originalColumns = columns.slice();
                            columns.splice(this.config.get("rollups")[0].col, 1);
                        } else {
                            originalColumns = columns;
                        }
                    }
                }

                var orderBy = this.model.get("orderBy");
                if (orderBy) {
                    // add orderBy direction
                    for (col=0; col<columns.length; col++) {
                        if (columns[col]) {
                            columns[col].orderDirection = undefined;
                            for (ix=0; ix<orderBy.length; ix++) {
                                if (this.ordering) {
                                    if (columns[col].definition) {
                                        if (orderBy[ix].expression) {
                                            if (columns[col].definition === orderBy[ix].expression.value) {
                                                columns[col].orderDirection = orderBy[ix].direction;
                                                break;
                                            }
                                        }
                                    } else if (orderBy[ix].expression) {
                                        if (columns[col].id === orderBy[ix].expression.value) {
                                            columns[col].orderDirection = orderBy[ix].direction;
                                            break;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }

                var rollupColIndex = null;
                var rollupSummaryIndex = null;
                if (rollups) {
                    if ((rollups.length>0)) {
                        if (rollups.length>1 && rollups[0].col === -1) {
                            rollupColIndex = rollups[1].col + 1;
                        } else {
                            rollupColIndex = rollups[0].col + 1;
                        }
                    }
                    if (this.config.get("rollups") && this.rollupSummaryColumn >= 0) {
                        rollupSummaryIndex = this.rollupSummaryColumn + 1;
                    }
                }
                me = this;
                // header
                d3.select(selector).select("thead tr").selectAll("th").remove();

                // set compare col
                this.compareCols = [];
                this.metricCols = [];
                this.dateCols = [];
                for (i=0; i<columns.length; i++) {
                    if (columns[i].originType === "COMPARETO") {
                        this.compareCols.push(i);
                    }
                    if (columns[i].role === "DATA") {
                        this.metricCols.push(i);
                    }
                    if (columns[i].extendedType) {
                        if (columns[i].extendedType.name === "DATE") {
                            this.dateCols.push(i);
                        }
                    }
                }

                if (!invalidSelection) {
                    d3.select(selector).select("thead tr").selectAll("th")
                        .data(columns)
                        .enter().append("th")
                        .attr("class", function(d, i) {
                            var str = "";
                            if (rollups) {
                                if (i === 0) {
                                    // hide grouping column
                                    str = str + "hide " + d.dataType;
                                } else if (( rollupSummaryIndex !== null) && (i === rollupColIndex)) {
                                    // hide rollup column
                                    str = str + "hide " + d.dataType;
                                } else {
                                    str = str + d.dataType;
                                }
                            }
                            if (d.orderDirection) {
                                str = str + " " + d.orderDirection;
                            }
                            if (me.compareCols) {
                                if (me.compareCols.length > 0) {
                                    if (me.compareCols.indexOf(i) > -1) {
                                        str += " compareTo";
                                    } else if (me.metricCols.indexOf(i) > -1) {
                                        str += " compare";
                                    }
                                }
                            }
                            return str;
                        })
                        .attr("origin-type", function(d) {
                            return d.originType
                        })
                        .html(function(d) {
                            var str = d.name;
                            if (d.orderDirection === "ASC") {
                                str = str + " " + "<span class='sort-direction'>&#xffea;</span>";
                            } else if (d.orderDirection === "DESC") {
                                str = str + " " + "<span class='sort-direction'>&#xffec;</span>";
                            }
                            return str;
                        })
                        .attr("data-content", function(d) {
                            if (d.definition) {
                                return d.definition;
                            } else {
                                return d.id;
                            }
                        });

                    // add class if more than 10 columns
                    if (this.$el.find("thead th").length > 10) {
                        this.$el.find("table").addClass("many-columns");
                    } else {
                        this.$el.find("table").removeClass("many-columns");
                    }
                }
            }
        },

        displayTableContent : function(selector) {
            var me = this;

            var analysis = this.model;
            // in case of a multi-analysis model
            if (analysis.get("analyses")) {
              analysis = analysis.get("analyses")[0];
            }
            var results = analysis.get("results");
            var rollups;

            if (results) {
                rollups = analysis.get("rollups");
                if (rollups && (rollups.length ===0)) {
                    rollups = this.rollups = null;
                }

                var rollupColIndex = null;
                var rollupSummaryIndex = null;
                if (rollups) {
                    if ((rollups.length>0)) {
                        if (rollups.length>1 && rollups[0].col === -1) {
                            rollupColIndex = rollups[1].col + 1;
                        } else {
                            rollupColIndex = rollups[0].col + 1;
                        }
                    }
                    if (this.config.get("rollups") && this.rollupSummaryColumn >= 0) {
                        rollupSummaryIndex = this.rollupSummaryColumn + 1;
                    }
                }
                // apply paging and number formatting
                var data = {};
                data.results = {"cols" : results.cols, "rows" : []};
                rows = results.rows;
                for (rowIdx = 0; (rowIdx<rows.length && rowIdx<this.maxRowsPerPage); rowIdx++) {
                    row = rows[rowIdx];
                    newRow = {v:[]};
                    for (colIdx = 0; colIdx<results.cols.length; colIdx++) {
                        v = row.v[colIdx];
                        if (results.cols[colIdx].extendedType) {
                            var words = results.cols[colIdx].name.split(" ");
                            var toRound = true;
                            for (i=0; i<words.length; i++) {
                                // see if column header contains the text duration / time
                                if (words[i].toLowerCase() == "duration" || words[i].toLowerCase() == "time") {
                                    toRound = false;
                                    // parse value with moment
                                    var d = moment.duration(parseFloat(v), 'milliseconds');
                                    // obtain hours / minutes & seconds
                                    var hours = d.asHours();
                                    var minutes = d.asMinutes();
                                    var days = d.asDays();
                                    var years = d.asYears();
                                    var seconds = d.asSeconds();
                                    var milliseconds = d.asMilliseconds();
                                    var timeData = d._data;
                                    // contruct readable time values
                                    if (milliseconds > 1) {
                                        v = this.d3Formatter(Math.round(timeData.milliseconds * 100) / 100);
                                        if (seconds > 1) {
                                            v = timeData.seconds + "s";
                                            if (minutes > 1) {
                                                v = timeData.minutes + "m " + v;
                                                if (hours > 1) {
                                                    v = timeData.hours + "h " + v;
                                                    if (days > 1) {
                                                        v = timeData.days + "d " + v;
                                                        if (years > 1) {
                                                            v = timeData.years + "y " + v;
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            if (typeof v === "number" && toRound) {
                                v = this.d3Formatter(Math.round(parseFloat(v) * 100) / 100);
                            }
                        }
                        newRow.v.push(v);
                    }
                    data.results.rows.push(newRow);
                }

                // Rows
                d3.select(selector).select("tbody").selectAll("tr").remove();
                var tr = d3.select(selector).select("tbody").selectAll("tr")
                    .data(data.results.rows)
                    .enter()
                    .append("tr");

                // Cells
                tr.selectAll("td")
                    .data(function(d) {
                        return d.v;
                    })
                    .enter()
                    .append("td")
                    .attr("class", function(d, i) {
                        var str = "";
                        if (rollups) {
                            if (i === 0) {
                                // hide grouping column
                                str = "hide";
                            } else if ((rollupSummaryIndex !== null) && (i === rollupColIndex)) {
                                // hide rollup column
                                str = "hide";
                            } else if ((rollupSummaryIndex !== null) && (i === rollupSummaryIndex)) {
                                if (parseInt(this.parentNode.__data__.v[0]) === 1) {
                                    // this is a total (grouped) line
                                    this.parentNode.className = "group";
                                }
                                if (parseInt(this.parentNode.__data__.v[0]) >= 1) {
                                  // this is a rollup sub level line
                                  str = "new-category";
                                }
                            } else if ((i === 1 && parseInt(this.parentNode.__data__.v[0]) === 1)) {
                                // this is a total line
                                this.parentNode.className = "group";
                                str = "new-category";
                            } else if (parseInt(this.parentNode.__data__.v[0]) > 1) {
                                // this is a rollup sub level line
                                str = "new-category";
                            } else if ((parseInt(this.parentNode.__data__.v[0]) === 0) && (this.parentNode === this.parentNode.parentNode.childNodes[0])) {
                                // detect total column
                                this.parentNode.className = "total-column";
                            }
                            // Detect Group & Empty Value
                            if (this.parentNode.className === "group" && d) {
                                me.categoryColSpan(this);
                            }
                        }
                        if (me.compareCols) {
                            if (me.compareCols.indexOf(i) > -1) {
                                str += " compareTo";
                            } else if (me.metricCols.indexOf(i) > -1) {
                                str += " compare";
                            }
                        }
                        if (me.metricCols) {
                            if (me.metricCols.indexOf(i) === -1 && me.dateCols.indexOf(i) === -1) {
                                str += " dimension";
                            }
                        }
                        return str;
                    })
                    .text(function(d, i) {
                        var text = d;
                        if (rollups) {
                            if ((rollupSummaryIndex !== null) && (i === rollupSummaryIndex)) {
                                if (parseInt(this.parentNode.__data__.v[0]) === 1) {
                                    // this is a total (grouped) line
                                    text = this.parentNode.__data__.v[rollupColIndex];
                                }
                            } else if (i === 1){
                                if (parseInt(this.parentNode.__data__.v[0]) === 1) {
                                    // this is a total line
                                    text = "Total for "+data.results.cols[rollupColIndex].name;
                                }
                            }
                            if (i === 2) {
                                if ((parseInt(this.parentNode.__data__.v[0]) === 0) && (this.parentNode === this.parentNode.parentNode.childNodes[0])) {
                                    text = "Total";
                                }
                            }
                        }
                        return text;
                    });

                // display total
                this.$el.find("#count-entries").html(""+ (results.startIndex + 1) + " - " + (results.startIndex + data.results.rows.length));
                this.$el.find("#total-entries").html(""+results.totalSize);
            }
        },

        categoryColSpan : function(node) {
            var siblings = node.parentNode.childNodes;
            var colSpan = 1;

            for (i=0; i<siblings.length; i++) {
                // Obtain Sibling With Matching Class
                if (d3.select(siblings[i]).classed("new-category")) {
                    if (d3.select(siblings[i]).attr("colspan")) {
                        colSpan = parseInt(d3.select(siblings[i]).attr("colspan"));
                    }
                    // Increment ColSpan Value
                    d3.select(siblings[i]).attr("colspan", colSpan + 1);
                }
            }

            // Remove Node
            node.remove();
        },

        renderBaseViewPort : function() {
            this.$el.html(this.template({
                "staleMessage" : this.staleMessage,
                "reRunMessage" : this.reRunMessage
            }));
            if (this.paging) {
                this.paginationView = new squid_api.view.PaginationView( {
                    model : this.model,
                    config : this.config,
                    el : this.$el.find("#pagination")
                });
                this.paginationView.render();
            }
        },

        render : function() {
            if (this.el) {
                var selector = "#"+this.el.id+" .sq-table";

                // display table header
                this.displayTableHeader(selector);

                if (this.model.get("status") === "DONE") {
                    this.$el.find("#total").show();
                    this.$el.find(".sq-loading").hide();
                    this.$el.find("#stale").hide();
                    this.$el.find("#re-run").hide();
                    this.$el.find(".sort-direction").show();
                    this.$el.find("#table-container").show();

                    if (!this.model.get("error")) {
                        // display results
                        this.displayTableContent(selector);
                        if (this.paging) {
                            this.paginationView.render();
                            this.$el.find("#pagination").show();
                        }
                        this.$el.find("#error").html("");
                    } else {
                        var analysis = this.model;
                        // in case of a multi-analysis model
                        if (analysis.get("analyses")) {
                            analysis = analysis.get("analyses")[0];
                        }
                        if (this.model.get("error").enableRerun) {
                            this.$el.find("#re-run").show();
                        } else {
                            this.$el.find("#error").html("<div id='error'>" + this.model.get("error").message + "</div>");
                        }
                    }
                }

                if (this.model.get("status") === "RUNNING") {
                    // computing in progress
                    this.$el.find(".sq-loading").show();
                    this.$el.find("#stale").hide();
                    this.$el.find(".sort-direction").show();
                    this.$el.find("#error").html("");
                    this.$el.find("#table-container").hide();
                }

                if (this.model.get("status") === "PENDING") {
                    // refresh needed
                    d3.select(selector).select("tbody").selectAll("tr").remove();
                    this.$el.find("#pagination").hide();
                    this.$el.find("#total").hide();
                    this.$el.find(".sq-loading").hide();
                    this.$el.find("#stale").show();
                    this.$el.find("#error").html("");
                }
            }

            return this;
        }

    });

    return View;
}));
