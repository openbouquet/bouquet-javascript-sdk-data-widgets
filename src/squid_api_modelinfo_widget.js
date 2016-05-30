(function (root, factory) {
    root.squid_api.view.ModelInfoView = factory(root.Backbone, root.squid_api, squid_api.template.squid_api_modelinfo_widget);

}(this, function (Backbone, squid_api, template) {

    var View = Backbone.View.extend({

        template: template,
        popoverOptions: {
            placement: function (context, source) {
                var position = $(source).position();

                if (position.left > 515) {
                    return "left";
                }

                if (position.left < 515) {
                    return "right";
                }

                if (position.top < 110){
                    return "bottom";
                }

                return "top";
            },
            html: true,
            container: 'body'
        },
        internalTemplate: null,

        initialize: function() {
            this.config = squid_api.model.config;
            this.internalTemplate = squid_api.template.squid_api_modelinfo_internal_widget;

            this.config.on("change:domain", this.render, this);
        },

        getDimensions: function() {
            var me = this;
            return squid_api.getCustomer().then(function(customer) {
                return customer.get("projects").load(me.config.get("project")).then(function(project) {
                    return project.get("domains").load(me.config.get("domain")).then(function(domain) {
                        return domain.get("dimensions").load();
                    });
                });
            });
        },

        getMetrics: function() {
            var me = this;
            return squid_api.getCustomer().then(function(customer) {
                return customer.get("projects").load(me.config.get("project")).then(function(project) {
                    return project.get("domains").load(me.config.get("domain")).then(function(domain) {
                        return domain.get("metrics").load();
                    });
                });
            });
        },

        render: function() {
            var me = this;
            var domain = this.config.get("domain");

            if (domain) {
                // print base template
                this.$el.html(this.template());

                // get domain dimensions & metrics
                $.when( this.getDimensions(), this.getMetrics() ).done(function ( dimensions, metrics ) {
                    var jsonData = {
                        "dimensions": [],
                        "metrics": []
                    };

                    // store dimensions
                    for (var d=0; d<dimensions.length; d++) {
                        jsonData.dimensions.push({
                            "name": dimensions.at(d).get("name"),
                            "description": dimensions.at(d).get("description")
                        });
                    }

                    // store metrics
                    for (var m=0; m<metrics.length; m++) {
                        jsonData.metrics.push({
                            "name": metrics.at(m).get("name"),
                            "description": metrics.at(m).get("description")
                        });
                    }

                    // set popup html content
                    me.popoverOptions.content = me.internalTemplate(jsonData);

                    // initialize popover
                    me.$el.find("[data-toggle='popover']").popover(me.popoverOptions);

                    // remove max-width
                    me.$el.find("[data-toggle='popover']").on("show.bs.popover", function(){
                        me.$el.find("[data-toggle='popover']").data("bs.popover").tip().css({"max-width": "inherit"});
                    });

                    /*
                        close popover when clicked outside
                    */
                    $('body').on('click', function (e) {
                        me.$el.find("[data-toggle='popover']").each(function() {
                            //the 'is' for buttons that trigger popups
                            //the 'has' for icons within a button that triggers a popup
                            if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
                                $(this).popover('hide');
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
