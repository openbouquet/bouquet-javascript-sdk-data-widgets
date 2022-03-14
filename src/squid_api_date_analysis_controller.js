(function(root, factory) {
    root.squid_api.controller.DateAnalysisController = factory(root.Backbone,
        root.squid_api);

}(this, function(Backbone, squid_api) {

    var View = squid_api.controller.AnalysisController.extend({
        analysis : null,
        config : null,
        dimension: null,
        domain: null,
       
        loadChosenDimensions: function(chosenDimensions, allDimensions) {
        	const dimensions = [];
        	if (typeof allDimensions.models !== "undefined") {
        		allDimensions = allDimensions.models;
        	}
        	for (i=0; i<chosenDimensions.length; i++) {
        		var chosenDimension=chosenDimensions[i];
        		var found=false;
        		for (j=0; j<allDimensions.length; j++) {
        			var id;
        			if (typeof allDimensions[j].attributes === "object" && Array.isArray(allDimensions[j].attributes) === false) {
        				id = allDimensions[j].get("id").dimensionId;
        			} else {
        				id = allDimensions[j].id.dimensionId;
        			}
        			if (chosenDimension.endsWith("@'" + id + "'")) {
    					dimensions.push({ "chosenDimension": chosenDimension, "definition": allDimensions[j]});
    					found=true;
    					break;
        			}
        		}
        		if (!found) {
					dimensions.push({ "chosenDimension": chosenDimension, "definition": null});
        		}
        	}
        	return dimensions;
        },
        
        refreshAnalysis : function(silent) {
            var me = this;
            var changed = false;
            if (silent !== false) {
                silent = true;
            }
        	  
            var a = me.analysis;
            a.set({
                "id" : {
                    "projectId" : me.config.get("project"),
                    "analysisJobId" : a.get("id").analysisJobId
                }
            }, {
                "silent" : silent
            });
            changed = changed || a.hasChanged();
            a.set({
                "domains" : [ {
                    "projectId" : me.config.get("project"),
                    "domainId" : me.config.get("domain")
                } ]
            }, {
                "silent" : silent
            });
            changed = changed || a.hasChanged();
            
            //Order by must be set before the facets 
            if (me.config.hasChanged("orderBy")) {
				a.set({
					"orderBy" :  $.extend(true, [], me.config.get("orderBy"))
				}, {
					"silent" : silent
				});
            } else {
            	a.attributes.orderBy=$.extend(true, [], me.config.get("orderBy"));
            	a.attributes.offset=0;
            	a.attributes.startIndex=0;
            }
            changed = changed || a.hasChanged();
            //var selection = me.config.get("selection");
            var indexToRemoveFromChosen = null;
            var chosenDimensions = $.extend(true, [], this.config.get("chosenDimensions"));
            a.setFacets(chosenDimensions, silent);
            var id = me.config.get("period")[me.config.get("domain")];
            if (chosenDimensions && typeof me.config.get("allDimensions") !== "undefined" && me.config.get("allDimensions") !== null && chosenDimensions) {
                var dateFound = false;
                if (id) {
                    var dimensions = this.loadChosenDimensions(chosenDimensions, me.config.get("allDimensions"));
                	if (dimensions) {
                        for (var j=0; j<dimensions.length; j++) {
                          	var expression, oid;
                          	if  (dimensions[j].definition !== null) {
	                          	if (dimensions[j].definition.expression) {
	                          		expression = dimensions[j].definition.expression;
	                          		oid = dimensions[j].definition.oid;
	                          	} else {
	                          		expression = dimensions[j].definition.get("expression");
	                          		oid = dimensions[j].definition.get("oid");
	                          	}
	                        	if (oid === id.replace(/.*'([^']+)'/, "$1")) {
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
                    }
                    //
                	if (!dateFound) {
               		 	me.setFacets(a, id);
                	} else if (indexToRemoveFromChosen>0) {
                		 me.setFacets(a, dimensions[indexToRemoveFromChosen].chosenDimension, indexToRemoveFromChosen);
                	}
                 }
            } else if (id) {
            	me.setFacets(a, id);
            }
            changed = changed || a.hasChanged() || me.config.hasChanged("allDimensions");
            a.setMetrics(me.config.get("chosenMetrics"), silent);
            changed = changed || a.hasChanged();
            a.setSelection(me.config.get("selection"), silent);
            changed = changed || a.hasChanged();
            a.set({
                "limit" : me.config.get("limit")
            }, {
                "silent" : silent
            });
            changed = changed || a.hasChanged();
            a.set({
                "rollups" : me.config.get("rollups")
            }, {
                "silent" : silent
            });
            changed = changed || a.hasChanged();

            if (changed === true) {
                me.onChangeHandler(me.analysis);
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
                var dimensions = $.extend(true, [], this.config.get("chosenDimensions"));
            	var orders = $.extend(true, [], a.get("orderBy"));
            	
                // if current date is in dimension list, remove it
                if (indexToRemoveFromChosen || indexToRemoveFromChosen === 0) {
                    var dimension = dimensions.splice(indexToRemoveFromChosen, 1);
                    if (Array.isArray(dimension) && dimension.length === 1) {
                    	if (Array.isArray(orders) && orders.length>0) {
                    		if (orders[0].expression && orders[0].expression.value === dimension[0]) {
                    			orders.splice(0, 1);
                    		}
                    	}
                    }
                }
                a.setFacets(dimensions, {silent : true});
                var facets = a.get("facets");
                if (facets) {
                    var expression = "TO_DATE(" + id + ")";
                    if (timeUnit) {
                        expression = timeUnit + "("+ id + ")";
                    }
                    facets.unshift({value: expression});
                    orders.unshift({"direction": "ASC", "expression": { "value" : expression}});
                    a.attributes.orderBy = orders;
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
