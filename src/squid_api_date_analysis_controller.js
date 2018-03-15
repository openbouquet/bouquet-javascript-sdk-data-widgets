(function(root, factory) {
    root.squid_api.controller.DateAnalysisController = factory(root.Backbone,
        root.squid_api);

}(this, function(Backbone, squid_api) {

    var View = squid_api.controller.AnalysisController.extend({
        analysis : null,
        config : null,
        dimension: null,
        domain: null,

        loadChosenDimensions: function(chosenDimensions) {
			var dfd = new $.Deferred();
			var me = this;
			if (chosenDimensions) {
				var dimensions = [];
                for (var j=0; j<chosenDimensions.length; j++) {
                    var dimensionflatten =  chosenDimensions[j];
                    me.dimension = dimensionflatten.replace(/.*'([^']+)'/, "$1");
                    me.domain = dimensionflatten.replace(/.*'([^']+)'\.@'[^']+'$/, "$1");
                    if (dimensionflatten.startsWith("@'"+me.domain+"'") === false) {
	                    squid_api.getCustomer().then(function(customer) {
	                        customer.get("projects").load(me.config.get("project")).then(function(project) {
	                            project.get("relations").load(me.domain).then(function(relation) {
		                            project.get("domains").load(relation.get("rightId").domainId).then(function(domain) {
		                                domain.get("dimensions").load(me.dimension).then(function(dimension) {
		                                	dimensions.push(dimension);
		                                	if (dimensions.length === chosenDimensions.length) {
		                        				dfd.resolve(dimensions);
		                                	}
		                                });
		                            });
	                            });
	                        });
	                    });                  
	                } else {
	                    squid_api.getCustomer().then(function(customer) {
	                        customer.get("projects").load(me.config.get("project")).then(function(project) {
	                            project.get("domains").load(me.domain).then(function(domain) {
	                                domain.get("dimensions").load(me.dimension).then(function(dimension) {
	                                	dimensions.push(dimension);
	                                	if (dimensions.length === chosenDimensions.length) {
	                        				dfd.resolve(dimensions);
	                                	}
	                                });
	                            });
	                        });
	                    });
                    }
                 }
			}
			return dfd;
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
            var me = this;
            var chosenDimensions = config.get("chosenDimensions");
            var dimensions = this.loadChosenDimensions(chosenDimensions);
            var indexToRemoveFromChosen = null;
            $.when(dimensions).done(function(dimensions)  {
                if (selection) {
                    var dateFound = false;
                    var id = config.get("period")[config.get("domain")];
                    if (dimensions) {
                        for (var j=0; j<dimensions.length; j++) {
                          	var expression = dimensions[j].get("expression");
                        	if (dimensions[j].get("oid") === id.replace(/.*'([^']+)'/, "$1")) {
                        		dateFound = true;
                        		indexToRemoveFromChosen = j;
                        	} else if (Array.isArray(expression.references)) {
                        		if (expression.references.length === 1) {
                        			if (expression.references[0].reference.dimensionId === id.replace(/.*'([^']+)'/, "$1")) {
                        				dateFound = true;
                                		indexToRemoveFromChosen = j;
                        			}
                        		}
                        	}
                        }
                    }
                    //
                    me.setFacets(a, id, indexToRemoveFromChosen);
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
                //with this code, sort doesn't work anymore in data table for date columns
                /*if (indexToRemoveFromChosen || indexToRemoveFromChosen === 0) {
                	a.get("orderBy").splice(indexToRemoveFromChosen, 1);
                }*/
                changed = changed || a.hasChanged();

                if (changed === true) {
                    me.onChangeHandler(me.analysis);
                }
            });
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
                var dimensions = $.extend(true, [], this.config.get("chosenDimensions"));

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
                a.set({'beyondLimit' : [{"col" : 0}]}, {silent : true});
            }
        }
    });

    return View;
}));
