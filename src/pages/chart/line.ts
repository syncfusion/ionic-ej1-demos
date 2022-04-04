import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';

@Component({
    templateUrl: 'line.html'
})
export class LineChartPage {
    title: any;
    EfficiencyList: any;
    commonSeries: any;
    primaryX: any;
    primaryY: any;
    constructor(public plt: Platform) {
        this.title = { text: "Oil-fired power production" };
        this.EfficiencyList = [{ 'Year': '2005', 'yName': 28, 'yName1': 31, 'yName2': 36, 'yName3': 39 }, { 'Year': '2006', 'yName': 25, 'yName1': 28, 'yName2': 32, 'yName3': 36 }, { 'Year': '2007', 'yName': 26, 'yName1': 30, 'yName2': 34, 'yName3': 40 }, { 'Year': '2008', 'yName': 27, 'yName1': 36, 'yName2': 41, 'yName3': 44 }, { 'Year': '2009', 'yName': 32, 'yName1': 36, 'yName2': 42, 'yName3': 45 }, { 'Year': '2010', 'yName': 35, 'yName1': 39, 'yName2': 42, 'yName3': 48 }, { 'Year': '2011', 'yName': 30, 'yName1': 37, 'yName2': 43, 'yName3': 46 }];
        this.commonSeries = { type: 'line', tooltip: { visible: false }, marker: { shape: 'circle', size: { height: 7, width: 7 }, visible: true }, border: { width: 2 } };
        this.primaryX = { labelPlacement: 'onTicks' };
        this.primaryY = { labelFormat: '{value}%', range: { min: 25, max: 50, interval: 5 } };
    }

    onchartload(sender) {
        if (!this.plt.is('core') && sender) {
            var model = sender.model,
            seriesLength = model.series.length;
            model.title.enableTrim = true;
            model.elementSpacing = 5;
            model.legend.visible = true;
            model.size.height = null;
            model.size.width = null;
            for (var i = 0; i < seriesLength; i++) {
                if (!model.series[i].marker)
                    model.series[i].marker = {};
                if (!model.series[i].marker.size)
                    model.series[i].marker.size = {};
                model.series[i].marker.size.width = 6;
                model.series[i].marker.size.height = 6;
            }
            model.primaryXAxis.labelIntersectAction = "rotate45";
            if (model.primaryXAxis.title)
                model.primaryXAxis.title.text = "";
            model.primaryXAxis.edgeLabelPlacement = "hide";
            model.primaryYAxis.labelIntersectAction = "rotate45";
            if (model.primaryYAxis.title)
                model.primaryYAxis.title.text = "";
            model.primaryYAxis.edgeLabelPlacement = "hide";
            if (model.axes) {
                for (var j = 0; j < model.axes.length; j++) {
                    model.axes[j].labelIntersectAction = "rotate45";
                    if (model.axes[j].title)
                        model.axes[j].title.text = "";
                    model.axes[j].edgeLabelPlacement = "hide";
                }
            }
        }
    }
}
