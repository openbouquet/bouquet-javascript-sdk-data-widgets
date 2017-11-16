(function (root, factory) {
	root.squid_api.view.DataExportScheduler = factory(root.Backbone, root.squid_api);
}(this, function (Backbone, squid_api) {

	View = Backbone.View.extend({
		template: null,
		IndexView: null,
		ExportJobModel: null,
		modalElementClassName : "squid-api-admin-widgets-export-scheduler",
		ExportJobCollection: null,
		schedulerApiUri: null,
		exportJobs: null,
		hiddenFields: null,
		reportSelection: null,
		scheduleName: null,
		widgetAccessible: false,
		canCreate: false,
		processData: null,

		fetchAndRender: function () {
			exportJobs.fetch({
				success: function (collection, response) {
					if (response.statusCode === 200) {
						widget.widgetAccessible = true;
					} else {
						widget.widgetAccessible = false;
					}
				},
				error: function () {
					widget.widgetAccessible = false;
				}
			});
		},

		initialize: function (options) {
			widget = this;

			// setup options
			if (options) {
				if (options.template) {
					this.template = options.template;
				} else {
					this.template = squid_api.template.squid_api_export_scheduler_widget;
				}
				if (options.schedulerApiUri) {
					this.schedulerApiUri = options.schedulerApiUri;
				}
				if (options.hiddenFields) {
					this.hiddenFields = options.hiddenFields;
				}
				if (options.reportSelection) {
					this.reportSelection = options.reportSelection;
				}
				if (options.scheduleName) {
					this.scheduleName = options.scheduleName;
				}
				if (options.processData) {
					this.processData = options.processData;
				}
				if (options.reports) {
					this.reports = options.reports.get("items");
				}
				if (options.modalElementClassName) {
					this.modalElementClassName = options.modalElementClassName;
				}
				if (options.status) {
					this.status = options.status;
				} else {
					this.status = squid_api.model.status;
				}
			}

			this.IndexView = squid_api.template.squid_api_export_scheduler_index_view;

			ExportJobModel = Backbone.DeepModel.extend({
				urlRoot: this.schedulerApiUri + "/jobs",
				idAttribute: "_id",
				url: function () {
					var base =
						_.result(this, 'urlRoot') ||
						_.result(this.collection, 'url') ||
						urlError();
					if (this.isNew()) {
						return base + "?access_token=" + squid_api.model.login.get("accessToken");
					}
					var id = this.get(this.idAttribute);
					return base.replace(/[^\/]$/, '$&/') + encodeURIComponent(id) + "?access_token=" + squid_api.model.login.get("accessToken");
				}
			});

			ExportJobCollection = Backbone.Collection.extend({
				model: ExportJobModel,
				urlRoot: this.schedulerApiUri,
				url: function () {
					var url = this.urlRoot + "/jobs/";
					url = url + "?access_token=" + squid_api.model.login.get("accessToken");
					return url;
				}
			});

			exportJobs = new ExportJobCollection();

			if (squid_api && squid_api.model && squid_api.model.login && squid_api.model.login.get("accessToken")){
				this.fetchAndRender();
			}
			// listeners
			this.listenTo(squid_api.model.login, "change:accessToken", this.fetchAndRender);
			this.listenTo(exportJobs, 'change reset sync', this.render);
		},

		events: {
			"click button": function() {
				var me=this;
				//$.when(this.fetchAndRender()).done().then(me.renderIndex());
				me.renderIndex();
			}
		},

		closeModal : function(modal) {
			this.status.unset("message");
			this.status.unset("error");
			modal.close();
			modal.remove();
		},

		renderIndex: function () {
			var me = this;
			var IndexView = Backbone.View.extend({
				model: exportJobs,
				initialize: function () {
					this.template = squid_api.template.squid_api_export_scheduler_index_view;
					this.listenTo(exportJobs, "reset change remove sync", this.render);
				},
				events: {
					"click .create-job": function () {
						widget.renderForm();
					},
					"click .edit-job": function (event) {
						var id = $(event.target).parents(".job-item").attr("data-attr");
						widget.renderForm(id);
					},
					"click .run-job": function (event) {
						var id = $(event.target).parents(".job-item").attr("data-attr");
						var url = me.schedulerApiUri + "/jobs/" + id + "?run=1&access_token=" + squid_api.model.login.get("accessToken");
						$.ajax({
							method: "GET",
							url: url,
							success: function(response) {
								me.status.unset("message");
								me.status.unset("error");
								var level = "error";
								var message = "";
								if (typeof response.statusCode !== 'undefined' && response.statusCode === 401) {
									message = "Authorization expired, please logon again"
								} else if (typeof response.statusCode !== 'undefined' && response.statusCode !== 200) {
									message = "Schedule not running, return code is "+statusCode;
								} else {
									message = "Your report is running";
									level = "message";
								}
								me.status.set(level, message);
					        }

						});
					},
					"click .delete-job": function (event) {
						var id = $(event.target).parents(".job-item").attr("data-attr");
						var r = confirm("Are you sure you want to delete this schedule?");
						if (r) {
							var job = exportJobs.get(id);
							var url = me.schedulerApiUri + "/jobs/" + id + "?access_token=" + squid_api.model.login.get("accessToken");
							$.ajax({
								method: "DELETE",
								url: url,
								success: function(response) {
									me.status.unset("message");
									me.status.unset("error");
									var level = "error";
									var message = "";
									if (typeof response.statusCode !== 'undefined' && response.statusCode === 401) {
										message = "Authorization expired, please logon again"
									} else if (typeof response.statusCode !== 'undefined' && response.statusCode !== 200) {
										message = "Schedule not deleted, return code is "+statusCode;
									} else {
										message = "Schedule successfully deleted";
										level = "message";
										exportJobs.remove(job)
									}
									me.status.set(level, message);
						        }
							});
						}
					}
				},

				render: function () {
					var jsonData = {"jobs": []};
					for (var i = 0; i < this.model.models.length; i++) {
						for (ix = 0; ix < me.reports.length; ix++) {
							if (me.reports[ix].oid === this.model.models[i].get("reportId")) {
								this.model.models[i].set("reportName", me.reports[ix].name);
							}
						}
						// format jsonData
						var job = this.model.models[i].toJSON();
						if (job.nextExecutionDate) {
							job.nextExecutionDate = moment(job.nextExecutionDate).format("YYYY-MM-DD");
						}
						job.scheduling.frequency = job.scheduling.frequency.replace(/s$/,"");
						jsonData.jobs.push(job);
					}
					this.$el.html(this.template(jsonData));

					this.$el.find(".table").DataTable({
				        "paging": (jsonData.jobs && jsonData.jobs.length>5)? true: false,
				        "pageLength": 5,
						"language": {
							"searchPlaceholder": "Search all fields incl. Schedule Id",
							"emptyTable": "No report is currently scheduled"
						},
						"autoWidth":true
					});
					if (me.canCreate) {
						this.$el.find("button.create-job").prop('disabled', false);
					} else {
						this.$el.find("button.create-job").prop('disabled', true);
					}
					return this;
				}
			});

			this.indexModal = new Backbone.BootstrapModal({
				content: new IndexView(),
				title: "Scheduled Usage Reports"
			}).open();

			// modal wrapper class
			$(this.indexModal.el).addClass(this.modalElementClassName);

			$(this.indexModal.el).find(".modal-dialog").addClass("modal-lg");

			/* bootstrap doesn't remove modal from dom when clicking outside of it.
            Check to make sure it has been removed whenever it isn't displayed.
			 */
			if (me.indexModal.el) {
				$(me.indexModal.el).one('hidden.bs.modal', function () {
					me.closeModal(me.indexModal);
				});
				$(me.indexModal.el).find(".close").one("click", function() {
					$(me.indexModal.el).trigger("hidden.bs.modal");
				});
				$(me.indexModal.el).find(".cancel").one("click", function() {
					$(me.indexModal.el).trigger("hidden.bs.modal");
				});
			}
		},

		getSchema: function () {
			return $.ajax({
				url: this.schedulerApiUri + "/Schema/?access_token=" + squid_api.model.login.get("accessToken"),
			});
		},

		renderForm: function (id) {
			Backbone.Form.validators.errMessages.required = '{{field}} is required';
			var me = this;
			this.getSchema().then(function (data) {
				var modalHeader;
				var reportName;
				if (id) {
					model = exportJobs.where({"_id": id})[0];
					reportName = model.get("reportName");
					modalHeader = "Edit " + reportName + " Scheduled Usage Report";
				} else {
					model = new ExportJobModel();
					var email = "";
					if (squid_api.model.login && squid_api.model.login.get("email")) {
						email = squid_api.model.login.get("email");
					}
					model.set({"status":{"type":"Active"}, "report":{"period":{"type":"monthly","length":"Previous month"},"format":"XLS"},"scheduling":{"frequency":"months"},"emails":[email], "nextExecutionDate":moment().add(1,"day")});
					var reportId = config.get("report");
					for (i = 0; i < widget.reports.length; i++) {
						if (widget.reports[i].oid === reportId) {
							reportName = widget.reports[i].name;
						}
					}
					modalHeader = "Create " + reportName + " Scheduled Usage Report";
				}
				if (me.processData) {
					data = me.processData(data, model);
				}
				// construct schema ignoring hidden fields
				var schema = {};
				var dateNotInPast = function (d) {
					var err = {
							type: 'nextExecutionDate',
							message: 'Next Execution Date cannot be in the past'
					};
					var now = moment().startOf('day').utc();
					var compare = moment(d).startOf('day').utc();
					if (compare < now) {
						return err;
					}
				};
				var validatePeriodAndDate = function(value, formValues) {
					var d = moment(formValues.nextExecutionDate);
					console.log(typeof(value));
					if (value instanceof Date && "Previous month" === formValues["report.period.length"] && d.date() < 3) {
						return {
							type: 'nextExecutionDate',
							message: 'Day of month must be after the 2nd'
						};
					}
				};

				var validateEmails = function(value, formValues) {
					var msg = 'Please enter at least an email';
					var re = /\S+@\S+\.\S+/;
					if (formValues.emails.length === 0) {
						return {
							type: 'emailsList',
							message: "Please define one email"
						};

					} else if (formValues.emails.indexOf(value) !== - 1) {
						var isEmail = re.test(value);
						if (!isEmail) {
							msg = "Email syntax invalid, please check";
							return {
								type: 'emailsList',
								message: msg
							};
						}
					}
				};

				for (var x in data) {
					if (widget.hiddenFields.indexOf(x) === -1) {
						schema[x] = {};
						schema[x].editorClass = "form-control";
						if ((typeof data[x].options.title !== 'undefined')) {
							schema[x].title = data[x].options.title;
						}
						if (data[x].instance === "Date") {
							schema[x].type = "Date";
							schema[x].yearStart = moment().get("year");
							schema[x].yearEnd = moment().get("year")+1;
							schema[x].validators = [dateNotInPast];
						} else if (data[x].instance === "Array") {
							schema[x].type = "List";
							schema[x].itemType = "Text";
							schema[x].addLabel = "Add Email";
							schema[x].errorMessage = "Please check Emails";
							//schema[x].template = _.template('<div><div data-items></div><button type="button" data-action="add">Add Email</button></div>', null, Backbone.Form.templateSettings);
							schema[x].itemTemplate = _.template('<div><span data-editor></span><button type="button" data-action="remove"><i class="fa fa-trash-o"></i></button></div>', null, Backbone.Form.templateSettings);
							schema[x].validators = [validateEmails];
						} else {
							if (data[x].options.enumValues) {
								schema[x].type = "Select";
								schema[x].options = data[x].options.enumValues;
								schema[x].validators = ['required'];
							} else if (data[x].options.enum) {
								
								schema[x].type = "Select";
								schema[x].options = data[x].options.enum;
								schema[x].validators = ['required'];
							} else {
								schema[x].type = "Text";
							}
						}
						if (schema[x].title === "Usage Period:" || schema[x].title === "Next Execution Date:") {
							schema[x].validators.push(validatePeriodAndDate);
						}
					}
				}

				widget.formContent = new Backbone.Form({
					schema: schema,
					model: model,
					idPrefix: null,
				});


				var FormView = Backbone.View.extend({
					initialize: function () {
						this.render();
					},
					render: function () {
						this.$el.html(widget.formContent.render().el);
						return this;
					}
				});

				var formModal = new Backbone.BootstrapModal({
					content: new FormView(),
					title: modalHeader
				}).open();

				/* bootstrap doesn't remove modal from dom when clicking outside of it.
                Check to make sure it has been removed whenever it isn't displayed.
				 */
				$(formModal.el).one('hidden.bs.modal', function () {
					me.closeModal(formModal);
				});
				$(formModal.el).find(".close").one("click", function() {
					$(formModal.el).trigger("hidden.bs.modal");
				});
				$(formModal.el).find(".cancel").one("click", function() {
					$(formModal.el).trigger("hidden.bs.modal");
				});

				formModal.on('ok', function () {
					// the form is used in create and edit mode.
					var errors = widget.formContent.commit({ validate: true });
					var emails = widget.formContent.getValue().emails; //Return an array with [old,values,new,values]
					if (typeof emails !== 'undefined' && emails.length>0) {
						// Take the new values assuming no deletion
						emails = widget.formContent.getValue().emails.slice((((widget.formContent.getValue().emails.length - 1) / 2) + 1), widget.formContent.getValue().emails.length);
						// computing the separator old new values using the first old value.
						if (widget.formContent.getValue().emails.lastIndexOf(widget.formContent.getValue().emails[0]) > 0) {
							emails = widget.formContent.getValue().emails.slice(widget.formContent.getValue().emails.lastIndexOf(widget.formContent.getValue().emails[0]), widget.formContent.getValue().emails.length);
						}
					}

					if (typeof errors === 'undefined' && emails.length>0) {
						var values = widget.formContent.getValue();
						// manipulate data
						values.customerId = squid_api.model.customer.get("id");
						values.userId = squid_api.model.login.get("oid");

						values.emails = emails;

						if (id) {
							// EDIT aka PUT /jobs/:id
							var job = exportJobs.get(id);
							job.attributes.emails = values.emails;
							job.unset("errors",{silent: true});
							job.set(values, {silent: false});
							job.save({}, {
								success: function(model) {
									me.status.unset("message");
									me.status.unset("error");
									var msg = "";
									var level ="error";
									var statusCode = model.get("statusCode");
									var statusJob = model.get("status");
									if (model.get("errors")) {
										var errors = model.get("errors");
										var sep = "";
										for (var x=0; x<errors.length; x++) {
											if (errors[x].message) {
												msg = msg + errors[x].message + sep;
											}
											sep = "<br>";
										}
										me.status.set("error", msg);
									} else if (typeof statusCode !== 'undefined' && statusCode === 401) {
										$(formModal.el).trigger("hidden.bs.modal");
										msg = msg + "Authorization expired, please logon again";
									} else if (typeof statusCode !== 'undefined' && statusCode !== 200) {
										$(formModal.el).trigger("hidden.bs.modal");
										msg = msg + "Schedule not updated, return code is "+statusCode;
									} else if (statusJob !== null && statusJob.type === "Active") {
										exportJobs.add(model);
										$(formModal.el).trigger("hidden.bs.modal");
										msg = msg + "Schedule successfully modified";
										level = "message";
									} else {
										$(formModal.el).trigger("hidden.bs.modal");
										msg = msg + "Schedule not updated, status code is "+statusJob;
									}
									me.status.set(level, msg);
								}
							});
						} else {
							// CREATE aka POST /jobs/

							var config = squid_api.model.config.toJSON();
							values.state = config;

							// Getting the accountID (shared code with PQ Counter)
							values.projectId = config.project;
							values.bookmarkId = config.bookmark;
							values.reportId = config.report; //Legacy
							values.reportName = config.report;
							for (ix = 0; ix < me.reports.length; ix++) {
								if (me.reports[ix].oid === config.report) {
									values.scheduleName = me.reports[ix].name;
								}
							}
							values.reportSelection = me.reportSelection(config);
							values.scheduleName = me.scheduleName(config);

							var newJob = new ExportJobModel(values);
							newJob.save({}, {
								success: function (model) {
									me.status.unset("message");
									me.status.unset("error");
									var msg = "";
									var level ="error";
									var statusCode = model.get("statusCode");
									var statusJob = model.get("status");
									if (model.get("errors")) {
										var errors = model.get("errors");
										var sep = "";
										for (var x=0; x<errors.length; x++) {
											if (errors[x].message) {
												msg = msg + errors[x].message + sep;
											}
											sep = "<br>";
										}
										me.status.set("error", msg);
									} else if (typeof statusCode !== 'undefined' && statusCode === 401) {
										$(formModal.el).trigger("hidden.bs.modal");
										msg = msg + "Authorization expired, please logon again";
									} else if (typeof statusCode !== 'undefined' && statusCode !== 200) {
										$(formModal.el).trigger("hidden.bs.modal");
										msg = msg + "Schedule not created, return code is "+statusCode;
									} else if (statusJob !== null && statusJob.type === "Active") {
										exportJobs.add(model);
										$(formModal.el).trigger("hidden.bs.modal");
										msg = msg + "Schedule successfully created";
										level = "message";
									} else {
										$(formModal.el).trigger("hidden.bs.modal");
										msg = msg + "Schedule not created, status code is "+statusJob;
									}
									me.status.set(level, msg);
								}
							});
						}
					} else if (emails.length === 0) {
						$(formModal.el).trigger("hidden.bs.modal");
					}
				});

			});
		},

		render: function () {
			var html = this.template();
			this.$el.html(html);
			/*
			//this.status.unset("message");
			// activate / disactivate button
			if (this.widgetAccessible) {
				this.$el.find("button").prop("visibility", 'visible');
			} else {
				this.$el.find("button").prop("visibility", 'visible');
			}
			 */
		}
	});

	return View;
}));
