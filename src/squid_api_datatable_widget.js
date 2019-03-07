(function (root, factory) {
	root.squid_api.view.DataTableView = factory(root.Backbone, root.squid_api);
}(this, function (Backbone, squid_api) {

	View = Backbone.View.extend( {

		template : null,

		maxRowsPerPage : 10000,

		format : null,

		d3Formatter : null,

		config : null,

		paging : false,

		ordering : false,

		noDataMessage : "No data available in table",

		headerBadges : false,

		enableFormatting : true,

		paginationView : null,

		rollupSummaryColumn : null,

		rollups : null,

		reRunMessage : "Please manually refresh your analysis",

		staleMessage : "Click refresh to update",

		currentDomain : null,

		addFacetValueFromResults: false,

		initialize : function(options) {
			var me = this;

			// config is used for orderBy
			if (options.config) {
				this.config = options.config;
			} else {
				this.config = squid_api.model.config;
			}

			if (this.model) {
				this.listenTo(this.model, 'change:error', function() {
					console.log("DEBUG:"+"DataTable error change : "+this.model.get("error"));
					me.render();
				});
				this.listenTo(this.model, 'change:status', function() {
					console.log("DEBUG:"+"DataTable status change : "+this.model.get("status"));
					me.render();
				});
				this.listenTo(this.model, 'change:facets', function() {
					console.log("DEBUG:"+"DataTable facets change : "+this.model.get("facets"));
					me.render();
				});
				this.listenTo(this.model, 'change:metricList', function() {
					console.log("DEBUG:"+"DataTable metricList change : "+this.model.get("metricList"));
					me.render();
				});
				this.listenTo(this.model, 'change:orderBy', function() {
					console.log("DEBUG:"+"DataTable orderBy change : "+this.model.get("orderBy"));
					me.render();
				});
			}

			// setup options
			if (options.template) {
				this.template = options.template;
			} else {
				this.template = squid_api.template.squid_api_datatable_widget;
			}

			// detect analysis formatting
			var optionKeys = this.model.get("optionKeys");
			if (optionKeys) {
				if (optionKeys.applyFormat === true) {
					squid_api.utils.checkAPIVersion(">=4.2.15").done(function(){
						this.enableFormatting = false;
					}).fail(function(v){
						if (v) {
							console.log("API version NOT OK : "+v + " for Automatic Analysis Results Formatting");
						} else {
							console.error("WARN unable to get Bouquet Server version");
						}
					});
				}
			}

			// filters are used to get the Dimensions and Metrics names
			if (options.filters) {
				this.filters = options.filters;
			} else {
				this.filters = squid_api.model.filters;
			}

			if (options.maxRowsPerPage) {
				this.maxRowsPerPage = options.maxRowsPerPage;
			}
			if (options.paging) {
				this.paging = options.paging;
			}
			if (options.ordering) {
				this.ordering = options.ordering;
			}
			if (options.noDataMessage) {
				this.noDataMessage = options.noDataMessage;
			}
			if (options.headerBadges) {
				this.headerBadges = options.headerBadges;
			}
			if (options.rollupSummaryColumn) {
				this.rollupSummaryColumn = options.rollupSummaryColumn;
			}
			if (options.staleMessage) {
				this.staleMessage = options.staleMessage;
			}
			if (options.reRunMessage) {
				this.reRunMessage = options.reRunMessage;
			}
			if (options.addFacetValueFromResults) {
				this.addFacetValueFromResults = options.addFacetValueFromResults;
			}
			if (this.enableFormatting) {
				if (d3) {
					this.d3Formatter = d3.format(",");
				}
				if (options.format) {
					this.format = options.format;
				} else {
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
			}

			this.renderBaseViewPort();
		},

		events : ({
			"click thead th" : function(event) {
				if ($(event.currentTarget).attr("aria-describedby")) {
					$(event.currentTarget).tooltip("destroy");
				}

				if (this.ordering) {
					var orderBy = this.config.get("orderBy");
					var expressionValue = $(event.currentTarget).attr("data-content");
					var obj = {"expression" : {"value" : expressionValue}};
					if (orderBy) {
						if (orderBy[0]) {
							if (orderBy[0].expression) {
								if (orderBy[0].expression.value === expressionValue) {
									if ($(event.currentTarget).hasClass("ASC")) {
										obj.direction = "DESC";
									} else {
										obj.direction = "ASC";
									}
								} else {
									obj.direction = "DESC";
								}
							}
						}
					}
					this.config.set("orderBy", [obj]);
				}
			},
			"click td.dimension" : function(event) {
				if (this.addFacetValueFromResults) {

					var value = $(event.currentTarget).text();
					var facetId = $(event.currentTarget).parents('tbody').siblings('thead').find('> tr > th:eq(' + $(event.currentTarget).index() + ')').attr("data-content");

					var selectionClone = $.extend(true, {}, this.filters.get("selection"));
					var facets = selectionClone.facets;
					if (facets) {
						for (i=0; i<facets.length; i++) {
							if (facets[i].id === facetId) {
								var selectedItems = facets[i].selectedItems;
								var add = true;
								for (ix=0; ix<selectedItems.length; ix++) {
									if (selectedItems[ix].value === value) {
										add = false;
										delete facets[i].selectedItems[ix];
									}
								}
								if (add) {
									facets[i].selectedItems.push({
										id    : value,
										type  : "v",
										value : value
									});
								}
							}
						}
						// Set the updated filters model
						this.config.set("selection", squid_api.utils.buildCleanSelection(selectionClone));
					}
				}
			}
		}),

		setModel : function(model) {
			this.model = model;
			this.initialize();
		},

		getColumnIdentifier : function(col) {
			if (col.definition && col.definition.startsWith("@")) {
				return col.definition;
			} else if (col.pk){
				var lastPos = col.name.indexOf(" [");
				var name = col.name;
				if (lastPos>1) {
					name = col.name.substring(0,lastPos);
				}
				var id = "@'"+col.pk.domainId+"'.";
				if (col.role === "DATA") {
					id += "[measure:'"+name+"']";
					if (col.originType === "GROWTH") {
						id = "growth("+id+")";
					} else if (col.originType === "COMPARETO") {
						id = "compareTo("+id+")";
					}
				} else {
					id += "@'"+col.id+"'";
				}
				return id;
			} else {
				return col.id;
			}
		},

		/**
		 * see : http://stackoverflow.com/questions/10966440/recreating-a-removed-view-in-backbone-js
		 */
		remove: function() {
			this.undelegateEvents();
			this.$el.empty();
			this.stopListening();
			return this;
		},

		displayTableHeader : function(selector, arr) {
			//First clean old tooltips if any
			var tooltips = $("div[role='tooltip']");
			var it = 0;
			for (it=0;it<tooltips.length;it++) {
				tooltips[it].remove();
			}
			var r = Math.random();
			var me = this;
			me.displayTableHeaderStep2(selector, arr, r);
		},

		displayTableHeaderStep2 : function(selector, domainMetrics, r) {
			console.log("DEBUG:"+"displayTableHeader start "+r);
			var me = this;
			var i, j;
			var domain = this.config.get("domain");
			var metrics;
			if (domain) {
				var columns = [];
				var originalColumns;//unaltered by rollup splice
				var invalidSelection = false;
				var status = this.model.get("status");

				var analysis = this.model;
				// in case of a multi-analysis model
				if (analysis.get("analyses")) {
					analysis = analysis.get("analyses")[0];
				}
				var results = analysis.get("results");
				var rollups;
				if (results && status !== "PENDING" && status !== "RUNNING") {
					// Analysis computed : use results columns
					columns = $.extend(true, [], results.cols);

					// init rollups
					rollups = analysis.get("rollups");
					if (rollups && (rollups.length ===0)) {
						rollups = this.rollups = null;
					}
					originalColumns = columns;
				} else {
					// Analysis not computed yet : use analysis definition
					if (this.filters.get("selection")) {
						var obj;
						var facets = this.model.get("facets");
						if (facets) {
							for (i=0; i<facets.length; i++) {
								var facetWithAlias = facets[i].value;
								var alias = null;
								var facetId = facetWithAlias;
								if (facetWithAlias.toLowerCase().indexOf("' as '") !== -1) {
									facetId = facetWithAlias.substring(0, facetWithAlias.toLowerCase().indexOf("' as '")+1);
									alias =  facetWithAlias.substring(facetWithAlias.toLowerCase().indexOf("' as '")+6, facetWithAlias.length-1);
								}
		
								obj = squid_api.utils.find(this.filters.get("selection").facets, "id", facetId) || {};
								if (obj) {
									obj = {
											dataType : "STRING",
											name : alias === null? obj.name:alias,
											id : obj.id
									};
									columns.push(obj);
								} else {
									// impossible to get column data from selection
									invalidSelection = true;
									console.error("ERROR:"+"displayTableHeader invalidSelection");
								}
							}
						}
						metrics = this.model.get("metricList");
						if (metrics) {
							if (metrics.length === 0) {
								metrics = squid_api.model.config.get("chosenMetrics");
							}
						}
						if (metrics) {
							var metric;
							for (i=0; i<metrics.length; i++) {
								metric = metrics[i];
								if (metrics[i].id) {
									for (ix=0; ix<domainMetrics.length; ix++) {
										if (metrics[i].id.metricId === domainMetrics[ix].oid) {
											metrics[i].name = domainMetrics[ix].name;
										}
									}
									obj = squid_api.utils.find(domainMetrics, "oid", metrics[i].id.metricId) || {};
									if (obj) {
										obj = {
												dataType : "NUMBER",
												name : metrics[i].name,
												id : metrics[i].value
										};
										columns.push(obj);
									} else {
										// impossible to get column data from selection
										invalidSelection = true;
									}
								} else {
									obj = {
											dataType : "NUMBER",
											name : (typeof metrics[i].name !== "undefined"?metrics[i].name:""),
											id :  (typeof metrics[i].expression !== "undefined"?metrics[i].expression.value:"")
									};
									columns.push(obj);
								}
							}
						}
						if (this.config.get("rollups") && Array.isArray(this.config.get("rollups")) && this.config.get("rollups").length>0 && this.rollupSummaryColumn >= 0 && status !== "DONE") {
							originalColumns = columns.slice();
							columns.splice(this.config.get("rollups")[0].col, 1);
						} else {
							originalColumns = columns;
						}
					}
				}

				var orderBy = this.model.get("orderBy");
				if (orderBy) {
					// add orderBy direction
					if (columns) {
						for (col=0; col<columns.length; col++) {
							if (columns[col]) {
								columns[col].orderDirection = undefined;
								var colIdentifier = me.getColumnIdentifier(columns[col]);
								for (ix=0; ix<orderBy.length; ix++) {
									if (this.ordering) {
										if (colIdentifier === orderBy[ix].expression.value) {
											columns[col].orderDirection = orderBy[ix].direction;
											break;
										}
/*
										if (columns[col].definition) {
											if (orderBy[ix].expression) {
												if (columns[col].definition === orderBy[ix].expression.value) {
													columns[col].orderDirection = orderBy[ix].direction;
													break;
												}
											}
										} else if (orderBy[ix].expression) {
											if (columns[col].id === orderBy[ix].expression.value) {
												columns[col].orderDirection = orderBy[ix].direction;
												break;
											}
										}
 */
									}
								}
							}
						}
					}
				}

				var rollupColIndex = null;
				var rollupSummaryIndex = null;
				if (rollups) {
					if ((rollups.length>0)) {
						if (rollups.length>1 && rollups[0].col === -1) {
							rollupColIndex = rollups[1].col + 1;
						} else {
							rollupColIndex = rollups[0].col + 1;
						}
					}
					if (this.config.get("rollups") && this.rollupSummaryColumn >= 0) {
						rollupSummaryIndex = this.rollupSummaryColumn + 1;
					}
				}
				me = this;

				// header
				d3.select(selector).select("thead tr").selectAll("th").remove();

				// set compare col
				this.compareCols = [];
				this.metricCols = [];
				this.dateCols = [];
				this.firstMeasure = -1;
				if (columns) {
					for (i=0; i<columns.length; i++) {
						if (columns[i].originType === "COMPARETO") {
							this.compareCols.push(i);
							if (this.firstMeasure === -1 || this.firstMeasure>i) {
								this.firstMeasure = i;
							}
						}
						if (columns[i].role === "DATA") {
							this.metricCols.push(i);
							if (this.firstMeasure === -1 || this.firstMeasure>i) {
								this.firstMeasure = i;
							}
						}
						if (columns[i].extendedType) {
							if (columns[i].extendedType.name === "DATE") {
								this.dateCols.push(i);
							}
						}
					}
				}

				if (squid_api.model.config.has("hiddenTableColumns")) {
					var hiddenTableColumns = squid_api.model.config.get("hiddenTableColumns");
					for (i=0; i<hiddenTableColumns.length; i++) {
						for (j=0; j<columns.length; j++) {
							if (typeof columns[j].id !== "undefined" && columns[j].id.indexOf(hiddenTableColumns[i])!==-1) {
								columns.splice(j,1);
								break;
							}
						}
					}
				}
				if (!invalidSelection && columns) {
					console.info("DEBUG:"+"displayTableHeader D3, cols :"+columns.length);
					d3.select(selector).select("thead tr").selectAll("th")
					.data(columns)
					.enter().append("th")
					.attr("class", function(d, i) {
						var str = "";
						if (rollups) {
							if (i === 0) {
								// hide grouping column
								str = str + "hide " + d.dataType;
							} else if (( rollupSummaryIndex !== null) && (i === rollupColIndex)) {
								// hide rollup column
								str = str + "hide " + d.dataType;
							} else {
								str = str + d.dataType;
							}
						}
						if (d.orderDirection) {
							str = str + " " + d.orderDirection;
						}
						if (me.compareCols) {
							if (me.compareCols.length > 0) {
								if (me.compareCols.indexOf(i) > -1) {
									str += " compareTo";
								} else if (me.metricCols.indexOf(i) > -1) {
									str += " compare";
								}
							}
						}
						return str;
					})
					.html(function(d) {
						var str = d.name;
						var upArrow = "&#xffea;";
						var downArrow = "&#xffec;";
						if (d.orderDirection) {
							if (d.dataType === "NUMBER" || (d.extendedType && d.extendedType.name === "int4") || (d.extendedType && d.extendedType.name === "int8")) {
								if (d.orderDirection === "ASC") {
									str = str + " " + "<span class='sort-direction'>" + upArrow + "</span>";
								} else if (d.orderDirection === "DESC") {
									str = str + " " + "<span class='sort-direction'>" + downArrow + "</span>";
								}
							} else {
								if (d.orderDirection === "ASC") {
									str = str + " " + "<span class='sort-direction'>" + upArrow + "</span>";
								} else if (d.orderDirection === "DESC") {
									str = str + " " + "<span class='sort-direction'>" + downArrow + "</span>";
								}
							}
						}

						return str;
					})
					.attr("data-role", function(d) {
						return d.role;
					})
					.attr("origin-type", function(d) {
						return d.originType;
					})
					.attr("data-content", function(d) {
						return me.getColumnIdentifier(d);
						/*if (!d.role || d.role !== "DATA") {
							if (d.definition) {
								return d.definition;
							} else {
								return d.id;
							}	
						} else {
							if (d.definition && d.definition.startsWith("@")) {
								return d.definition;
							} else if (d.pk){
								var lastPos = d.name.indexOf(" [");
								var name = d.name;
								if (lastPos>1) {
									name = d.name.substring(0,lastPos);
								}
								var id = "@'"+d.pk.domainId+"'.[measure:'"+name+"']";
								if (d.originType === "GROWTH") {
									id = "growth("+id+")";
								} else if (d.originType === "COMPARETO") {
									id = "compareTo("+id+")";
								}
								return id;
							} else {
								return d.id;
							}
						}*/
					});

					// add class if more than 10 columns
					if (this.$el.find("thead th").length > 10) {
						this.$el.find("table").addClass("many-columns");
					} else {
						this.$el.find("table").removeClass("many-columns");
					}

					// add tooltips on metrics / compare columns
					var headerCols = this.$el.find("thead th");
					squid_api.getCustomer().then(function(customer) {
						return customer.get("projects").load(me.config.get("project")).then(function(project) {
							return project.get("domains").load(me.config.get("domain")).then(function(domain) {
								for (ix=0; ix<headerCols.length; ix++) {
									var column = $(headerCols[ix]);

									var role = column.attr("data-role");
									var originType = column.attr("origin-type");
									var id = column.attr("data-content");
									var metricItem, metricItemDescription;
									
									/*var options = {
											position: {
												my: "center bottom",
												at: "center top+5",
											}
									};*/

									if (role === "DATA" && originType === "USER") {
										// metric
										metrics = domain.get("metrics");
										metricItem = metrics.findWhere({"definition" : id});
										metricItemDescription = "";
										if (metricItem) {
											metricItemDescription = metricItem.get("description");
										}
										column.attr("title", metricItemDescription);
										//column.tooltip(options);
									} else if (originType === "COMPARETO" || originType === "GROWTH") {
										// compare column
										results = squid_api.model.filters.get("results");
										if (results) {
											var compareTo = results.compareTo;
											if (compareTo) {
												if (compareTo[0]) {
													if (compareTo[0].selectedItems[0]) {
														var lowerBound = moment(compareTo[0].selectedItems[0].lowerBound).utc().format("ll");
														var upperBound = moment(compareTo[0].selectedItems[0].upperBound).utc().format("ll");
														metrics = domain.get("metrics");
														if (typeof id !== "undefined") {
															metricItem = metrics.findWhere({"definition" : id.replace(/.*\(([^\)]+)\)/, "$1")});
															metricItemDescription = "metric";
															if (metricItem) {
																metricItemDescription = metricItem.get("name");
															}
														} else {
															metricItemDescription = "";
														}

														var columnTitle = "Metric " + (originType === "COMPARETO"? "comparison":"growth") + " on period " + lowerBound + " to " + upperBound;
														if (typeof $.i18n !== "undefined") {
															columnTitle = $.i18n.t("compare-growth-title", {"type":(originType === "COMPARETO"? $.i18n.t("comparison-label"):$.i18n.t("growth-label")), "metric":metricItemDescription, "lower":lowerBound, "upper":upperBound});
											            }

														column.attr("title", columnTitle);
													}
												}
											}
										}
										//column.tooltip(options);
									} else if (typeof id !== "undefined"){
										var dimensions = domain.get("dimensions");
										var dimension = dimensions.findWhere({"oid" : id.replace(/.*'([^']+)'/, "$1")});
										var dimensionDescription = "";
										if (dimension) {
											dimensionDescription = dimension.get("description");
										}
										column.attr("title", dimensionDescription);
										//column.tooltip(options);
									}
								}
							});
						});
					});
				}
			}
			console.log("DEBUG:"+"displayTableHeader end "+r);
		},

		displayTableContent : function(selector) {
			console.log("DEBUG:"+"displayTableContent start");
			var me = this;

			var analysis = this.model;
			// in case of a multi-analysis model
			if (analysis.get("analyses")) {
				analysis = analysis.get("analyses")[0];
			}
			var results = analysis.get("results");
			var rollups;

			if (results) {
				rollups = analysis.get("rollups");
				if (rollups && (rollups.length ===0)) {
					rollups = this.rollups = null;
				}

				var rollupColIndex = null;
				var rollupSummaryIndex = null;
				if (rollups) {
					if ((rollups.length>0)) {
						if (rollups.length>1 && rollups[0].col === -1) {
							rollupColIndex = rollups[1].col + 1;
						} else {
							rollupColIndex = rollups[0].col + 1;
						}
					}
					if (this.config.get("rollups") && this.rollupSummaryColumn >= 0) {
						rollupSummaryIndex = this.rollupSummaryColumn + 1;
					}
				}
				// apply paging and number formatting
				var data = {};
				data.results = {"cols" : $.extend(true, [], results.cols), "rows" : results.rows};
				if (this.enableFormatting) {
					var hiddenIndices = [];
					if (squid_api.model.config.has("hiddenTableColumns")) {
						var hiddenTableColumns = squid_api.model.config.get("hiddenTableColumns");
						for (i=0; i<hiddenTableColumns.length; i++) {
							for (j=0; j<results.cols.length; j++) {
								if (typeof results.cols[j].id !== "undefined" && results.cols[j].id.indexOf(hiddenTableColumns[i])!==-1) {
									hiddenIndices.push(j);
								}
							}
						}
						for (i=hiddenIndices.length-1; i>=0; i--) {
							data.results.cols.splice(i,1);
						}
					}
					data.results.rows = [];
					rows = results.rows;
					for (rowIdx = 0; (rowIdx<rows.length && rowIdx<this.maxRowsPerPage); rowIdx++) {
						row = rows[rowIdx];
						newRow = {v:[]};
						var offsetCol = 0;
						for (colIdx = 0; colIdx<results.cols.length; colIdx++) {
							var display = true;
							if (hiddenIndices.length>0) {
								if (hiddenIndices.indexOf(colIdx) !== -1) {
									display = false;
									offsetCol++;
								}
							}
							if (display) {
								v = row.v[colIdx];
								if ("GROWTH" !== results.cols[colIdx].originType && results.cols[colIdx].extendedType) {
									var words = results.cols[colIdx].name.split(" ");
									var toRound = true;
									for (i=0; i<words.length; i++) {
										// see if column header contains the text duration / time
										if (words[i].toLowerCase() === "duration" || words[i].toLowerCase() === "time") {
											toRound = false;
											v = squid_api.utils.formatTime(v, this.d3Formatter, results.cols[colIdx].format);
										}
									}
								}
								newRow.v.push(v);
							}
						}
						data.results.rows.push(newRow);
					}
				}

				console.log("DEBUG:"+"displayTableContent D3");
				// Rows
				d3.select(selector).select("tbody").selectAll("tr").remove();
				var tr = d3.select(selector).select("tbody").selectAll("tr")
				.data(data.results.rows)
				.enter()
				.append("tr");

				// Cells
				tr.selectAll("td")
				.data(function(d) {
					return d.v;
				})
				.enter()
				.append("td")
				.attr("class", function(d, i) {
					var str = "";
					var colspan = 1;
					if (rollups) {
						var levelId = (this.parentNode!= null ? parseInt(this.parentNode.__data__.v[0]): null);
						if ((levelId >= 0)) {
							colspan = me.getColspanValue(me.firstMeasure, levelId);
						}
						if ((i === 1 && levelId === 1)) {
							// this is a total line
							this.parentNode.className = "group";
						}
						if (i === 0) {
							// hide grouping column
							str = "hide";
						} else if ((rollupSummaryIndex !== null) && (i === rollupColIndex)) {
							// hide rollup column
							str = "hide";
						} else if ((rollupSummaryIndex !== null) && (i === rollupSummaryIndex)) {
							if (levelId === 1) {
								// this is a total (grouped) line
								this.parentNode.className = "group";
							}
							if (levelId >= 1) {
								// this is a rollup sub level line
								str = "new-category";
							}
						} else if (levelId >= 1) {
							// this is a rollup sub level line
							str = "new-category";
						} else if ((levelId === 0) && (this.parentNode === this.parentNode.parentNode.childNodes[0])) {
							// detect total column
							this.parentNode.className = "total-column";
						}
						if (colspan > 1 && i === rollupSummaryIndex) {
							//set the correct colspan to the rollup column
							this.colSpan = colspan;
						} else if ((levelId >= 0) && i > rollupSummaryIndex && i < me.firstMeasure) {
							//Remove the cell if part of the colspan
							this.remove();
						}
					}
					if (me.compareCols) {
						if (me.compareCols.indexOf(i) > -1) {
							str += " compareTo";
						} else if (me.metricCols.indexOf(i) > -1) {
							str += " current";
						}
					}
					if (me.metricCols) {
						if (me.metricCols.indexOf(i) === -1 && me.compareCols.indexOf(i) === -1 && me.dateCols.indexOf(i) === -1) {
							if (me.model.get("results") && me.model.get("results").cols[i] && me.model.get("results").cols[i].extendedType) {
								if (me.model.get("results").cols[i].extendedType.name !== "date" && me.model.get("results").cols[i].extendedType.name !== "timestamp") {
									str += " dimension";
								}
							}
						} else {
							str += " measure";
						}
					}
					return str;
				})
				.text(function(d, i) {
					var text = d;
					var offset = 0;
					if (this.parentNode && this.parentNode.className === "group" && me.firstMeasure !== -1 && i>=me.firstMeasure - me.metricCols.length) {
						//offset = me.metricCols.length;
						if (offset<0) {
							offset=0;
						}
					}
					var rolCol;
					if (rollups) {
						var levelId = (this.parentNode!= null ? parseInt(this.parentNode.__data__.v[0]): null);
						if ((rollupSummaryIndex !== null) && (i === rollupSummaryIndex)) {
							if (levelId >= 1) {
								rolCol = rollupColIndex;
								text = "";
								if (levelId > 1) {
									rolCol = rollups[Math.min(rollups.length-1,levelId-1)].col + 1;
									text = "Total for ";
								}
								if (levelId <=rollups.length) { 
									text = text + this.parentNode.__data__.v[rolCol];
								} else {
									text = text + this.parentNode.__data__.v[i];
								}
							} else if ((levelId === 0) && (this.parentNode === this.parentNode.parentNode.childNodes[0])) {
								text = "Grant Total";
							}
						} else if (i === 1){
							rolCol = rollupColIndex;
							if (levelId >= 1) {
								if (levelId > 1) {
									rolCol = rollups[Math.min(rollups.length-1,levelId-1)].col + 1;
								}
								// this is a total line
								text = "Total for "+data.results.cols[rolCol].name;
							}
						} else  if (i === 2) {
							if ((levelId === 0) && (this.parentNode === this.parentNode.parentNode.childNodes[0])) {
								text = "Grant Total";
							}
						} else if (this.parentNode && levelId === 1) {
							if (i >= me.firstMeasure && me.model.get("hideRollupTotal") === true) {
								text = "";
							}
						}
					} else if (offset>0) {
						text = this.parentNode.__data__.v[i - offset];
					}
					return text;
				});

				if (results.totalSize>0) {
					// display total
					this.$el.find("#no-data").hide();
					var resultsInfo = "Showing "+(results.startIndex + 1) + " - " + (results.startIndex + data.results.rows.length)+" of "+results.totalSize+" entries";
                    if (typeof $.i18n !== "undefined") {
                    	resultsInfo=$.i18n.t("table-results-size", {"results":(results.startIndex + 1) + " - " + (results.startIndex + data.results.rows.length),"total":results.totalSize});
                    }
					this.$el.find("#total-msg").html(resultsInfo);
					this.$el.find("#total").show();
				} else {
					this.$el.find("#total").hide();
					this.$el.find("#no-data").show();
				} 
				if (typeof $.i18n !== "undefined") {
					this.$el.localize();
				}
			}
		},

		getColspanValue: function(firstMeasurePosition, rollupLevel) {
			if (rollupLevel >= 0 && firstMeasurePosition >= 3) {
				return firstMeasurePosition - 2;
			} else {
				return 1;
			}
		},

		renderBaseViewPort : function() {
			this.$el.html(this.template({
				"staleMessage" : this.staleMessage,
				"reRunMessage" : this.reRunMessage
			}));
			this.$el.find("#total").hide();
			this.$el.find("#no-data").hide();
			this.$el.find(".sq-loading").hide();
			if (this.paging) {
				this.paginationView = new squid_api.view.PaginationView( {
					model : this.model,
					config : this.config,
					el : this.$el.find("#pagination")
				});
				this.paginationView.render();
			}
		},

		show: function() {
			this.$el.show();
		},

		hide: function() {
			this.$el.hide();
		},

		render : function() {
			if (this.el) {
				var selector = "#"+this.el.id+" .sq-table";
				var me = this;
				this.currentDomain = this.config.get("domain");
				var parentId = this.config.get("domain");
	            if (typeof $.i18n !== "undefined") {
					this.noDataMessage = $.i18n.t("noDataMessage");
					this.staleMessage = $.i18n.t("staleMessage");
					this.reRunMessage = $.i18n.t("reRunMessage");
	            }

				squid_api.getCustomer().then(function(customer) {
					customer.get("projects").load(me.config.get("project")).then(function(project) {
						project.get("domains").load(parentId).then(function(domain) {
							if (domain.get("metrics")) {
								var metrics = domain.get("metrics");
								//Old way
								//domain.get("metrics").load().then(function(metrics) {
									// display table header
									var arr = [];
									for(i=0; i<metrics.size(); i++) {
										arr.push(metrics.models[i].toJSON());
									}
									me.displayTableHeader(selector, arr);

									if (me.model.get("status") === "DONE") {
										me.$el.find("#total").show();
										me.$el.find(".sq-loading").hide();
										me.$el.find("#stale").hide();
										me.$el.find("#re-run").hide();
										me.$el.find(".sort-direction").show();
										me.$el.find("#table-container").show();

										if (!me.model.get("error")) {
											// display results
											me.displayTableContent(selector);
											if (me.paging) {
												me.paginationView.render();
												me.$el.find("#pagination").show();
											}
											me.$el.find("#error").html("");
										} else {
											var analysis = me.model;
											// in case of a multi-analysis model
											if (analysis.get("analyses")) {
												analysis = analysis.get("analyses")[0];
											}
											me.$el.find("#error").html("<div id='error'>" + me.model.get("error").message + "</div>");
										}
									}

									if (me.model.get("status") === "RUNNING") {
										// computing in progress
										me.$el.find(".sq-loading").show();
										me.$el.find("#stale").hide();
										me.$el.find(".sort-direction").show();
										me.$el.find("#error").html("");
										me.$el.find("#table-container").hide();
									}

									if (me.model.get("status") === "PENDING") {
										// refresh needed
										d3.select(selector).select("tbody").selectAll("tr").remove();
										me.$el.find("#pagination").hide();
										me.$el.find("#total").hide();
										me.$el.find(".sq-loading").hide();
										me.$el.find("#stale").show();
										me.$el.find("#error").html("");
										me.$el.find("#table-container").show();
										me.$el.find("#re-run").hide();
									}
								//});
							}
						});
					});
				});
			}

			return this;
		}

	});

	return View;
}));
