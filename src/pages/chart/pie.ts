import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';

@Component({
    templateUrl: 'pie.html'
})
export class PieChartPage {
  CountriesList: any;
  commonSeriesOptions: any;
  title: any;
  legend: any;
  constructor(public plt: Platform) {
    this.CountriesList = [{ xName: 'Walmart', yName: 13, text: '13%' }, { xName: 'Apple', yName: 25, text: '25%' }, { xName: 'Best Buy', yName: 12, text: '12%' }, { xName: 'Target', yName: 7, text: '7%' }, { xName: 'Amazon', yName: 10, text: '10%' }, { xName: 'Wenger', yName: 13, text: '13%' }, { xName: 'Others', yName: 20, text: '20%' }];
    this.commonSeriesOptions = { marker: { dataLabel: { visible: true, shape: 'none', textMappingName: 'text', connectorLine: { type: 'bezier', color: 'black' }, font: { size: '20px', color: "white" } } }, border: { width: 2, color: 'white' }, name: 'Expenses', type: 'pie', labelPosition: 'inside', enableSmartLabels: true, };
    this.title = { text: 'Expenditures' };
    this.legend = { visible: true };
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