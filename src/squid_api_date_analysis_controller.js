(function(root, factory) {
    root.squid_api.controller.DateAnalysisController = factory(root.Backbone,
        root.squid_api);

}(this, function(Backbone, squid_api) {

    var View = squid_api.controller.AnalysisController.extend({
        analysis : null,
        config : null,

        customEvents: function() {
            var me = this;
            this.config.on('change:timeUnit', function() {
                me.refreshAnalysis();
            });
        },

        refreshAnalysis : function(silent) {
            var changed = false;
            var a = this.analysis;
            var config = this.config;
            if (silent !== false) {
                silent = true;
            }

            a.set({
                "id" : {
                    "projectId" : config.get("project"),
                    "analysisJobId" : a.get("id").analysisJobId
                }
            }, {
                "silent" : silent
            });
            changed = changed || a.hasChanged();
            a.set({
                "domains" : [ {
                    "projectId" : config.get("project"),
                    "domainId" : config.get("domain")
                } ]
            }, {
                "silent" : silent
            });
            changed = changed || a.hasChanged();
            var selection = this.config.get("selection");
            if (selection) {
                var dateFound = false;
                for (var i=0; i<selection.facets.length; i++) {
                    // search for date facet within chosenDimensions
                    var facet = selection.facets[i];
                    var chosenDimensions = config.get("chosenDimensions");
                    var id = facet.id;
                    if (chosenDimensions) {
                        var existsInChosen = chosenDimensions.includes(id);
                        if (config.get("chosenDimensions").length > 0) {
                            if (! existsInChosen && facet.dimension.valueType === "DATE") {
                                this.setFacets(a, facet.id);
                                dateFound = true;
                                break;
                            }
                        }
                    }
                }
                if (! dateFound) {
                    // if no date is found, use the first one found
                    for (var ix=0; ix<selection.facets.length; ix++) {
                        if (selection.facets[ix].dimension.type === "CONTINUOUS" && selection.facets[ix].dimension.valueType === "DATE") {
                            var indexToRemoveFromChosen = null;
                            var chosenIndex = chosenDimensions.indexOf(selection.facets[ix].id);
                            if (chosenDimensions && (chosenIndex > -1)) {
                                indexToRemoveFromChosen = chosenIndex;
                            }
                            this.setFacets(a, selection.facets[ix].id, indexToRemoveFromChosen);
                            break;
                        }
                    }
                }
            }
            changed = changed || a.hasChanged();
            a.setMetrics(config.get("chosenMetrics"), silent);
            changed = changed || a.hasChanged();
            a.setSelection(config.get("selection"), silent);
            changed = changed || a.hasChanged();
            a.set({
                "limit" : config.get("limit")
            }, {
                "silent" : silent
            });
            changed = changed || a.hasChanged();
            a.set({
                "rollups" : config.get("rollups")
            }, {
                "silent" : silent
            });
            changed = changed || a.hasChanged();
            a.set({
                "orderBy" : config.get("orderBy")
            }, {
                "silent" : silent
            });
            changed = changed || a.hasChanged();

            if (changed === true) {
                this.onChangeHandler(this.analysis);
            }
        },

        setFacets: function(a, id, indexToRemoveFromChosen) {
            var toDate = false;
            var beyondLimit = false;
            squid_api.utils.checkAPIVersion(">=4.2.1").done(function(){
                toDate = true;
            });
            squid_api.utils.checkAPIVersion(">=4.2.5").done(function(){
                beyondLimit = true;
            });
            if (toDate) {
                var timeUnit = this.config.get("timeUnit");
                var dimensions =  this.config.get("chosenDimensions");

                // if current date is in dimension list, remove it
                if (indexToRemoveFromChosen || indexToRemoveFromChosen === 0) {
                    dimensions.splice(indexToRemoveFromChosen, 1);
                }
                a.setFacets(dimensions, {silent : true});
                var facets = a.get("facets");
                if (facets) {
                    var expression = "TO_DATE(" + id + ")";
                    if (timeUnit) {
                        expression = timeUnit + "("+ id + ")";
                    }
                    facets.unshift({value: expression});
                }
            } else {
                a.setFacets([id], silent);
            }
            if (beyondLimit) {
                a.set('beyondLimit', [{"col" : 0}]);
            }
        }
    });

    return View;
}));
