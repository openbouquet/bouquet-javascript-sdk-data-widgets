(function(root, factory) {
    root.squid_api.controller.SingleDimensionAnalysisController = factory(root.Backbone,
        root.squid_api);

}(this, function(Backbone, squid_api) {

    var View = squid_api.controller.AnalysisController.extend({
        analysis : null,
        config : null,

        customEvents: function() {
            // to be overridden
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
                for (i=0; i<selection.facets.length; i++) {
                    var facet = selection.facets[i];
                    var chosenDimensions = config.get("chosenDimensions");
                    if (chosenDimensions) {
                        if (config.get("chosenDimensions").length > 0) {
                            this.setDimension(a, chosenDimensions[0]);
                            break;
                        } else {
                            this.setDimension(a, facet.id);
                            break;
                        }
                    } else {
                        this.setDimension(a, facet.id);
                        break;
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

        setDimension: function(a, id) {
            a.set("facets", [{value: id}], {silent : true});
        }
    });

    return View;
}));
