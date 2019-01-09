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
        fillMissingDataValues: null,
        timeUnitSelector: null,
        legendState: {},

        initialize : function(options) {
            var me = this;
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
                        i18n: "daily",
                        name: "Daily"
                    },
                    {
                        id: "WEEKLY",
                        i18n: "weekly",
                        name: "Weekly"
                    }, {
                        id: "MONTHLY",
                        i18n: "monthly",
                        name: "Monthly"
                    }, {
                        id: "YEARLY",
                        i18n: "yearly",
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
                if (options.fillMissingDataValues) {
                    this.fillMissingDataValues = options.fillMissingDataValues;
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
                this.defaultConfiguration = options.configuration;
            } else {
                this.defaultConfiguration = {
                    interpolate: "basic",
                    right: 80,
                    height: this.height,
                    target: this.renderTo,
                    x_accessor: 'date',
                    area: false,
                    y_accessor: 'value',
                    animate_on_load: false,
                    missing_is_hidden: true,
                    missing_is_hidden_accessor: 'dead',
                    legend_target: this.renderLegend,
                    colors: this.colorPalette,
                    after_brushing: function(brush) {
                        var div = $(this).parent().siblings("#brushing");
                        if (brush.min_x !== brush.max_x) {
                            div.show();
                        } else {
                            div.hide();
                        }
                    },
                    mouseover: function(d, i) {
                        // remove existing active data point text el
                        d3.select(this.target + " .mg-active-datapoint").remove();
                        d3.select(this.target + " .mg-active-datapoint-container text").remove();

                        var values = d.values;
                        if (! values) {
                            values = [d];
                        }

                        // append current hovered date
                        $(this.target).parents().find("#legend").find(".date").remove();
                        $(this.target).parents().find("#legend").prepend("<span class='date'>" + moment(values[0].date).format("L") + "</span>");

                        for (i=0; i<values.length; i++) {
                            var line = this.legend[values[i].line_id - 1];
                            // find legend item
                            var legendItems = $(this.legend_target + " span");
                            for (ix=0; ix<legendItems.length; ix++) {
                                if ($(legendItems[ix]).text().indexOf(line) > -1) {
                                    $(legendItems[ix]).find(".value").remove();
                                    $(legendItems[ix]).append("<span class='value'>" + me.format(values[i].value) + "</span> ");
                                }
                            }
                        }
                    },
                    mouseout: function() {
                        $(this.target).parents().find("#legend").find(".date").remove();
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
                    this.format = d3.format(",.f");
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
            },
            "click #brushing a" : "render"
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
            if (configDisplay && ! this.model.get("disabled") && this.configuration) {
                if (! configDisplay.visible) {
                    this.configuration.height+=configDisplay.originalHeight;
                } else {
                    this.configuration.height = this.height;
                }
                MG.data_graphic(this.configuration);
            }
        },

        updateWidth: function() {
            if (! this.model.get("disabled") && this.configuration) {
                this.configuration.width = $(this.renderTo).width();
                MG.data_graphic(this.configuration);
            }
        },

        standardizeData: function(compare, currentDateIndex) {
            // standardize data
            for (i=0; i<this.results.rows.length; i++) {
                // store date
                if (! currentDateIndex) {
                    var v = [this.results.rows[i].v[0]];
                    var dim = "";
                    var metricVals = [];
                    for (ix=1; ix<this.results.rows[i].v.length; ix++) {
                    	if (this.results.cols[ix].role === "DOMAIN" && this.results.rows[i].v[ix]) {
                            if (dim.length === 0) {
                                dim += this.results.rows[i].v[ix];
                            } else {
                                dim += " / " + this.results.rows[i].v[ix];
                            }
                        } else if (this.results.cols[ix].role === "DATA" || this.results.rows[i].v[ix] === null) {
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

            // reset configuration to default (if previous svg has been brushed)
            this.configuration = _.clone(this.defaultConfiguration);

            // for manipulation time
            var start = new Date().getTime();

            // data for timeseries
            var legend = [];
            var dataset = [];
            var nVariate = false;
            var compare = false;
            var toRemove = [];
            var nrDomainCol = 0;

            if (this.results && this.results.cols) {
	            // see if multiple dimensions exist
	            for (var col=1; col<this.results.cols.length; col++) {
	            	if (this.results.cols[col].role !== "DOMAIN") {
	            		//metrics = [];
		                if (this.results.cols[col].originType === "COMPARETO") {
		                	compare = true;
		                }
	            	}
	            }
	            for (var col=1; col<this.results.cols.length; col++) {
	                if (this.results.cols[col].role === "DOMAIN") {
	                	nrDomainCol++;
	                	nVariate = nrDomainCol>=1;
	                    var selection = this.config.get("selection");
	                    if (selection) {
	                        var facets = selection.facets;
	                        for (var f=0; f<facets.length; f++) {
	                            if (facets[f].id === this.results.cols[col].definition && this.results.cols[col].extendedType.name === "DATE") {
	                                nVariate = false;
	                                this.standardizeData(compare, col);
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
	
	            if (nVariate) {
	                // make sure we only have three columns
	                this.standardizeData(compare);
	                // show metrics
	                this.$el.find("#metrics").show();
	            } else {
	                this.$el.find("#metrics").hide();
	                this.sortDates(this.results.rows);
	            }
	
	            // get data
	            var hashMap = {};
	
	            for (i=1; i<this.results.cols.length; i++) {
	                if (! toRemove.includes(i)) {
	
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
	                                if (compare) {
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
	                            }
	                        }
	                    } else {
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
	                for (i=0; i<keys.length; i++) {
	                    arr = [];
	                    for (var date in hashMap[keys[i]]) {
	                        /*jshint forin: false */
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
	                // make sure a value is available for every day (standard timeseries)
	                if (! nVariate) {
	                    for (i=1; i<this.results.cols.length; i++) {
	                        arr = [];
	                        /* Date Results */
	                        if (this.results.rows[0]) {
	                            var startDate = moment(moment(this.results.rows[0].v[0]).format('YYYY-MM-DD'));
	                            var endDate = moment(moment(this.results.rows[this.results.rows.length - 1].v[0]).format('YYYY-MM-DD'));
	                            for (var currentDay = startDate; currentDay.isAfter(endDate) === false; startDate.add('days', 1)) {
	                                if (! toRemove.includes(i)) {
	                                    var currentDate = currentDay.format('YYYY-MM-DD');
	                                    var dataExists = false;
	                                    var obj = {
	                                        "date" : currentDate
	                                    };
	                                    for (ix=0; ix<this.results.rows.length; ix++) {
	                                        if (this.results.rows[ix].v[0] === currentDate) {
	                                            dataExists = true;
	                                            obj.value = this.results.rows[ix].v[i];
	                                        }
	                                    }
	                                    if (dataExists === false && this.fillMissingDataValues) {
	                                        obj.value = null;
	                                        arr.push(obj);
	                                    } else if (dataExists) {
	                                        arr.push(obj);
	                                    }
	                                }
	                            }
	                            arr = MG.convert.date(arr, 'date');
	                            dataset.push(arr);
	                        }
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
	            if (typeof $.i18n !== "undefined" && typeof this.configuration !== "undefined") {
					this.configuration.missing_text =  $.i18n.t("noDataMessage");
	            }

	            // reinitialize timeseries
	            MG.data_graphic(this.configuration);
            }
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
            if (typeof $.i18n !== "undefined") {
				this.staleMessage = $.i18n.t("staleMessage");
				this.reRunMessage = $.i18n.t("reRunMessage");
            }
            var metricColumns = [], i;
            var results = this.model.get("results");
            if (done && ! this.model.get("error") && results) {
                var cols = this.model.get("results").cols;
                for (i=0; i<cols.length; i++) {
                    if (cols[i].role === "DATA") {
                        metricColumns.push(cols[i].name);
                    }
                }
            }
            metricColumns = metricColumns.join(", ");
            if (typeof this.timeUnits !== "undefined" && typeof $.i18n !== "undefined") {
            	for (i=0; i<this.timeUnits.length; i++) {
            		if (typeof this.timeUnits[i].i18n !== "undefined") {
            			this.timeUnits[i].name = $.i18n.t(this.timeUnits[i].i18n);
            		}
            	}
            }
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
            if (typeof $.i18n !== "undefined") {
            	this.$el.localize();
            }
        },

        render : function() {
            var status = this.model.get("status");
            this.YearOverYear = this.config.get("YearOverYear");
            this.renderTemplate(false);

            if (status === "PENDING") {
                var chartChildren = this.$el.find("#chart_container").children();
                for (i=0; i<chartChildren.length; i++) {
                    if ($(chartChildren[i]).is("#re-run")) {
                        $(chartChildren[i]).show();
                    } else {
                        $(chartChildren[i]).hide();
                    }
                }
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

                if (data.done && this.model.get("error")) {
                    this.$el.find("#error").html("<div id='error'>" + this.model.get("error").message + "</div>");
                }
                this.renderGraphic();
            }
        },

        renderAdditionalView: function(view, element) {
            view.setElement(element);
            if (view.renderBase) {
                view.renderBase();
            }
            view.render();
        }
    });

    return View;
}));
