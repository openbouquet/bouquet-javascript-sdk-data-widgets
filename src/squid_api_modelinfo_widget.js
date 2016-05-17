(function (root, factory) {
    root.squid_api.view.ModelInfoView = factory(root.Backbone, root.squid_api, squid_api.template.squid_api_modelinfo_widget);

}(this, function (Backbone, squid_api, template) {

    var View = Backbone.View.extend({

        template: template,
        popoverOptions: {
            placement: "left",
            html: true
        },
        internalTemplate: null,

        initialize: function() {
            this.internalTemplate = squid_api.template.squid_api_modelinfo_internal_widget;
            this.status = squid_api.model.status;
            this.status.on("change:configReady", this.getContent, this);
        },

        getContent: function() {
            this.popoverOptions.content = this.internalTemplate();
            this.render();
        },

        render: function() {
            // print base template
            this.$el.html(this.template());
            // initialize popover
            this.$el.find("[data-toggle='popover']").popover(this.popoverOptions);

            return this;
        }
    });

    return View;
}));
