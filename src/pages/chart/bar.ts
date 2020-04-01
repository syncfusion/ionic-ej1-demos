import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';

@Component({
    templateUrl: 'bar.html'
})
export class BarChartPage {
 UnemploymentList : any;
  commonSeriesOptions : any;
  title: any;
  legend:any;
  primaryXAxis:any;
  primaryYAxis:any;
  constructor(public plt: Platform) {  
    this.UnemploymentList = [{ xName: 2006, yName: 7.8, yName1: 4.8 }, { xName: 2007, yName: 7.2, yName1: 4.6 }, { xName: 2008, yName: 6.8, yName1: 7.2 }, { xName: 2009, yName: 10.7, yName1: 9.3 }, { xName: 2010, yName: 10.8, yName1: 9.7 }, { xName: 2011, yName: 9.8, yName1: 9 }];
    this.commonSeriesOptions = { type: 'bar', tooltip: { visible: false, format: '#point.x# :  #point.y#' }, marker: { dataLabel: { visible: false } } };
    this.title = { text: 'Unemployment rate (%)', enableTrim: true };
    this.legend = { visible: true };
    this.primaryXAxis = {  range: { min: 2005, max: 2012, interval: 1 }, labelIntersectAction: "hide"};
    this.primaryYAxis = { range: { min: 3, max: 12, interval: 1 }, labelFormat: '{value}%'};  
  }

onchartload(sender) {
    if (!this.plt.is('core') && sender) { 
		var model = sender.model,
		seriesLength = model.series.length;
		model.title.enableTrim = true;
		model.elementSpacing = 5;
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