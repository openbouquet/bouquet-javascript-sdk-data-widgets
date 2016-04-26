(function (root, factory) {
    root.squid_api.view.TimeSeriesView = factory(root.Backbone, root.squid_api, squid_api.template.squid_api_timeseries_widget);
}(this, function (Backbone, squid_api) {

    View = Backbone.View.extend({

        template : null,
        limit : 10000,
        format : null,
        d3Formatter : null,
        startDate: null,
        endDate: null,
        colorPalette: null,
        colorPaletteCompare: null,
        interpolationRange: null,
        yearSwitcherView: null,
        multiSeries: null,
        height: 400,
        staleMessage : "Click refresh to update",
        renderTo: ".squid-api-data-widgets-timeseries-widget #widget",
        renderLegend: ".squid-api-data-widgets-timeseries-widget #legend",
        reRunMessage: "Please manually refresh your analysis",
        timeUnitSelector: null,
        legendState: {},

        initialize : function(options) {
            this.config = squid_api.model.config;

            if (options) {
                if (options.limit) {
                    this.limit = options.limit;
                }
                if (options.colorPalette) {
                    this.colorPalette = options.colorPalette;
                } else {
                    this.colorPalette = d3.scale.category10().range();
                }
                if (options.colorPaletteCompare) {
                    this.colorPaletteCompare = options.colorPaletteCompare;
                } else {
                    this.colorPaletteCompare = d3.scale.category20().range();
                }
                if (options.timeUnits) {
                    this.timeUnits = options.timeUnits;
                } else {
                    this.timeUnits = [{
                        id: "TO_DATE",
                        name: "Daily"
                    },
                    {
                        id: "WEEKLY",
                        name: "Weekly"
                    }, {
                        id: "MONTHLY",
                        name: "Monthly"
                    }, {
                        id: "YEARLY",
                        name: "Yearly"
                    }];
                }
                if (options.interpolationRange) {
                    this.interpolationRange = options.interpolationRange;
                }
                if (options.yearSwitcherView) {
                    this.yearSwitcherView = options.yearSwitcherView;
                }
                if (options.timeUnitSelector) {
                    this.timeUnitSelector = options.timeUnitSelector;
                }
                if (options.yearAnalysis) {
                    this.yearAnalysis = options.yearAnalysis;
                }
                if (options.multiSeries) {
                    this.multiSeries = options.multiSeries;
                }
                if (options.staleMessage) {
                    this.staleMessage = options.staleMessage;
                }
                if (options.height) {
                    this.height = options.height;
                }
                if (options.template) {
                    this.template = options.template;
                } else {
                    this.template = squid_api.template.squid_api_timeseries_widget;
                }
                if (options.reRunMessage) {
                    this.reRunMessage = options.reRunMessage;
                }
            }
            if (options.configuration) {
                this.configuration = options.configuration;
            } else {
                this.configuration = {
                    interpolate: "basic",
                    right: 80,
                    height: this.height,
                    target: this.renderTo,
                    x_accessor: 'date',
                    area: false,
                    y_accessor: 'value',
                    animate_on_load: false,
                    legend_target: this.renderLegend,
                    colors: this.colorPalette,
                    mouseover: function(d, i) {
                        // remove existing active data point text el
                        var activeDataPoint = d3.select(this.target + " .mg-active-datapoint").remove();
                        d3.select(this.target + " .mg-active-datapoint-container text").remove();
                        var svgWidth = parseFloat(d3.select(this.target + " svg").attr("width"));

                        // target container
                        var container = d3.select(this.target + " .mg-active-datapoint-container");

                        var values = d.values;
                        if (! values) {
                            values = [d];
                        }
                        container.append("text")
                            .text(moment(values[0].date).format("L"))
                            .attr("id", "date-display")
                            .attr("y", -10)
                            .attr("x", svgWidth / 2)
                            .style("font-weight", "500")
                            .style('font-size', "16")
                            .style("fill", "#666666")

                        for (i=0; i<values.length; i++) {
                            var line = this.legend[values[i].line_id - 1];
                            // find legend item
                            var legendItems = $(this.legend_target + " span");
                            for (ix=0; ix<legendItems.length; ix++) {
                                if ($(legendItems[ix]).text().indexOf(line) > -1) {
                                    $(legendItems[ix]).find(".value").remove();
                                    $(legendItems[ix]).append("<span class='value'>" + values[i].value + "</span> ")
                                }
                            }
                        }
                    },
                    mouseout: function() {
                        d3.select(".mg-active-datapoint-container").selectAll("*").remove();
                        $(this.legend_target + " span .value").remove();
                    }
                };
            }
            if (options.format) {
                this.format = options.format;
            } else {
                // default number formatter
                if (d3) {
                    this.format = d3.format(",.1f");
                } else {
                    this.format = function(f){
                        return f;
                    };
                }
            }
            if (this.model) {
                this.listenTo(this.model, 'change:status', this.render);
                this.listenTo(this.model, 'change:disabled', this.toggleDisplay);
                this.listenTo(this.model, 'change:error', this.render);
                this.listenTo(this.config, 'change:configDisplay', this.updateHeight);
                this.listenTo(this.config, 'change:timeUnit', this.updateTimeUnitSelector);
            }

            // Resize
            $(window).on("resize", _.bind(this.resize(),this));
        },

        toggleDisplay: function() {
            if (this.model.get("disabled") || this.config.get("currentAnalysis") !== "timeAnalysis") {
                this.hide();
            } else {
                this.show();
            }
        },

        resize : function() {
            var resizing = true;
            return function() {
                if (this.resizing) {
                    window.clearTimeout(resizing);
                }
                this.resizing = window.setTimeout(_.bind(this.updateWidth,this), 100);
            };
        },

        events: {
            "change #time-unit-selector select": function(event) {
                var unit = $(event.currentTarget).val();
                this.config.set("timeUnit", unit);
            }
        },

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
            $(window).off("resize");
            return this;
        },

        sortDates : function(rows) {
            rows.sort(function(a,b){
                var d1 = new Date(a.v[0]).getTime();
                var d2 = new Date(b.v[0]).getTime();
                return d1 > d2 ? 1 : -1;
            });
            return rows;
        },

        getData: function() {
            var data, analysis;

            // Support Mutli / Single Analysis Jobs
            if (this.model.get("analyses")) {
                if (this.YearOverYear) {
                    analysis = this.model.get("analyses")[1];
                } else {
                    analysis = this.model.get("analyses")[0];
                }
            } else {
                analysis = this.model;
            }

            data = analysis.toJSON();
            data.done = this.model.isDone();

            return data;
        },

        updateHeight: function() {
            var configDisplay = this.config.get("configDisplay");
            if (configDisplay) {
                if (! configDisplay.visible) {
                    this.configuration.height+=configDisplay.originalHeight;
                } else {
                    this.configuration.height = this.height;
                }
                MG.data_graphic(this.configuration);
            }
        },

        updateWidth: function() {
            this.configuration.width = $(this.renderTo).width();
            MG.data_graphic(this.configuration);
        },

        standardizeData: function(currentDateIndex) {
            // standardize data
            for (i=0; i<this.results.rows.length; i++) {
                // store date
                if (! currentDateIndex) {
                    var v = [this.results.rows[i].v[0]];
                    var dim = "";
                    var metricVals = [];
                    for (ix=1; ix<this.results.rows[i].v.length; ix++) {
                        if (typeof(this.results.rows[i].v[ix]) === "string") {
                            if (dim.length === 0) {
                                dim += this.results.rows[i].v[ix];
                            } else {
                                dim += " / " + this.results.rows[i].v[ix];
                            }
                        } else if (typeof(this.results.rows[i].v[ix]) === "number") {
                            metricVals.push(this.results.rows[i].v[ix]);
                        }
                    }
                    v.push(dim);
                    for (ix1=0; ix1<metricVals.length; ix1++) {
                        v.push(metricVals[ix1]);
                    }
                    this.results.rows[i].v = v;
                } else {
                    // remove currentDateRow
                    this.results.rows[i].v.splice(currentDateIndex, 1);
                }
            }
            if (currentDateIndex) {
                this.results.cols.splice(currentDateIndex, 1);
            }
        },

        renderGraphic: function(metrics) {
            this.$el.find(".sq-loading").hide();
            this.$el.find("#re-run").hide();

            // for manipulation time
            var start = new Date().getTime();

            // data for timeseries
            var legend = [];
            var dataset = [];
            var nVariate = false;
            var compare = false;
            var toRemove = [];
            var currentDateIndex = null;

            // see if multiple dimensions exist
            for (var col=1; col<this.results.cols.length; col++) {
                if (this.results.cols[col].role == "DOMAIN") {
                    nVariate = true;
                    var selection = this.config.get("selection");
                    if (selection) {
                        var facets = selection.facets;
                        for (var f=0; f<facets.length; f++) {
                            if (facets[f].id === this.results.cols[col].definition && this.results.cols[col].extendedType.name === "DATE") {
                                nVariate = false;
                                this.standardizeData(col);
                            }
                        }
                    }
                }
                // if metrics are present, filter the display data
                if (metrics) {
                    if (! metrics.includes(this.results.cols[col].id)) {
                        toRemove.push(col);
                    }
                }
            }

            // sort dates
            this.results.rows = this.sortDates(this.results.rows);

            if (nVariate) {
                // make sure we only have three columns
                this.standardizeData();
            }

            // get data
            for (i=1; i<this.results.cols.length; i++) {
                if (! toRemove.includes(i)) {
                    var metaData = [];
                    var hashMap = {}

                    if (nVariate) {
                        // obtain legend names from results
                        for (ix1=0; ix1<this.results.rows.length; ix1++) {
                            if (this.results.rows[ix1].v[1] !== null) {
                                if ($.inArray(this.results.rows[ix1].v[1], legend) < 0) {
                                    // store unique legend items
                                    legend.push(this.results.rows[ix1].v[1]);
                                }
                                // create hashMap
                                var i1 = this.results.rows[ix1].v[0];
                                var i2 = this.results.rows[ix1].v[1];
                                var i3 = this.results.rows[ix1].v[2];
                                var i4 = this.results.rows[ix1].v[3];
                                if (hashMap[i2]) {
                                    hashMap[i2][i1] = i3;
                                } else {
                                    hashMap[i2] = {};
                                    hashMap[i2][i1] = i3;
                                }
                                if (i4) {
                                    compare = true;
                                    // if compare exists
                                    if (hashMap[i2 + " (compare)"]) {
                                        hashMap[i2 + " (compare)"][i1] = i4;
                                    } else {
                                        hashMap[i2 + " (compare)"] = {};
                                        hashMap[i2 + " (compare)"][i1] = i4;
                                        // store unique compare legend items
                                        legend.push(i2 + " (compare)");
                                    }
                                }
                            } else {
                                // handle nVariate null values here
                            }
                        }
                    } else {
                        if (this.results.cols[i].originType === "COMPARETO") {
                            compare = true;
                        }
                        legend.push(this.results.cols[i].name);
                    }
                }
            }

            if (compare) {
                this.configuration.colors = this.colorPaletteCompare;
            } else {
                this.configuration.colors = this.colorPalette;
            }

            var arr = [];
            if (nVariate) {
                var keys = [];
                for (var key in hashMap) {
                    if (hashMap.hasOwnProperty(key)) {
                        keys.push(key);
                    }
                }
                if (! compare) {
                    // sort legend alphabetically
                    legend.sort();
                    // sort hashMap alphabetically
                    keys.sort();
                }

                for (i=0; i<keys.length; i++) {
                    arr = [];
                    for (date in hashMap[keys[i]]) {
                        var obj1 = {
                            "date" : date,
                            "value": hashMap[keys[i]][date]
                        };
                        arr.push(obj1);
                    }
                    arr = MG.convert.date(arr, 'date');
                    dataset.push(arr);
                }
            } else {
                for (i=1; i<this.results.cols.length; i++) {
                    if (! toRemove.includes(i)) {
                        arr = [];
                        for (ix=0; ix<this.results.rows.length; ix++) {
                            var obj = {
                                "date" : this.results.rows[ix].v[0],
                                "value" : this.results.rows[ix].v[i]
                            };
                            arr.push(obj);
                        }
                        arr = MG.convert.date(arr, 'date');
                        dataset.push(arr);
                    }
                }
            }

            // set width
            this.configuration.width = $(this.renderTo).width();

            // set legend & data
            if (legend.length === 0) {
                this.configuration.chart_type = 'missing-data';
            } else {
                delete this.configuration.chart_type;
                this.configuration.legend = legend;
                this.configuration.data = dataset;
            }

            // empty timeseries div
            $(this.renderTo).empty();

            // reinitialize timeseries
            MG.data_graphic(this.configuration);

            // manipulation time
            console.log("timeseries manipulation time: " + (new Date().getTime() - start) + " ms");
        },

        hide: function() {
            this.$el.hide();
        },

        show: function() {
            this.$el.show();
        },

        updateTimeUnitSelector: function() {
            var timeUnit = this.config.get("timeUnit");
            if (timeUnit) {
                this.$el.find("#time-unit-selector select").val(timeUnit);
            }
            this.$el.find("#time-unit-selector select").multiselect();
        },

        renderTemplate: function(done) {
            // render metrics used for analysis
            var metricColumns = [];
            if (done) {
                var cols = this.model.get("results").cols;
                for (i=0; i<cols.length; i++) {
                    if (cols[i].role === "DATA") {
                        metricColumns.push(cols[i].name);
                    }
                }
            }
            metricColumns = metricColumns.join(", ");
            this.$el.html(this.template({
                reRunMessage: this.reRunMessage,
                timeUnitSelector: this.timeUnitSelector,
                timeUnits: this.timeUnits,
                metricColumns: metricColumns,
                done: done
            }));
            if (this.timeUnitSelector) {
                this.updateTimeUnitSelector();
            }
        },

        render : function() {
            var status = this.model.get("status");
            var me = this;
            this.YearOverYear = this.config.get("YearOverYear");
            this.renderTemplate(false);

            if (status === "PENDING") {
                this.$el.html(this.template({"staleMessage" : this.staleMessage}));
                this.$el.find(".sq-loading").hide();
                this.$el.find("#stale").show();
            }
            if (status === "RUNNING") {
                this.$el.find(".sq-loading").show();
            }
            if (status === "DONE") {
                this.renderTemplate(true);
                // additional timeserie analysis views
                if (this.yearSwitcherView){
                    this.renderAdditionalView(this.yearSwitcherView, this.$el.find("#yearswitcher"));
                }

                this.$el.find("#stale").hide();
                this.$el.find(".sq-loading").hide();

                var data = this.getData();
                this.results = data.results;

                if (data.done && this.results && ! this.model.get("error")) {
                    this.renderGraphic();
                } else {
                    if (this.model.get("error")) {
                        if (this.model.get("error").enableRerun) {
                            this.$el.find("#re-run").show();
                        } else {
                            this.$el.find("#error").html("<div id='error'>" + this.model.get("error").message + "</div>");
                        }
                    }
                }
            }
        },

        renderAdditionalView: function(view, element) {
            view.setElement(element);
            view.renderBase();
            view.render();
        }
    });

    return View;
}));
