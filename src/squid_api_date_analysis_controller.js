(function(root, factory) {
    root.squid_api.controller.DateAnalysisController = factory(root.Backbone,
        root.squid_api);

}(this, function(Backbone, squid_api) {

    var View = squid_api.controller.AnalysisController.extend({
        analysis : null,
        config : null,

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
                var toDate = false;
                squid_api.utils.checkAPIVersion(">=4.2.1").done(function(v){
                    toDate = true;
                });
                for (i=0; i<selection.facets.length; i++) {
                    if (selection.facets[i].dimension.type == "CONTINUOUS" && selection.facets[i].dimension.valueType == "DATE") {
                        if (toDate) {
                            a.setFacets([selection.facets[i].id], silent);
                            a.set("facets", [{value: "TO_DATE(" + selection.facets[i].id + ")"}], {silent : true});
                        } else {
                            a.setFacets([selection.facets[i].id], silent);
                        }
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
        }
    });

    return View;
}));
