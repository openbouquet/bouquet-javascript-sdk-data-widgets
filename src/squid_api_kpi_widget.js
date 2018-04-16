(function (root, factory) {
    root.squid_api.view.KPIView = factory(root.Backbone, root.squid_api);
}(this, function (Backbone, squid_api) {

    View = Backbone.View.extend( {

        template : null,

        format : null,

        initialize : function(options) {
            var me = this;

            if (this.model) {
                this.model.on('change', this.render, this);
            }
            // setup options
            if (options.template) {
                this.template = options.template;
            } else {
                this.template = squid_api.template.squid_api_kpi_widget;
            }
            if (options.format) {
                this.format = options.format;
            } else {
                if (d3) {
                    this.d3Formatter = d3.format(",");
                }
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
        },

        setModel : function(model) {
            this.model = model;
            this.initialize();
        },

        render : function() {
            var jsonData, results, values;
            if (this.model.isDone()) {
                jsonData = [];
                jsonData.done = true;
                results = this.model.get("results");
                if (results) {
                    var cols = results.cols;
                    var hasGrowth=false;

                    // resolve compareTo columns
                    var compareMap = {};
                    var compareIdSuffix = "";
                    for (var i1 = 0; i1 < cols.length; i1++) {
                        var colA = cols[i1];
                        if (colA.originType === "COMPARETO") {
                            // key = col oid, value = compare col index
                            compareMap[colA.id] = i1;
                            compareIdSuffix = colA.id.endsWith("_compare")?"_compare":"";
                        } else if (colA.originType === "GROWTH") {
                        	hasGrowth = true;
                        }
                    }

                    // build display data
                    values = results.rows[0].v;
                    for (var i=0; i<cols.length; i++) {
                        var col = cols[i];
                        if (col.originType === "USER") {
                            var kpi = {};
                            kpi.value = (typeof values[i] === "number") ? this.d3Formatter(Math.round(parseFloat(values[i]) * 100) / 100) : this.format(values[i]);
                            var compareIndex = compareMap[col.id+compareIdSuffix];
                            if (compareIndex) {
                                kpi.compareToValue = (typeof values[i] === "number") ? this.d3Formatter(Math.round(parseFloat(values[compareIndex]) * 100) / 100) : this.format(values[compareIndex]);
                            }
							if (results.cols[i].extendedType) {
								var words = results.cols[i].name.split(" ");
								for (var j=0; j<words.length; j++) {
									// see if column header contains the text duration / time
									if (words[j].toLowerCase() === "duration" || words[j].toLowerCase() === "time") {
										kpi.value =  squid_api.utils.formatTime(values[i], this.d3Formatter, results.cols[i].format );
										kpi.compareToValue =  squid_api.utils.formatTime(values[compareIndex], this.d3Formatter, results.cols[i].format);
									}
								}
							}
							kpi.unit = "";
                            kpi.name = col.name;
                            if (hasGrowth) { 
                            	kpi.growth = values[compareIndex+1];
                            	kpi.growth = kpi.growth === null? 0:kpi.growth.replace("%","");
                                if (kpi.growth > 0) {
                                    kpi.compareTextColor = 'text-success';
                                    kpi.compareClass = 'glyphicon-arrow-up';
                                }  else if (kpi.growth < 0) {
                                    kpi.compareTextColor = 'text-danger';
                                    kpi.compareClass = 'glyphicon-arrow-down';
                                } else {
                                    kpi.growth = 0;
                                    kpi.compareTextColor = 'text-info';
                                    kpi.compareClass = 'glyphicon-transfer';
                                }                            	
                            } else if (typeof kpi.compareToValue !== "undefined" && kpi.compareToValue !== null) {
                                var lvalue = parseFloat(values[i]);
                                var rvalue = parseFloat(values[compareIndex]);
                          		if (typeof values[i] === 'string' || values[i] instanceof String) {
                           			lvalue = parseFloat(values[i].replace(new RegExp(',', 'g'),''));
                           			if (values[compareIndex] !== null) {
                           				rvalue = parseFloat(values[compareIndex].replace(new RegExp(',', 'g'),''));
                           			}
                        		}
                          		if (values[compareIndex] !== null) {
                          			kpi.growth = (((lvalue - rvalue) / rvalue) * 100).toFixed(2);
                          		}
                                if (kpi.growth > 0) {
                                    kpi.compareTextColor = 'text-success';
                                    kpi.compareClass = 'glyphicon-arrow-up';
                                }  else if (kpi.growth < 0) {
                                    kpi.compareTextColor = 'text-danger';
                                    kpi.compareClass = 'glyphicon-arrow-down';
                                } else {
                                    kpi.growth = 0;
                                    kpi.compareTextColor = 'text-info';
                                    kpi.compareClass = 'glyphicon-transfer';
                                }
                            }
                            jsonData.push(kpi);
                        }
                    }
                }
            }
            this.$el.html(this.template(jsonData));
            return this;
        }

    });

    return View;
}));
