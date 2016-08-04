(function (root, factory) {
    root.squid_api.view.BarChartView = factory(root.Backbone, root.squid_api, squid_api.template.squid_api_barchart_widget);

}(this, function (Backbone, squid_api, template) {

    var View = Backbone.View.extend({
        template : null,

        format : null,

        d3Formatter : null,

        initialize: function(options) {
            var me = this;
            this.config = squid_api.model.config;

            if (this.model) {
                this.listenTo(this.model, 'change:status', this.render);
                this.listenTo(this.model, 'change:error', this.render);
                this.listenTo(this.model, 'change:disabled', this.toggleDisplay);
            }

            // setup options
            if (options.template) {
                this.template = options.template;
            } else {
                this.template = template;
            }

            if (d3) {
                this.d3Formatter = d3.format(",.f");
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
            $(window).on("resize", _.bind(this.resize(),this));
        },

        toggleDisplay: function() {
            if (this.model.get("disabled") || this.config.get("currentAnalysis") !== "barAnalysis") {
                this.hide();
            } else {
                this.show();
            }
        },

        resize : function() {
            var resizing = true;
            return function() {
                if (this.resizing) {
                    window.clearTimeout(resizing);
                }
                this.resizing = window.setTimeout(_.bind(this.render,this), 100);
            };
        },

        setModel: function(model) {
            this.model = model;
            this.initialize();

        },

        barDataValues: function(cols, rows) {
            // Set up base object + arrays
            var barData = {
                values: [],
                xValues: [],
                yValues: []
            };

            // check to see if we only display totals
            var onlyMetrics = true;
            for (i=0; i<cols.length; i++) {
                if (cols[i].role !== "DATA") {
                    onlyMetrics = false;
                }
            }

            // store bar data
            if (onlyMetrics) {
                // only show metric totals
                for (i=0; i<cols.length; i++) {
                    var col = cols[i];
                    var yAxis = col.name + " Total";
                    if (col.originType === "COMPARETO") {
                        yAxis += " (compare)";
                    }
                    for (ix=0; ix<rows.length; ix++) {
                        var xAxis = rows[ix].v[i];
                        barData.xValues.push(xAxis);
                        barData.yValues.push(yAxis);
                        barData.values.push([yAxis, xAxis]);
                    }
                }
            } else {
                for (i=0; i<rows.length; i++) {
                    var item1 = rows[i].v;
                    var yAxis1 = "";
                    var xAxis1;
                    for (ix=0; ix<item1.length; ix++) {
                        if (typeof(item1[ix]) === "string") {
                            if (yAxis1.length === 0) {
                                yAxis1 += item1[ix];
                            } else {
                                yAxis1 += " / " + item1[ix];
                            }
                        } else if (typeof(item1[ix]) === "number") {
                            xAxis1 = item1[ix];
                            barData.xValues.push(item1[ix]);
                            break;
                        }
                    }
                    barData.yValues.push(yAxis1);
                    barData.values.push([yAxis1, xAxis1]);
                }
            }

            return barData;
        },

        getData: function() {
            var data, analysis;

            analysis = this.model;

            // Use the first analyses array
            if (analysis.get("analyses")) {
                analysis = analysis.get("analyses")[0];
            }

            data = analysis.toJSON();
            data.done = this.model.isDone();

            return data;
        },

        remove: function() {
            this.undelegateEvents();
            this.$el.empty();
            this.stopListening();
            return this;
        },

        hide: function() {
            this.$el.hide();
        },

        show: function() {
            this.$el.show();
        },

        renderBase: function(done) {
            var isInCache = this.model.get("results") === null;
            this.$el.html(this.template({
                done: done,
                isInCache: isInCache
            }));
        },

        render: function() {
            var me = this;
            var data = this.getData();
            var status = this.model.get("status");
            var error = this.model.get("error");

            if (data.done && ! error) {

                // Print Template
                this.renderBase(true);

                // Obtain Bar Chart Data
                var barData = this.barDataValues(data.results.cols, data.results.rows);

                //Calculate largest value / width of screen
                var maxValue = Math.max.apply(Math, barData.xValues);
                var screenWidth = this.$el.find("#bar_chart").width();

                //ToolTip Declaration
                var tooltip = d3.select('body').append('div')
                    .style('position', 'absolute')
                    .style('padding', '0 10px')
                    .style('background', 'white')
                    .style('opacity', 0);

                // Pre definitions for the bar chart
                var width = screenWidth,
                    barHeight = 30;
                    ySpacing = 45;

                // Set A max / min height
                var height;

                if (barData.values.length < 5) {
                    height = 200;
                } else {
                    height = 500;
                }

                // To make the chart fit (Width)
                xScale = d3.scale.linear()
                    .domain([0, maxValue])
                    .range([0, width - 205]);

                var xAxis = d3.svg.axis()
                    .scale(xScale)
                    .orient('bottom');

                // To make the chart fit (Height)
                var yScale = d3.scale.ordinal()
                    .domain(barData.yValues)
                    .rangePoints([0, height]);

                //Define Y axis
                var yAxis = d3.svg.axis()
                    .scale(yScale)
                    .orient("left")
                    .ticks(10);

                // Bar Chart
                var chart = d3.select("#bar_chart")
                    .append("svg")
                    .attr("width", width)
                    .attr("height", height)
                    .attr("style", "overflow: visible;")
                    .append("g")
                    .attr("class", "chart");

                // Append data container
                var bar = chart.selectAll("div")
                    .data(barData.values)
                    .enter().append("g")
                    .attr("transform", function(d, i) { return "translate(0," + i * barHeight + ")"; });

                // Bar Rectangles with Tooltips / Transition on load
                bar.append("rect")
                    .attr("y", function(d, i) {
                        return i*15;
                    })
                    .attr("x", function() {
                        return 150;
                    })
                    .attr("width", function() {
                        return 0;
                    })
                    .attr('fill', function(d) {
                        var color = "#1f77b4";
                        if (d[0].includes("(compare)")) {
                            /* BRIGHTEN */
                            var parentColor = this.parentElement.previousSibling.firstChild.getAttributeNode("fill").value;
                            color = d3.hsl(parentColor).brighter().toString();
                        }
                        return color;
                    })
                    .attr("height", barHeight)
                    .on('mouseover', function(d) {
                        tooltip.transition()
                            .style('opacity', 1);
                        tooltip.html(d[0] + " - " + me.format(d[1]))
                            .style('left', (d3.event.pageX - 35) + 'px')
                            .style('top',  (d3.event.pageY - 30) + 'px');
                        tempColor = this.style.fill;
                        d3.select(this)
                            .style('opacity', 1)
                            .style('fill', '#1aadcf');
                        })
                    .on('mouseout', function() {
                        tooltip.html("");
                        d3.select(this)
                            .style('opacity', 1)
                            .style('fill', tempColor);
                    })
                    .transition()
                        // available callback options (to check)
                        .attr('width', function(d) {
                            return xScale(d[1]);
                        })
                        .delay(function(d, i) {
                            return i * 20;
                        })
                        .duration(1000)
                        .ease('bounce');

                    // xAxis (Starting 200px from left)
                    xAxis = d3.select("#bar_chart svg")
                        .append("g")
                        .attr('class', 'axis')
                        .attr('width', width)
                        .attr('x', 400)
                        .attr('transform', 'translate(150,' + (height - 1) + ')')
                        .call(xAxis);

                    // yAxis (Starting 150px from right)
                    var yAxisAppend = d3.select("#bar_chart svg")
                        .append("g")
                        .attr('class', 'axis')
                        .attr('height', height)
                        .attr('transform', 'translate(150,0)')
                        .call(yAxis)
                        .selectAll(".tick");

                    // Y aXis label spacing
                    yAxisAppend.attr("transform", function(d, i) {
                        return "translate(0," + (15 + (i * ySpacing)) + ")";
                    });
                } else {
                    // Print Template
                    this.renderBase(false);
                }
                if (status === "RUNNING") {
                    this.$el.find("#sq-loading").show();
                    this.$el.find("#re-run").hide();
                } else {
                    this.$el.find("#sq-loading").hide();
                }

                return this;
        }

    });

    return View;
}));
