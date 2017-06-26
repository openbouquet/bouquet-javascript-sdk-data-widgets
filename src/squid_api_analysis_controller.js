(function(root, factory) {
    root.squid_api.controller.AnalysisController = factory(root.Backbone,
            root.squid_api);

}(this, function(Backbone, squid_api) {

    var View = Backbone.View.extend({
        analysis : null,
        config : null,
        pagination: null,
        autoRefresh: null,
        ignoreConfigChange: null,

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
                if (options.pagination) {
                    this.pagination = options.pagination;
                }
                if (options.afterInitializedCallback) {
                    this.afterInitializedCallback = options.afterInitializedCallback;
                }
                if (options.autoRefresh) {
                    this.autoRefresh = options.autoRefresh;
                }
                if (options.ignoreConfigChange) {
                    this.ignoreConfigChange = options.ignoreConfigChange;
                }
            }

            if (!this.config) {
                this.config = squid_api.model.config;
            }
            
            this.listenTo(squid_api.model.status, "change:configReady", function() {
                if (squid_api.model.status.get("configReady") === true) {
                    me.refreshAnalysis();
                }
            });

            // controller
            if (! this.ignoreConfigChange) {
                this.listenTo(this.config, "change", function() {
                    var refreshNeeded = false;
                    if (this.config.hasChanged("project")) {
                        refreshNeeded = true;
                    }
                    if (this.config.hasChanged("domain")) {
                        refreshNeeded = true;
                    }
                    if (this.config.hasChanged("chosenDimensions")) {
                        refreshNeeded = true;
                    }
                    if (this.config.hasChanged("chosenMetrics")) {
                        refreshNeeded = true;
                    }
                    if (this.config.hasChanged("limit")) {
                        refreshNeeded = true;
                    }
                    if (this.config.hasChanged("rollups")) {
                        refreshNeeded = true;
                    }
                    if (this.config.hasChanged("orderBy")) {
                        refreshNeeded = true;
                    }
                    if (this.config.hasChanged("selection")) {
                        refreshNeeded = true;
                    }   
                    if (this.config.hasChanged("startIndex")) {
                        refreshNeeded = true;
                    }
                    if (this.config.hasChanged("timeUnit")) {
                        refreshNeeded = true;
                    }
                    if (refreshNeeded && (squid_api.model.status.get("configReady") === true)) {
                    	if (this.config.hasChanged("startIndex") === false) {
                    		this.config.set("startIndex",0, {silent: true});
                    		this.config.set("pageIndex",0, {silent: true});
                    	}
                        this.refreshAnalysis(true);
                    }
                });
            }

            if (this.afterInitializedCallback) {
                this.afterInitializedCallback.call(this);
            }
            if (this.autoRefresh) {
                this.refreshAnalysis();
            }
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
            if (this.pagination) {
                a.setParameter("maxResults", this.config.get("maxResults") || 10, silent);
                var configStartIndex = this.config.get("startIndex") || 0;
                var startIndexChange = false;
                if (a.getParameter("startIndex") !== null) {
                    startIndexChange = (a.getParameter("startIndex") !== configStartIndex);
                }
                if (startIndexChange && (this.config.hasChanged("startIndex") && !this.config.hasChanged("selection"))) {
                    // update if pagination changed
                    if (a.get("id") && (a.get("id").analysisJobId)) {
                        a.setParameter("startIndex", configStartIndex, silent);
                        this.onChangeHandler(a);
                        squid_api.compute(a);
                    }
                }
            }
            if (changed === true) {
                this.onChangeHandler(this.analysis);
            }
        }
    });

    return View;
}));
