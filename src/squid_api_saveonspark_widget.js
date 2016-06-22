(function (root, factory) {
    root.squid_api.view.SaveOnSpark = factory(root.Backbone, root.squid_api);
}(this, function (Backbone, squid_api) {

    View = Backbone.View.extend({

        template: null,
        renderTo: null,
        compression: true,
        displayInAccordion: false,
        viewPort: null,
        selectedFormatIndex: 0,
        templateData: null,
        displayScripting: true,
        displayCompression: true,
        materializeDatasetsView: false,
        popupDialogClass: "squid-api-saveonspark-panel-popup",
        saveAsTableModal: null,
        saveAsDomainModal: null,
        projectName: null,
        schemaName: null,

        initialize: function (options) {
            var me = this;

            if (this.model.get("analysis")) {
                this.listenTo(this.model.get("analysis"), 'change', function () {
                    me.render();
                    me.enabled();
                });
                this.listenTo(this.model, 'change:templateData', function () {
                    me.enabled();
                });
                this.listenTo(this.model, 'change:templateData', function () {
                    if (this.materializeDatasetsView === true) {
                        me.refreshViewMaterializeDatasets();
                        me.enabled();
                    }
                });
                this.listenTo(this.model, 'change:enabled', this.enabled);
            } else {
                this.listenTo(this.model, 'change', function () {
                    me.render();
                    me.enabled();
                });
            }
            // setup options
            if (options.template) {
                this.template = options.template;
            } else {
                this.template = squid_api.template.squid_api_saveonspark_widget;
            }
            if (options.renderTo) {
                this.renderTo = options.renderTo;
            }
            if (options.displayInAccordion) {
                this.displayInAccordion = true;
                this.viewPort = this.renderTo;
            } else {
                this.viewPort = this.$el;
            }
            if (options.displayInPopup) {
                this.displayInPopup = true;
            }

            if (options.mprojectCollection) {
                this.mprojectCollection = options.mprojectCollection;
            }
            if (options.mprojectModal) {
                this.mprojectModal = options.mprojectModal;
            }
            if (options.mprojectButton) {
                this.mprojectButton = options.mprojectButton;
            }

            if (options.mdomainCollection) {
                this.mdomainCollection = options.mdomainCollection;
            }
            if (options.mdomainModal) {
                this.mdomainModal = options.mdomainModal;
            }
            if (options.mdomainButton) {
                this.mdomainButton = options.mdomainButton;
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
            if (options.popupDialogClass) {
                this.popupDialogClass = options.popupDialogClass;
            }

        },



        enabled: function () {
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

        setModel: function (model) {
            this.model = model;
            this.initialize();
        },



        saveMaterializeDatasets: function () {
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
                var newdomain = new squid_api.model.InternalanalysisjobModel();
                newdomain.set(
                    {
                        "name": $(this.viewPort).find("#name").val(),
                        "options": {
                            "analysisJob": analysis,
                            "sourceProjectId": analysis.get("id").projectId,
                            "destProjectId":  "", //save to spark
                            "destSchema":  $(this.viewPort).find("#schemaName").val()
                        }
                    }
                );
                newdomain.save();
            }


            //var downloadBtn = viewPort.find("#view-materializedatasets");
            //downloadBtn.attr("href", downloadAnalysis.url());
            //downloadBtn.removeClass("disabled");
        },



        render: function () {
            var me = this;
            var analysis = this.model.get("analysis");
            if (!analysis) {
                analysis = this.model;
            }

            squid_api.getSelectedProject(true).then(function(project) {
                me.projectName = project.get("id").projectId;
                me.schemaName = project.get("dbSchemas")[0];
            });

            $(this.viewPort).html(me.template({
                "displayInAccordion": me.displayInAccordion,
                "downloadButtonLabel": me.downloadButtonLabel,
                "displayInPopup": me.displayInPopup,
                "materializeDatasetsView": me.materializeDatasetsView,
                "data-target": me.renderTo,
                "origin": "https://api.squidsolutions.com",
                "customerId": squid_api.customerId,
                "clientId": squid_api.clientId,
                "redirectURI": "https://api.squidsolutions.com",
                "apiURL": squid_api.apiURL,
                "schemaName": this.schemaName,
                "projectName": this.projectName,
                "typeLabelPlural": "Save on Spark",
            }));

            $(this.viewPort).find(".save-close").click(function() {
                me.saveMaterializeDatasets();
            });

            return this;
        }
    });

    return View;
}));
