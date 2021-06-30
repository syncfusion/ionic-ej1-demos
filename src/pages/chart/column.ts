import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';

@Component({
    templateUrl: 'column.html'
})
export class ColumnChartPage {
  CountriesList: any;
  commonSeriesOptions: any;
  title: any;
  legend: any;
  primaryXAxis: any;
  primaryYAxis: any;
  constructor(public plt: Platform) {
    this.CountriesList = [
                 {xName: 'USA', yName: 50, yName1: 70, yName2: 45},
                 {xName: 'China', yName: 40, yName1: 60, yName2: 55},
                  {xName: 'Japan', yName: 70, yName1: 60, yName2: 50}
    ];
    this.commonSeriesOptions = {type: 'column', tooltip: {visible: false, format: '#point.x# :  #point.y#'}};
    this.title = {text: 'Olympic Medals'};
    this.legend = {visible: true, position: 'top'};
    this.primaryXAxis = {axisLine:{visible:true}};
    this.primaryYAxis = {range: {min: 0, max: 80, interval: 20}};
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
		for (var i=0; i< seriesLength; i++){
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
			for (var j=0; j< model.axes.length; j++){
				model.axes[j].labelIntersectAction = "rotate45";
				if (model.axes[j].title)
					model.axes[j].title.text = "";
				model.axes[j].edgeLabelPlacement = "hide";
			}
		}
	}
  }  
}