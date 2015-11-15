var selector = new Vue({
    el: "#options",
    data: {
        ctx: document.getElementById("graph").getContext("2d"),
        chart: null,
        option: {
            bar: {
                scaleBeginAtZero: true,
                scaleShowGridLines: true,
                scaleGridLineColor: "",
                scaleGridLineWidth: "",
                scaleShowHorizontalLines: true,
                scaleShowVerticalLines: true,
                barShowStroke: true,
                barStrokeWidth: "",
                barValueSpacing: "",
                barDatasetSpacing: "",
                legendTemplate: ""
            }
        },
        chartData: {
            labels: [
                "ラベル1","ラベル2","ラベル3",
                "ラベル4","ラベル5","ラベル6",
                "ラベル7","ラベル8","ラベル9"
            ],
            datasets: [
                {
                    data: [10, 20, 30, 40, 50, 60, 70, 80, 90],
                    fillColor: "lightcyan",
                    strokeColor: "lightblue",
                    highlightFill: "cyan",
                    highlightStroke: "blue"
                },
                {
                    data: [95, 85, 75, 65, 55, 45, 35, 25, 10],
                    fillColor: "lightyellow",
                    strokeColor: "lightsalmon",
                    highlightFill: "yellow",
                    highlightStroke: "salmon"
                },
                {
                    data: [19, 28, 37, 46, 55, 64, 73, 82, 91 ],
                    fillColor: "coral",
                    strokeColor: "lightgreen",
                    highlightFill: "red",
                    highlightStroke: "green"
                }
            ]
        }
    },
    ready: function() {

        this.updateChart();
    },
    methods: {
        _createChartOption: function() {
            var changedOption = {};

            changedOption.scaleBeginAtZero = this.option.bar.scaleBeginAtZero;
            changedOption.scaleShowGridLines = this.option.bar.scaleShowGridLines;

            if (this.option.bar.scaleGridLineColor != null
                && this.option.bar.scaleGridLineColor != "") {
                changedOption.scaleGridLineColor = this.option.bar.scaleGridLineColor;
            }

            if (this.option.bar.scaleGridLineWidth != null
                && this.option.bar.scaleGridLineWidth != "") {
                changedOption.scaleGridLineWidth = this.option.bar.scaleGridLineWidth;
            }

            changedOption.scaleShowHorizontalLines = this.option.bar.scaleShowHorizontalLines;
            changedOption.scaleShowVerticalLines = this.option.bar.scaleShowVerticalLines;
            changedOption.barShowStroke = this.option.bar.barShowStroke;

            if (this.option.bar.barStrokeWidth != null
                && this.option.bar.barStrokeWidth != "") {
                changedOption.barStrokeWidth = this.option.bar.barStrokeWidth;
            }

            if (this.option.bar.barValueSpacing != null
                && this.option.bar.barValueSpacing != "") {
                changedOption.barValueSpacing = this.option.bar.barValueSpacing;
            }

            if (this.option.bar.barDatasetSpacing != null
                && this.option.bar.barDatasetSpacing != "") {
                changedOption.barDatasetSpacing = this.option.bar.barDatasetSpacing;
            }

            if (this.option.bar.legendTemplate != null
                && this.option.bar.legendTemplate != "") {
                changedOption.legendTemplate = this.option.bar.legendTemplate;
            }

            return changedOption;
        },
        updateChart: function() {
            this.chart = new Chart(this.ctx).Bar(this.chartData, this._createChartOption());
        }
    }
});
