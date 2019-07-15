import { Component } from '@angular/core';

@Component({
    templateUrl: 'default.html'
})
export class SparklineDefaultPage {
    data:any;
	tool:any;
	size:any;
    ldata:any;
    lheight:any;
    lwidth:any;
    cdata:any;
    ctype:any;
    highColor:any;
    negativeColor:any;
    cheight:any;
    cwidth:any;
    adata:any;
    atype:any;
    strokeWidth:any;
    wdata:any;
    wtype:any;
    pdata1:any;
    pdata2:any;
    pdata3:any;
    pdata4:any;
    ptype:any;
    pstrokeWidth:any;
    pheight:any;
    pwidth:any;
  constructor() {
    this.ldata = [12, 14, 11, 12, 11, 15, 12, 10, 11, 12, 15, 13, 12, 11, 10, 13, 15, 12, 14, 16, 14, 12, 11];
	this.size = { height: 40, width: 170 };
    this.cdata = [2, 6, -1, 1, 12, 5, -2, 7, -3, 5, 8, 10];
    this.strokeWidth = 0.4;
    this.negativeColor = "red";
    this.highColor = "blue";
    this.ctype = "column";
    this.cheight = 100;
	this.cwidth = 150;
    this.adata = [12, -10, 11, 8, 17, 6, 2, -17, 13, -6, 8, 10];
    this.atype = "area";
    this.wdata = [12, 15, -11, 13, 17, 0, -12, 17, 13, -15, 8, 10];
    this.wtype = "winLoss";
    this.pdata1 = [4, 6, 7];
    this.pdata2 = [8, 9, 6, ];
    this.pdata3 = [2, 3, 5];
    this.pdata4 = [10, 12, 11];
    this.ptype = "pie";
    this.pstrokeWidth = 0;
    this.pheight = 40;
	this.pwidth = 40;
	this.tool = {
		visible:false,
		font:'10px'
	};
    this.ldata = this.ldata;
    this.lheight = this.size.height;
    this.lwidth = this.size.width;
    this.cdata = this.cdata;
    this.ctype = this.ctype;
    this.highColor = this.highColor;
    this.negativeColor = this.negativeColor;
    this.cheight = this.cheight;
    this.cwidth = this.cwidth;
    this.adata = this.adata;
    this.atype = this.atype;
    this.strokeWidth = this.strokeWidth;
    this.wdata = this.wdata;
    this.wtype = this.wtype;
    this.pdata1 = this.pdata1;
    this.pdata2 = this.pdata2;
    this.pdata3 = this.pdata3;
    this.pdata4 = this.pdata4;
    this.ptype = this.ptype;
    this.pstrokeWidth = this.pstrokeWidth;
    this.pheight = this.pheight;
    this.pwidth = this.pwidth;
  }
}