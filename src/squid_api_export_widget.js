(function (root, factory) {
    root.squid_api.view.DataExport = factory(root.Backbone, root.squid_api);
}(this, function (Backbone, squid_api) {

    View = Backbone.View.extend( {

        template : null,
        renderTo: null,
        compression : true,
        curlCollapsed : true,
        displayInAccordion : false,
        viewPort : null,
        formats : [{"format" : "csv", "mime-type" : "text/csv", "template" : null}],
        selectedFormatIndex : 0,
        templateData : null,
        displayScripting : true,
        disableCurl: false,
        displayCompression : true,
        materializeDatasetsView : false,
        buttonLabel: "Export",
        popupDialogClass : "squid-api-export-panel-popup",
        downloadButtonLabel : "Download",
        analysisConfigurationEnabled : false,
        metricSelectorEnabled : false,
        configClone : null,
        dimensionSelector : null,
        metricSelector : null,

        initialize : function(options) {
            var me = this;

            // setup options
            if (options.config) {
                this.config = options.config;
            }
            if (options.template) {
                this.template = options.template;
            } else {
                this.template = squid_api.template.squid_api_export_widget;
            }
            if (options.formats) {
                this.formats = options.formats;
            }
            if (options.renderTo) {
                this.renderTo = options.renderTo;
            }
            if (options.displayInAccordion) {
                this.displayInAccordion = true;
                this.viewPort = $(this.renderTo);
            } else {
                this.viewPort = this.$el;
            }
            if (options.displayInPopup) {
                this.displayInPopup = true;
            }
            if (options.disableCurl) {
                this.disableCurl = options.disableCurl;
            }
            if (options.sqlView) {
                this.sqlView = true;
            }
            if (options.downloadButtonLabel) {
                this.downloadButtonLabel = options.downloadButtonLabel;
            }
            if (options.materializeDatasetsView) {
                this.materializeDatasetsView = true;
            }
            if (options.downloadButtonLabel) {
                this.downloadButtonLabel = options.downloadButtonLabel;
            }
            if (options.displayScripting === false) {
                this.displayScripting = false;
            }
            if (options.displayCompression === false) {
                this.displayCompression = false;
            }
            if (options.analysisConfigurationEnabled === true) {
                this.analysisConfigurationEnabled = true;
            }
            if (options.metricSelectorEnabled === true) {
                this.metricSelectorEnabled = true;
            }
            if (options.popupDialogClass) {
                this.popupDialogClass = options.popupDialogClass;
            }
            if (options.selectedFormatIndex) {
            	this.selectedFormatIndex = options.selectedFormatIndex;
            }
            if (options.buttonLabel) {
                this.buttonLabel = options.buttonLabel;
            }

            if (!this.config) {
                this.config = squid_api.model.config;
            }

            if (this.analysisConfigurationEnabled) {
                // create a config clone to be used a the model for the DimensionSelector
                this.configClone = new Backbone.Model();
                this.configClone.set(_.clone(this.config.attributes));

                // create a dimensionSelector
                this.dimensionSelector = new squid_api.view.DimensionSelector({
                    model : this.configClone,
                    singleSelect : false,
                    customView: true,
                    available : "availableDimensions",
                    template : options.dimensionSelectorTemplate
                });

                // create a metricSelector
                this.metricSelector = new squid_api.view.MetricSelectorView({
                    model : this.configClone,
                    customView: true,
                    available : "availableMetrics",
                    template : options.metricSelectorTemplate
                });


                this.listenTo(this.configClone, 'change:chosenDimensions', function() {
                    // update the analysis with extra dimensions
                    me.model.setFacets(this.configClone.get("chosenDimensions"));
                });

                this.listenTo(squid_api.model.status, "change:configReady", function() {
                    if (squid_api.model.status.get("configReady") === true) {
                        me.model.setMetrics(this.configClone.get("chosenMetrics"));
                    }
                });

                this.listenTo(this.configClone, 'change:chosenMetrics', function() {
                    // update the analysis with extra metrics
                    if (squid_api.model.status.get("configReady") === true) {
                        me.model.setMetrics(this.configClone.get("chosenMetrics"));
                    }
                });

                this.listenTo(this.config, 'change', function() {
                    // reflect config changes to configClone
                    me.configClone.set(_.clone(me.config.attributes));
                    me.dimensionSelector.render();
                    me.metricSelector.render();
                });
            }

            if (this.model.get("analysis")) {
                this.listenTo(this.model.get("analysis"), 'change', function() {
                    if (me.analysisConfigurationEnabled) {
                        // reflect config changes to configClone
                        me.configClone.set(_.clone(me.model.attributes));
                    }
                    me.render();
                    me.enabled();
                });
                this.listenTo(this.model, 'change:templateData', function() {
                    me.refreshViewSqlUrl();
                    me.enabled();
                });
                this.listenTo(this.model, 'change:templateData', function() {
                    if(this.materializeDatasetsView === true) {
                        me.refreshViewMaterializeDatasets();
                        me.enabled();
                    }
                });
                this.listenTo(this.model, 'change:enabled', this.enabled);
            } else {
                this.listenTo(this.model, 'change', function() {
                    me.render();
                    me.enabled();
                });
            }
        },

        enabled: function() {
            var viewPort = this.viewPort;
            if (this.popup) {
                viewPort = this.popup;
            }
            if (this.model.get("enabled")) {
                this.$el.find("button").prop("disabled", false);
                viewPort.find("button#download").prop("disabled", false);
            } else {
                this.$el.find("button").prop("disabled", true);
                viewPort.find("button#download").prop("disabled", true);
            }
        },

        setModel : function(model) {
            this.model = model;
            this.initialize();
        },

        updateFormats : function(formats) {
        	this.formats = formats;
        },

        clickedFormat : function (event) {
            var t = event.target;
            this.selectedFormatIndex = null;
            for (var i=0; i<this.formats.length;i++) {
                if (this.formats[i].format === t.value) {
                    this.selectedFormatIndex = i;
                } else if (this.formats[i].selected === true){
                	this.formats[i].selected = false;
                }
            }
            var input = $(this.viewPort).find('input[name="compression"]');
            if (t.value === "xlsx") {
            	input.parent().hide();
            	this.compression = false;
            } else {
            	input.parent().show();
            	if (input.length>0) {
            		this.compression = (input[0].checked);
            	}
            }
            this.refreshViewSqlUrl();
            if(this.materializeDatasetsView === true) {
                this.refreshViewMaterializeDatasets();
            }
        },

        clickedCompression : function (event) {
            var t = event.target;
            this.compression = (t.checked);
            this.refreshViewSqlUrl();
            if(this.materializeDatasetsView === true) {
                this.refreshViewMaterializeDatasets();
            }
        },

        downloadAnalysisResults : function(currentJobId) {
            var me = this;
            var viewPort = $(me.viewPort);
            if (this.popup) {
                viewPort = this.popup;
            }

            // create download link
            var analysisJobResults;
            var selectedFormat = this.formats[this.selectedFormatIndex];
            var velocityTemplate;
            var postMethod;
            var downloadBtn = viewPort.find("#download");
            var downloadForm = viewPort.find("#download-form");

            if (!selectedFormat.template) {
                // use getResults method
                analysisJobResults = new squid_api.model.ProjectAnalysisJobResult();
                analysisJobResults.addParameter("format",selectedFormat.format);
                postMethod = "GET";
            } else {
                // use render method
                analysisJobResults = new squid_api.model.ProjectAnalysisJobRender({"format" : selectedFormat.format});
                analysisJobResults.setParameter("type", selectedFormat.type);
                analysisJobResults.setParameter("timeout", null);
                // build the template

                if (selectedFormat.format === "xml") {
                    if (me.model.get("templateData").options.xmlType &&
                        selectedFormat.template[me.model.get("templateData").options.xmlType]) {
                        velocityTemplate = selectedFormat.template[me.model.get("templateData").options.xmlType](me.model.get("templateData"));
                    } else {
                        velocityTemplate = selectedFormat.template(me.model.get("templateData"));
                    }
                } else {
                    velocityTemplate = selectedFormat.template(me.model.get("templateData"));
                }
                postMethod = "POST";
            }
            if (me.compression && !velocityTemplate) {
                analysisJobResults.addParameter("compression","gzip");
            } else {
                analysisJobResults.addParameter("compression","none");
            }
            analysisJobResults.set({
                "id": currentJobId,
                "oid": currentJobId.oid
            });

            downloadBtn.removeClass("disabled");

            downloadForm.attr("action",analysisJobResults.url());
            downloadForm.attr("enctype", "multipart/form-data");
            downloadForm.attr("method",postMethod);
            downloadForm.attr("accept-charset","UTF-8");
            downloadForm.empty();
            downloadForm.append("<input type='hidden' name='access_token' value='"+analysisJobResults.getParameter("access_token")+"'/>");
            downloadForm.append("<input type='hidden' name='compression' value='"+analysisJobResults.getParameter("compression")+"'/>");
            if (velocityTemplate) {
                downloadForm.append("<input type='hidden' name='template' value='"+base64.encode(encodeURIComponent(velocityTemplate))+"'/>");
            }
            if (analysisJobResults.getParameter("type")) {
                downloadForm.append("<input type='hidden' name='type' value='"+analysisJobResults.getParameter("type")+"'/>");
            }
            if (analysisJobResults.getParameter("format")) {
                downloadForm.append("<input type='hidden' name='format' value='"+analysisJobResults.getParameter("format")+"'/>");
            }
            if (analysisJobResults.getParameter("timeout")) {
                downloadForm.append("<input type='hidden' name='timeout' value='"+analysisJobResults.getParameter("timeout")+"'/>");
            }
            downloadForm.submit();
        },

        refreshViewSqlUrl : function() {
            var me = this;
            var viewPort = $(me.viewPort);
            if (this.displayInPopup) {
                viewPort = this.popup;
            }
            if (me.currentJobId) {
                // create download link
                var analysisJobResults;
                var selectedFormat = this.formats[this.selectedFormatIndex];
                // use getResults method
                analysisJobResults = new squid_api.model.ProjectAnalysisJobViewSQL();
                analysisJobResults.addParameter("format",selectedFormat.format);
                analysisJobResults.set({
                    "id": me.currentJobId,
                    "oid": me.currentJobId.oid
                });
                var downloadBtn = viewPort.find("#view-sql");
                downloadBtn.attr("href",analysisJobResults.url());
                downloadBtn.removeClass("disabled");
            }
        },

        refreshViewMaterializeDatasets : function() {
            var me = this;
            var viewPort = $(me.viewPort);
            if (this.displayInPopup) {
                viewPort = this.popup;
            }
            var analysis = this.model.get("analysis");
            if (!analysis) {
                analysis = this.model;
            }


            // prepare materialize datasets download link
            var downloadBtnD = $(me.viewPort).find("#view-materializedatasets");
            downloadBtnD.addClass("disabled");

            if (analysis.get("id").projectId) {
                var downloadAnalysis = new squid_api.model.InternalanalysisjobModel();
                downloadAnalysis.set(
                    {
                        "name": viewPort.find("#destDomain").val(),
                        "options": {
                            "analysisJob": analysis,
                            "sourceProjectId": analysis.get("id").projectId,
                            "destProjectId": viewPort.find("#destProject").val(),
                            "destSchema": viewPort.find("#destSchema").val()
                        }
                    }
                );
                downloadAnalysis.save();
            }


            //var downloadBtn = viewPort.find("#view-materializedatasets");
            //downloadBtn.attr("href", downloadAnalysis.url());
            //downloadBtn.removeClass("disabled");
        },

        download : function() {
            var me = this;
            var viewPort = $(this.viewPort);
            if (this.displayInPopup) {
                viewPort = this.popup;
            }
            var analysis = this.model.get("analysis");
            var enabled = this.model.get("enabled");
            if (!analysis) {
                analysis = this.model;
            }
            var downloadBtn = viewPort.find("#download");
            downloadBtn.addClass("disabled");

            if (analysis.get("id").projectId && enabled !== false) {
                var downloadAnalysis = new squid_api.model.ProjectAnalysisJob();
                var orderBy = [], i, j;
                
                /*if (analysis.attributes.orderBy) {
                	for (i = 0; i < analysis.attributes.orderBy.length; i++)  {
                		orderBy.push( analysis.attributes.orderBy[i]);
                	}
                }
                */
                if (analysis.attributes.facets) {
                 	for (i = 0; i < analysis.attributes.facets.length; i++)  {
                 		var toAdd = true;
                 		for (j=0; j<orderBy.length; j++) {
                 			if (orderBy[j].expression && orderBy[j].expression.value === analysis.attributes.facets[i].value) {
                 				toAdd = false;
                 			}
                 		}
                 		if (toAdd) {
                    		orderBy.push({expression: {value:  analysis.attributes.facets[i].value},  direction: "ASC"});
                 		}
                	}
                }
                downloadAnalysis.set(analysis.attributes);
                downloadAnalysis.set("orderBy", orderBy);
                downloadAnalysis.setParameter("timeout", 10000);
                downloadAnalysis.setParameter("maxResults", 1);
                downloadAnalysis.set("autoRun", false);
                downloadAnalysis.set({
                    "id": {
                        "projectId": analysis.get("id").projectId,
                        "analysisJobId": null
                    }});
                //
                squid_api.controller.analysisjob.createAnalysisJob(downloadAnalysis, analysis.get("selection"))
                .done(function(analysis) {
                    if (analysis.get("limit") || (analysis.get("template"))) {
                        // trigger the analysis computation and wait until it's done (in a loop)
                        squid_api.controller.analysisjob.getAnalysisJobResults(null, analysis).done(function(results) {
                            // get the results
                            me.downloadAnalysisResults(results.get("id"));
                        })
                        .fail(function() {
                            console.error("createAnalysisJob failed");
                            downloadBtn.removeClass("disabled");
                        });
                    } else {
                        // compute and get the results without retrying (streaming way)
                        me.downloadAnalysisResults(analysis.get("id"));
                    }
                })
                .fail(function() {
                    console.error("createAnalysisJob failed");
                    downloadBtn.removeClass("disabled");
                });
            }
        },

        render : function() {
            var me = this;
            if (typeof $.i18n !== "undefined") {
            	this.downloadButtonLabel = $.i18n.t("export-download");
            }
            var analysis = this.model.get("analysis");
            if (!analysis) {
                analysis = this.model;
            }

            var selectedFormat = this.formats[this.selectedFormatIndex];
            var formatsDisplay = [];
            for (var i=0; i<this.formats.length;i++) {
                formatsDisplay[i] = this.formats[i];
                if (i === this.selectedFormatIndex) {
                    formatsDisplay[i].selected = true;
                }
            }

            if (this.displayInAccordion) {
                this.$el.html("<button type='button' class='btn btn-open-export-panel' data-toggle='collapse' aria-expanded='false' data-target='" + this.renderTo + "'> "+ this.downloadButtonLabel + "<span class='glyphicon glyphicon-download-alt'></span></button>");
                if (analysis.get("enabled") === false) {
                    $("button.btn-open-export-panel").prop('disabled', true);
                } else {
                    $("button.btn-open-export-panel").prop('disabled', false);
                }
            }

            var data, curl, curlFileName;
            if (me.displayScripting !== false) {
                // render the curl snippet
                var exportAnalysis = new squid_api.model.ProjectAnalysisJob();
                exportAnalysis.addParameter("format", this.formats[this.selectedFormatIndex].format);
                if (this.compression) {
                    exportAnalysis.addParameter("compression","gzip");
                }
                exportAnalysis.addParameter("access_token","[access_token]");
                exportAnalysis.set(analysis.attributes);
                exportAnalysis.set(
                   "id", {
                        "projectId": analysis.get("id").projectId,
                        "analysisJobId": null
                    });

                // escape all spaces in the json injected into cURL
                data = JSON.stringify(exportAnalysis).replace(/\'/g, '\\\'');
                curlFileName = "analysis";
                if (selectedFormat.format) {
                    curlFileName += "."+selectedFormat.format;
                }
                if (this.compression) {
                    curlFileName += ".gz";
                }
                curl = exportAnalysis.url().replace(/\[access_token\]/g, '<b>[access_token]</b>');
            }

            if (! this.disableCurl || this.viewPort.is(":empty")) {
                $(this.viewPort).html(this.template({
                    "displayInAccordion" : this.displayInAccordion,
                    "downloadButtonLabel" : this.downloadButtonLabel,
                    "displayInPopup" : this.displayInPopup,
                    "sqlView" : this.sqlView,
                    "materializeDatasetsView" : this.materializeDatasetsView,
                    "data-target" : this.renderTo,
                    "formats": formatsDisplay,
                    "displayCompression" : (this.displayCompression),
                    "compression": (this.compression),
                    "curl": curl,
                    "curlFileName" : curlFileName,
                    "origin": "https://api.squidsolutions.com",
                    "data": data,
                    "customerId" : squid_api.customerId,
                    "clientId" : squid_api.clientId,
                    "redirectURI":"https://api.squidsolutions.com",
                    "apiURL":squid_api.apiURL,
                    "buttonLabel": this.buttonLabel,
                    "metricSelectorEnabled" : this.metricSelectorEnabled,
                    "analysisConfigurationEnabled" : this.analysisConfigurationEnabled
                    })
                );

                if (this.dimensionSelector) {
                    // setup dimension selector
                    this.dimensionSelector.setElement(this.viewPort.find("#dimensionSelector"));
                    this.dimensionSelector.render();
                }

                if (this.metricSelector) {
                    // setup metric selector
                    this.metricSelector.setElement(this.viewPort.find("#metricSelector"));
                    this.metricSelector.renderBase();
                    this.metricSelector.render();
                }
            }

            // prepare SQL download link
            var downloadBtn = $(me.viewPort).find("#view-sql");
            downloadBtn.addClass("disabled");

            if (analysis.get("id").projectId) {
                var downloadAnalysis = new squid_api.model.ProjectAnalysisJob();
                downloadAnalysis.set(analysis.attributes);
                downloadAnalysis.set({
                    "id": {
                        "projectId": analysis.get("id").projectId,
                        "analysisJobId": null
                    },
                    "autoRun": false});
                squid_api.controller.analysisjob.createAnalysisJob(downloadAnalysis, analysis.get("selection"))
                .done(function() {
                    me.currentJobId = downloadAnalysis.get("id");
                    me.refreshViewSqlUrl();
                })
                .fail(function() {
                    console.error("createAnalysisJob failed");
                });
            }

            // apply cURL panel state
            if (me.curlCollapsed) {
                $(this.viewPort).find('#curl').hide();
            } else {
                $(this.viewPort).find('#curl').show();
            }

            // Click Handlers
            $(this.viewPort).find("#curlbtn").click(function() {
                var viewPort = $(me.viewPort);
                if (me.displayInPopup) {
                    viewPort = me.popup;
                }

                me.curlCollapsed = !me.curlCollapsed;
                if (me.curlCollapsed) {
                    viewPort.find('#curl').fadeOut();
                } else {
                    viewPort.find('#curl').fadeIn();
                }
            });

            $(this.viewPort).find('[name="format"]').click(
                function(event) {
                    me.clickedFormat(event);
                    me.trigger("change:format");
                });
            $(this.viewPort).find('[name="compression"]')
            .click(function(event) {
                me.clickedCompression(event);
            });

            if (selectedFormat.format === "xlsx") {
            	$(this.viewPort).find('input[name="compression"]').parent().hide();
            	this.compression = false;
            } else {
            	$(this.viewPort).find('input[name="compression"]').parent().show();
            	//this.compression = (t.checked);
            }

            var button = $(this.viewPort).find("#download");
            if (button.length === 1 &&  button[0].onclick === null) {
            	button[0].onclick = function() {
                    me.download();
                };
            }
            if(this.materializeDatasetsView === true) {
                $(this.viewPort).find("#view-materializedatasets").click(function () {
                    me.refreshViewMaterializeDatasets();
                });
            }
            if (this.displayInPopup) {
                // remove any existing popups
                $("." + this.popupDialogClass).remove();

                this.popup = this.$el.find(".download-wrapper").dialog({
                    dialogClass: this.popupDialogClass,
                    autoOpen: false,
                    position: {
                        my: "left-70 top+13", at: "left-70 bottom", of: this.$el.find("button.popup-trigger")
                    },
                    clickOutside: true, // clicking outside the dialog will close it
                    clickOutsideTrigger: this.$el.find("button.popup-trigger"), // Element (id or class) that triggers the dialog opening
                });

                // Click Event for filter panel button
                this.$el.find("button.popup-trigger").click(function() {
                    if (me.popup.dialog("isOpen")) {
                        me.popup.dialog( "close" );
                    } else {
                        me.popup.dialog( "open" );
                    }
                });
            }
            if (typeof $.i18n !== "undefined") {
            	this.$el.localize();
            }
            return this;
        }
    });

    return View;
}));
