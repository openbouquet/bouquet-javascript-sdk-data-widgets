(function(root, factory) {
    root.squid_api.controller.AnalysisController = factory(root.Backbone,
            root.squid_api);

}(this, function(Backbone, squid_api) {

    var View = Backbone.View.extend({
        analysis : null,
        config : null,

        initialize : function(options) {
            var me = this;
            this.status = squid_api.model.status;

            if (this.model) {
                this.analysis = this.model;
            } else {
                this.analysis = new squid_api.model.AnalysisJob();
                this.model = this.analysis;
            }

            if (options) {
                // setup options
                if (options.config) {
                    this.config = options.config;
                }
                if (options.onChangeHandler) {
                    this.onChangeHandler = options.onChangeHandler;
                }
                if (options.onStartIndexChangeHandler) {
                    this.onStartIndexChangeHandler = options.onStartIndexChangeHandler;
                }
            }

            if (!this.config) {
                this.config = squid_api.model.config;
            }

            // controller
            this.listenTo(this.config, "change", function() {
                var refreshNeeded = false;
                if (this.config.hasChanged("project")) {
                    refreshNeeded = true;
                };
                if (this.config.hasChanged("domain")) {
                    refreshNeeded = true;
                };
                if (this.config.hasChanged("chosenDimensions")) {
                    refreshNeeded = true;
                };
                if (this.config.hasChanged("chosenMetrics")) {
                    refreshNeeded = true;
                };
                if (this.config.hasChanged("limit")) {
                    refreshNeeded = true;
                };
                if (this.config.hasChanged("rollups")) {
                    refreshNeeded = true;
                };
                if (this.config.hasChanged("orderBy")) {
                    refreshNeeded = true;
                };
                if (this.config.hasChanged("selection")) {
                    refreshNeeded = true;
                };
                if (this.config.hasChanged("startIndex")) {
                    refreshNeeded = true;
                };
                if (refreshNeeded) {
                    me.refreshAnalysis();
                }
            });

            this.customEvents();
        },

        customEvents: function() {
            // to be overridden
        },

        onChangeHandler : function(analysis) {
            squid_api.compute(analysis);
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
            a.setParameter("maxResults", this.config.get("maxResults"), silent);
            changed = changed || a.hasChanged();
            var startIndexChange = (a.getParameter("startIndex") !== this.config.get("startIndex"));
            a.setParameter("startIndex", this.config.get("startIndex"), silent);
            changed = changed || a.hasChanged();
            if (this.onStartIndexChangeHandler && startIndexChange) {
                this.onStartIndexChangeHandler.call(this, a);
            }
            a.set({
                "domains" : [ {
                    "projectId" : config.get("project"),
                    "domainId" : config.get("domain")
                } ]
            }, {
                "silent" : silent
            });
            changed = changed || a.hasChanged();
            a.setFacets(config.get("chosenDimensions"), silent);
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
