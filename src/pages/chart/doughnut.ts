import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';

@Component({
    templateUrl: 'doughnut.html'
})
export class DoughnutChartPage {
  points : any;
  commonSeriesOptions : any;
  title: any;
  legend:any;
  constructor(public plt: Platform) {  
    this.points= [{ x: 'Labour', y: 28 }, { x: 'Legal', y: 10 },
							 { x: 'Production', y: 20 }, { x: 'License', y: 15 },
               { x: 'Facilities', y: 23 }, { x: 'Taxes', y: 17 },
							 { x: 'Insurance', y: 12 }];
	  this.commonSeriesOptions = { type: 'doughnut',enableSmartLabels:false, labelPosition:'inside', marker: { dataLabel: { visible: true,font: { color: 'white', size: '30px', fontWeight: 'lighter'} },}, explode:true };
    this.title = { text: 'Project Cost Breakdown' };
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