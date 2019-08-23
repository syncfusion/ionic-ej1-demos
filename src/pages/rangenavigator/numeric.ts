import { Component } from '@angular/core';
declare var jQuery: any;
declare var ej: any;
@Component({
    templateUrl: 'numeric.html'
})
export class RangeNumericPage {
  rangeData: any;
  openData:any;
  closeData:any;
  EfficiencyList: any;
  commonSeries: any;
  primaryX: any;
  rntooltip:any;
  crosshair: any;
  primaryY: any;
  chartSize:any;
  constructor() {
       this.chartSize = {
        height:"450"  
      };
       this.rntooltip = {
          tooltipDisplayMode : "ondemand",
          visible:true
      };
      this.openData = GetData().Open;
      this.closeData =  GetData().Close;
      this.rangeData = this.openData;
      this.crosshair = {
                               visible: true,
							   type:'trackball',
                               marker:
                              {
                                  shape: 'circle',

                                  size:
                                  {
                                      height: 9, width: 9
                                  },
                                  visible: true,
                                 border: {width: 1 }
                              },
                               line: {
                                   color: 'transparent'
                               }
                           };
    this.commonSeries = { type: 'line',
                                enableAnimation: true,
                               style: { borderWidth: 2 },
							   tooltip :
					             {					             	 
						            format:"#point.x#  : ej.format(#point.y#,n2)"
					             }, 
                        };
    this.primaryX = {  majorGridLines: { visible: false },
							  rangePadding: "none",
                               zoomPosition:0.285714285714,
                               zoomFactor:0.4285714285714
                     };
    this.primaryY = {  labelFormat: '${value}',
						   range:{min:60, max:160, interval:20}};     
      
  }
  onchartload(sender) {
      if (!ej.util.isNullOrUndefined(window.orientation) && sender) {  
		var model = sender.model,
		seriesLength = model.series.length;
		model.title.enableTrim = true;
		model.elementSpacing = 5;
		model.legend.visible = false;
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
  onchartloaded(sender) {
		let chartobj = jQuery("#numericChart").data("ejChart");
            if (chartobj != null) {
                chartobj.model.primaryXAxis.zoomPosition = sender.zoomPosition;
                chartobj.model.primaryXAxis.zoomFactor = sender.zoomFactor;
                chartobj.redraw();
            }
        }
        
        onrnload(sender){
         sender.model.series = [{
             name:'Product A',
             type:'line',
             enableAnimation:false,
             dataSource : this.rangeData,
             xName:"XValue",
             yName:"YValue",
             border:{
                 color:"transparent",
                 width:"2"
             },
             opacity: 1
           }]
        }   
}
            
function GetData(){
     var series1 = [];
            var series2 = [];
            var value = 100;
            var value1 = 120;
            for (var i = 0; i < 351; i++) {

                if (Math.random() > .5) {
                    value += Math.random();
                    value1 += Math.random();
                } else {
                    value -= Math.random();
                    value1 -= Math.random();
                }
                var point1 = { XValue: i, YValue: value };
                var point2 = { XValue: i, YValue: value1 };
                series1.push(point1);
                series2.push(point2);
            }

            var data = { Open: series1, Close: series2 };
            return data;
}