(function (root, factory) {
    root.squid_api.controller.FiltersController = factory(root.Backbone, root.squid_api);

}(this, function (Backbone, squid_api) {

    var View = Backbone.View.extend({
        filters : null,
        config : null,
        onChangeHandler : null,
        timeFacetDef : [],

        initialize: function(options) {
            this.config = squid_api.model.config;

            if (this.model) {
                this.filters = this.model;
            } else {
                this.filters = squid_api.model.filters;
            }

            if (options) {
                this.onChangeHandler = options.onChangeHandler;
            }

            // check for new filter selection made by config update
            this.listenTo(this.config, 'change:selection', this.initFilters);
            // check for updated period made by config
            this.listenTo(this.config, 'change:period', function() {
                this.resetPeriodSelection();
            });
        },

        resetPeriodSelection: function() {
            /*  responsible for removing a previously active date
                facet from the current selection.
             */
            var me = this;
            var selection = $.extend(true, {}, this.config.get("selection"));
            var domain = this.config.get("domain");
            var periodConfig = this.config.get("period");
            if (selection) {
                var facets = selection.facets;
                if (facets) {
                    var changed = false;
                    for (var i=0; i<facets.length; i++) {
                        var facet = facets[i];
                        if (facet.dimension.type === "CONTINUOUS" && facet.dimension.valueType === "DATE") {
                            if (facet.id !== periodConfig[domain]) {
                                changed = true;
                                facets.splice(i, 1);
                            }
                        }
                    }
                    selection.facets = facets;
                    this.config.set("selection", selection);
                }
            }
        },

        initFilters : function() {
            var me = this;
            var domainId = this.config.get("domain");
            var projectId = this.config.get("project");

            if (projectId && domainId) {
                var domainPk = {
                        "projectId" : projectId,
                        "domainId" : domainId
                };

                // launch the default filters computation
                var filters = new squid_api.model.FiltersJob();
                filters.set("id", {
                    "projectId": projectId
                });
                filters.set("engineVersion", "2");
                filters.setDomainIds([domainPk]);

                console.log("compute (initFilters)");
                var timeFacets = [];
                $.when(squid_api.controller.facetjob.compute(filters, this.config.get("selection")))
                .always(function() {
                    // update global filters
                    me.filters.set({"domains": filters.get("domains"), "id" : filters.get("id")}, {"silent" : true});
                    // search for time facets and make such they are done
                    var sel = filters.get("selection");
                    if (sel && sel.facets) {
                        var facets = sel.facets;
                        for (var i = 0; i < facets.length; i++) {
                            var facet = facets[i];
                            if (facet.dimension.type === "CONTINUOUS" && facet.dimension.valueType === "DATE") {
                                timeFacets.push(facet);
                            }
                        }
                    }    
                    me.changed(filters.get("selection"), timeFacets);
                });
            }
        },

        defaultBehaviour: function(selection, timeFacets) {
            /*  responsible providing default behavoir in order to:
                1. detecting a time facet to set the config
                2. automatically selecting a currently active facet range
                3. setting the facet selection
             */
            var configPeriod = this.config.get("period");
            var domain = this.config.get("domain");
            var timeFacet = false;
            if (configPeriod) {
                if (configPeriod[domain]) {
                    for (i=0; i<timeFacets.length; i++) {
                        if (configPeriod[domain] === timeFacets[i].id && ! timeFacets[i].error) {
                            timeFacet = timeFacets[i];
                            break;
                        }
                    }
                }
            }
            if (!timeFacet) {
                for (i=0; i<timeFacets.length; i++) {
                    if (timeFacets[i].dimension.valueType === "DATE" && timeFacets[i].dimension.type === "CONTINUOUS"  && ! timeFacets[i].error) {
                        timeFacet = timeFacets[i];
                        break;
                    }
                }
            }
            if (timeFacet) {
                // set config period
                if (configPeriod) {
                    if (configPeriod[domain]) {
                        if (configPeriod[domain] !== timeFacet.id) {
                            configPeriod[domain] = timeFacet.id;
                        }
                    } else {
                        configPeriod[domain] = timeFacet.id;
                    }
                } else {
                    var obj = {};
                    obj[domain] = timeFacet.id;
                    configPeriod = obj;
                }

                // set the default period
                this.config.set("period", configPeriod);

                // set selectedItems
                if (timeFacet.selectedItems.length === 0) {
                    var minDate;
                    var maxDate;
                    // detect mix & max
                    if (timeFacet.items.length > 0) {
                        minDate = timeFacet.items[0].lowerBound;
                        maxDate = timeFacet.items[0].upperBound;
                    } else {
                        minDate = moment().subtract("50", "years").startOf("day").format(squid_api.DATE_FORMAT);
                        maxDate = moment().endOf("day").format(squid_api.DATE_FORMAT);
                    }
                    // set timeFacet selected Items
                    timeFacet.selectedItems = [{upperBound : maxDate, lowerBound : moment(maxDate).subtract("1", "month").format(squid_api.DATE_FORMAT), type : "i"}];
                    // update selection
                    for (ix=0; ix<selection.facets.length; ix++) {
                        if (selection.facets[ix].id === timeFacet.id) {
                            selection.facets[ix] = timeFacet;
                        }
                    }
                    // set selection in config
                    this.config.set("selection", squid_api.utils.buildCleanSelection(selection));
                } else {
                    this.filters.set("selection", selection);
                }  
            } else {
                this.filters.set("selection", selection);
            }
        },

        changed : function(selection, timeFacets) {
            if (this.onChangeHandler) {
                this.onChangeHandler(selection, timeFacets);
            } else {
                this.defaultBehaviour(selection, timeFacets);
            }
        }

    });

    return View;
}));
