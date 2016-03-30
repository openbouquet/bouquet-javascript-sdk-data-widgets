(function (root, factory) {
    root.squid_api.view.KPIView = factory(root.Backbone, root.squid_api);
}(this, function (Backbone, squid_api) {

    View = Backbone.View.extend( {

        template : null,
        
        format : null,

        initialize : function(options) {
            if (this.model) {
                this.model.on('change', this.render, this);
            }
            // setup options
            if (options.template) {
                this.template = options.template;
            } else {
                this.template = squid_api.template.squid_api_kpi_widget;
            }
            if (options.format) {
                this.format = options.format;
            } else {
                // default number formatter
                if (d3) {
                    this.format = d3.format(",.1f");
                } else {
                    this.format = function(f){
                        return f;
                    };
                }
            }
        },

        setModel : function(model) {
            this.model = model;
            this.initialize();
        },

        render : function() {
            var jsonData, results, values;
            if (this.model.isDone()) {
                jsonData = [];
                jsonData.done = true;
                results = this.model.get("results");
                if (results) {
                    var values = results.rows[0].v;
                    for (var i=0; i<results.cols.length; i++) {
                        var col = results.cols[i];
                        var kpi = {};
                        kpi.value = this.format(values[i]);
                        kpi.unit = "";
                        kpi.name = col.name;
                        jsonData.push(kpi);
                    }
                }
            }
            this.$el.html(this.template(jsonData));
            return this;
        }
    });

    return View;
}));
