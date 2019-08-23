webpackJsonp([0],{

/***/ 198:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 198;

/***/ }),

/***/ 240:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 240;

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GridDefaultPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_northwind_service_northwind_service__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GridDefaultPage = /** @class */ (function () {
    function GridDefaultPage(northwindService) {
        this.northwindService = northwindService;
        this.gridData = northwindService.getOrders();
    }
    GridDefaultPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-grid',template:/*ion-inline-start:"D:\Work\SVN\17.2.0.1\JS\ionic\src\pages\grid\default.html"*/'<header-title title="Grid"></header-title>\n<ion-content padding>\n    <ej-grid [dataSource]="gridData" [allowPaging]="true" [isResponsive]="true">\n        <e-columns>\n            <e-column field="OrderID" headerText="Order ID" width="22%"></e-column>\n            <e-column field="CustomerID" headerText="Client ID" width="22%"></e-column>\n            <e-column field="Freight" width="19%" format="{0:C}"></e-column>\n            <e-column field="OrderDate" headerText="Date" format="{0:MM/dd/yy}" width="21%"></e-column>\n            <e-column field="ShipCity" headerText="Ship City" width="32%"></e-column>\n        </e-columns>\n    </ej-grid>\n</ion-content>'/*ion-inline-end:"D:\Work\SVN\17.2.0.1\JS\ionic\src\pages\grid\default.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_1__providers_northwind_service_northwind_service__["a" /* NorthwindService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_northwind_service_northwind_service__["a" /* NorthwindService */]])
    ], GridDefaultPage);
    return GridDefaultPage;
}());

//# sourceMappingURL=default.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GridSortingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_northwind_service_northwind_service__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GridSortingPage = /** @class */ (function () {
    function GridSortingPage(northwindService) {
        this.northwindService = northwindService;
        this.gridData = northwindService.getOrders();
    }
    GridSortingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-grid',template:/*ion-inline-start:"D:\Work\SVN\17.2.0.1\JS\ionic\src\pages\grid\sorting.html"*/'<header-title title="Grid  /  Sorting"></header-title>\n\n<ion-content padding>\n\n    <ej-grid [dataSource]="gridData" [allowSorting]="true" [allowMultiSorting]="true" [allowPaging]="true" [isResponsive]="true">\n\n        <e-columns>\n\n            <e-column field="OrderID" headerText="Order ID" width="13%"></e-column>\n\n            <e-column field="Freight" width="12%" format="{0:C}"></e-column>\n\n            <e-column field="OrderDate" headerText="Date" format="{0:MM/dd/yy}" width="10%"></e-column>\n\n            <e-column field="ShipCity" headerText="Ship City" width="15%"></e-column>\n\n        </e-columns>\n\n    </ej-grid>\n\n</ion-content>'/*ion-inline-end:"D:\Work\SVN\17.2.0.1\JS\ionic\src\pages\grid\sorting.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_1__providers_northwind_service_northwind_service__["a" /* NorthwindService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_northwind_service_northwind_service__["a" /* NorthwindService */]])
    ], GridSortingPage);
    return GridSortingPage;
}());

//# sourceMappingURL=sorting.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GridFilteringPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_northwind_service_northwind_service__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GridFilteringPage = /** @class */ (function () {
    function GridFilteringPage(northwindService) {
        this.northwindService = northwindService;
        this.gridData = northwindService.getOrders();
    }
    GridFilteringPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-grid',template:/*ion-inline-start:"D:\Work\SVN\17.2.0.1\JS\ionic\src\pages\grid\filtering.html"*/'﻿<header-title title="Grid  /  Filtering"></header-title>\n\n<ion-content padding>\n\n    <ej-grid [dataSource]="gridData" [allowFiltering]="true" [allowPaging]="true" [isResponsive]="true">\n\n        <e-columns>\n\n            <e-column field="OrderID" headerText="Order ID" width="22%"></e-column>\n\n            <e-column field="CustomerID" headerText="Client ID" width="22%"></e-column>\n\n            <e-column field="Freight" width="19%" format="{0:C}"></e-column>\n\n            <e-column field="OrderDate" headerText="Date" format="{0:MM/dd/yy}" width="21%"></e-column>\n\n            <e-column field="ShipCity" headerText="Ship City" width="32%"></e-column>\n\n        </e-columns>\n\n    </ej-grid>\n\n</ion-content>'/*ion-inline-end:"D:\Work\SVN\17.2.0.1\JS\ionic\src\pages\grid\filtering.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_1__providers_northwind_service_northwind_service__["a" /* NorthwindService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_northwind_service_northwind_service__["a" /* NorthwindService */]])
    ], GridFilteringPage);
    return GridFilteringPage;
}());

//# sourceMappingURL=filtering.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GridTemplatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_northwind_service_northwind_service__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GridTemplatePage = /** @class */ (function () {
    function GridTemplatePage(northwindService) {
        this.northwindService = northwindService;
        this.gridData = northwindService.getEmployees();
    }
    GridTemplatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-grid',template:/*ion-inline-start:"D:\Work\SVN\17.2.0.1\JS\ionic\src\pages\grid\columntemplate.html"*/'<header-title title="Grid  /  Column Template"></header-title>\n<ion-content padding>\n    <ej-grid [dataSource]="gridData" [isResponsive]="true">\n        <e-columns>\n            <e-column field="EmployeeImage" headerText="Employee Image" width="28%">\n                <ng-template e-template let-data>\n                    <div *ngIf="data.EmployeeID">\n                        <img style="width: 75px; height: 70px" [attr.src]="\'assets/img/Employees/\' + data.EmployeeID + \'.png\' " [alt]="data.EmployeeID" />\n                    </div>\n                </ng-template>\n            </e-column>\n            <e-column field="EmployeeID" headerText="Employee ID" width="22%"></e-column>\n            <e-column field="FirstName" headerText="First Name" format="{0:C}" width="20%"></e-column>\n            <e-column field="LastName" headerText="Last Name" width="20%"></e-column>\n        </e-columns>\n    </ej-grid>\n</ion-content>'/*ion-inline-end:"D:\Work\SVN\17.2.0.1\JS\ionic\src\pages\grid\columntemplate.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_1__providers_northwind_service_northwind_service__["a" /* NorthwindService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_northwind_service_northwind_service__["a" /* NorthwindService */]])
    ], GridTemplatePage);
    return GridTemplatePage;
}());

//# sourceMappingURL=columntemplate.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LineChartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LineChartPage = /** @class */ (function () {
    function LineChartPage(plt) {
        this.plt = plt;
        this.title = { text: "Oil-fired power production" };
        this.EfficiencyList = [{ 'Year': '2005', 'yName': 28, 'yName1': 31, 'yName2': 36, 'yName3': 39 }, { 'Year': '2006', 'yName': 25, 'yName1': 28, 'yName2': 32, 'yName3': 36 }, { 'Year': '2007', 'yName': 26, 'yName1': 30, 'yName2': 34, 'yName3': 40 }, { 'Year': '2008', 'yName': 27, 'yName1': 36, 'yName2': 41, 'yName3': 44 }, { 'Year': '2009', 'yName': 32, 'yName1': 36, 'yName2': 42, 'yName3': 45 }, { 'Year': '2010', 'yName': 35, 'yName1': 39, 'yName2': 42, 'yName3': 48 }, { 'Year': '2011', 'yName': 30, 'yName1': 37, 'yName2': 43, 'yName3': 46 }];
        this.commonSeries = { type: 'line', tooltip: { visible: false }, marker: { shape: 'circle', size: { height: 7, width: 7 }, visible: true }, border: { width: 2 } };
        this.primaryX = { labelPlacement: 'onTicks' };
        this.primaryY = { labelFormat: '{value}%', range: { min: 25, max: 50, interval: 5 } };
    }
    LineChartPage.prototype.onchartload = function (sender) {
        if (!this.plt.is('core') && sender) {
            var model = sender.model, seriesLength = model.series.length;
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
    };
    LineChartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"D:\Work\SVN\17.2.0.1\JS\ionic\src\pages\chart\line.html"*/'<header-title title="Chart  /  Line"></header-title>\n\n<ion-content>\n\n    <ej-chart  id="line_Ionic" style="display:block;" [isResponsive]="true" [legend.visible]="true" (load)="onchartload($event)" [primaryXAxis]="primaryX" [primaryYAxis]="primaryY" [commonSeriesOptions]="commonSeries" [title]="title">\n\n        <e-seriescollection>\n\n            <e-series name="India" [dataSource]="EfficiencyList" xName="Year" yName="yName"></e-series>\n\n            <e-series name="Germany" [dataSource]="EfficiencyList" xName="Year" yName="yName1"></e-series>\n\n            <e-series name="England" [dataSource]="EfficiencyList" xName="Year" yName="yName2"></e-series>\n\n            <e-series name="France" [dataSource]="EfficiencyList" xName="Year" yName="yName3"></e-series>\n\n        </e-seriescollection>\n\n    </ej-chart>\n\n</ion-content>'/*ion-inline-end:"D:\Work\SVN\17.2.0.1\JS\ionic\src\pages\chart\line.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */]])
    ], LineChartPage);
    return LineChartPage;
}());

//# sourceMappingURL=line.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PieChartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PieChartPage = /** @class */ (function () {
    function PieChartPage(plt) {
        this.plt = plt;
        this.CountriesList = [{ xName: 'Walmart', yName: 13, text: '13%' }, { xName: 'Apple', yName: 25, text: '25%' }, { xName: 'Best Buy', yName: 12, text: '12%' }, { xName: 'Target', yName: 7, text: '7%' }, { xName: 'Amazon', yName: 10, text: '10%' }, { xName: 'Wenger', yName: 13, text: '13%' }, { xName: 'Others', yName: 20, text: '20%' }];
        this.commonSeriesOptions = { marker: { dataLabel: { visible: true, shape: 'none', textMappingName: 'text', connectorLine: { type: 'bezier', color: 'black' }, font: { size: '20px', color: "white" } } }, border: { width: 2, color: 'white' }, name: 'Expenses', type: 'pie', labelPosition: 'inside', enableSmartLabels: true, };
        this.title = { text: 'Expenditures' };
        this.legend = { visible: true };
    }
    PieChartPage.prototype.onchartload = function (sender) {
        if (!this.plt.is('core') && sender) {
            var model = sender.model, seriesLength = model.series.length;
            model.title.enableTrim = true;
            model.elementSpacing = 5;
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
    };
    PieChartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"D:\Work\SVN\17.2.0.1\JS\ionic\src\pages\chart\pie.html"*/'<header-title title="Chart  /  Pie"></header-title>\n\n<ion-content>\n\n    <ej-chart id="pie_Ionic"  style="display:block;" [isResponsive]="true" [legend]="legend" [title]="title" [commonSeriesOptions]="commonSeriesOptions" (load)="onchartload($event)">\n\n        <e-seriescollection>\n\n            <e-series name="Gold" [dataSource]="CountriesList" xName="xName" yName="yName"></e-series>\n\n        </e-seriescollection>\n\n    </ej-chart>\n\n</ion-content>'/*ion-inline-end:"D:\Work\SVN\17.2.0.1\JS\ionic\src\pages\chart\pie.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */]])
    ], PieChartPage);
    return PieChartPage;
}());

//# sourceMappingURL=pie.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColumnChartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ColumnChartPage = /** @class */ (function () {
    function ColumnChartPage(plt) {
        this.plt = plt;
        this.CountriesList = [
            { xName: 'USA', yName: 50, yName1: 70, yName2: 45 },
            { xName: 'China', yName: 40, yName1: 60, yName2: 55 },
            { xName: 'Japan', yName: 70, yName1: 60, yName2: 50 }
        ];
        this.commonSeriesOptions = { type: 'column', tooltip: { visible: false, format: '#point.x# :  #point.y#' } };
        this.title = { text: 'Olympic Medals' };
        this.legend = { visible: true, position: 'top' };
        this.primaryXAxis = { axisLine: { visible: true } };
        this.primaryYAxis = { range: { min: 0, max: 80, interval: 20 } };
    }
    ColumnChartPage.prototype.onchartload = function (sender) {
        if (!this.plt.is('core') && sender) {
            var model = sender.model, seriesLength = model.series.length;
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
    };
    ColumnChartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"D:\Work\SVN\17.2.0.1\JS\ionic\src\pages\chart\column.html"*/'<header-title title="Chart  /  Column"></header-title>\n\n<ion-content>\n\n    <ej-chart id="column_Ionic"  style="display:block;" [isResponsive]="true" [legend]="legend" [title]="title" [primaryXAxis]="primaryXAxis" [primaryYAxis]="primaryYAxis" [commonSeriesOptions]="commonSeriesOptions" (load)="onchartload($event)">\n\n        <e-seriescollection>\n\n            <e-series name="Gold" [dataSource]="CountriesList" xName="xName" yName="yName"></e-series>\n\n            <e-series name="Silver" [dataSource]="CountriesList" xName="xName" yName="yName1"></e-series>\n\n            <e-series name="Bronze" [dataSource]="CountriesList" xName="xName" yName="yName2"></e-series>\n\n        </e-seriescollection>\n\n    </ej-chart>\n\n</ion-content>'/*ion-inline-end:"D:\Work\SVN\17.2.0.1\JS\ionic\src\pages\chart\column.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */]])
    ], ColumnChartPage);
    return ColumnChartPage;
}());

//# sourceMappingURL=column.js.map

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BarChartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BarChartPage = /** @class */ (function () {
    function BarChartPage(plt) {
        this.plt = plt;
        this.UnemploymentList = [{ xName: 2006, yName: 7.8, yName1: 4.8 }, { xName: 2007, yName: 7.2, yName1: 4.6 }, { xName: 2008, yName: 6.8, yName1: 7.2 }, { xName: 2009, yName: 10.7, yName1: 9.3 }, { xName: 2010, yName: 10.8, yName1: 9.7 }, { xName: 2011, yName: 9.8, yName1: 9 }];
        this.commonSeriesOptions = { type: 'bar', tooltip: { visible: false, format: '#point.x# :  #point.y#' }, marker: { dataLabel: { visible: false } } };
        this.title = { text: 'Unemployment rate (%)', enableTrim: true };
        this.legend = { visible: true };
        this.primaryXAxis = { range: { min: 2005, max: 2012, interval: 1 }, labelIntersectAction: "hide" };
        this.primaryYAxis = { range: { min: 3, max: 12, interval: 1 }, labelFormat: '{value}%' };
    }
    BarChartPage.prototype.onchartload = function (sender) {
        if (!this.plt.is('core') && sender) {
            var model = sender.model, seriesLength = model.series.length;
            model.title.enableTrim = true;
            model.elementSpacing = 5;
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
    };
    BarChartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"D:\Work\SVN\17.2.0.1\JS\ionic\src\pages\chart\bar.html"*/'<header-title title="Chart  /  Bar"></header-title>\n\n<ion-content>\n\n    <ej-chart id="bar_Ionic" style="display:block;" [title]="title" [legend]="legend" [isResponsive]="true" [primaryXAxis]="primaryXAxis" [primaryYAxis]="primaryYAxis" [commonSeriesOptions]="commonSeriesOptions" (load)="onchartload($event)">\n\n        <e-seriescollection>\n\n            <e-series name="India" [dataSource]="UnemploymentList" xName="xName" yName="yName"></e-series>\n\n            <e-series name="US" [dataSource]="UnemploymentList" xName="xName" yName="yName1"></e-series>\n\n        </e-seriescollection>\n\n    </ej-chart>\n\n</ion-content>'/*ion-inline-end:"D:\Work\SVN\17.2.0.1\JS\ionic\src\pages\chart\bar.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */]])
    ], BarChartPage);
    return BarChartPage;
}());

//# sourceMappingURL=bar.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DoughnutChartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DoughnutChartPage = /** @class */ (function () {
    function DoughnutChartPage(plt) {
        this.plt = plt;
        this.points = [{ x: 'Labour', y: 28 }, { x: 'Legal', y: 10 },
            { x: 'Production', y: 20 }, { x: 'License', y: 15 },
            { x: 'Facilities', y: 23 }, { x: 'Taxes', y: 17 },
            { x: 'Insurance', y: 12 }];
        this.commonSeriesOptions = { type: 'doughnut', enableSmartLabels: false, labelPosition: 'inside', marker: { dataLabel: { visible: true, font: { color: 'white', size: '30px', fontWeight: 'lighter' } }, }, explode: true };
        this.title = { text: 'Project Cost Breakdown' };
        this.legend = { visible: true };
    }
    DoughnutChartPage.prototype.onchartload = function (sender) {
        if (!this.plt.is('core') && sender) {
            var model = sender.model, seriesLength = model.series.length;
            model.title.enableTrim = true;
            model.elementSpacing = 5;
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
    };
    DoughnutChartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"D:\Work\SVN\17.2.0.1\JS\ionic\src\pages\chart\doughnut.html"*/'<header-title title="Chart  /  Doughnut"></header-title>\n\n<ion-content>\n\n    <ej-chart  id="dougnut_Ionic"  style="display:block;" [title]="title" [legend]="legend" [isResponsive]="true" [commonSeriesOptions]="commonSeriesOptions" (load)="onchartload($event)">\n\n        <e-seriescollection>\n\n            <e-series name="India" [dataSource]="points" xName="x" yName="y"></e-series>\n\n        </e-seriescollection>\n\n    </ej-chart>\n\n</ion-content>'/*ion-inline-end:"D:\Work\SVN\17.2.0.1\JS\ionic\src\pages\chart\doughnut.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */]])
    ], DoughnutChartPage);
    return DoughnutChartPage;
}());

//# sourceMappingURL=doughnut.js.map

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CircularDefaultPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CircularDefaultPage = /** @class */ (function () {
    function CircularDefaultPage() {
        this.scales = [{
                showRanges: true,
                startAngle: 122, sweepAngle: 296, radius: 130, showScaleBar: true, size: 1, maximum: 120, majorIntervalValue: 20, minorIntervalValue: 10,
                border: {
                    width: 0.5,
                },
                pointers: [{
                        value: 80,
                        showBackNeedle: true,
                        backNeedleLength: 20,
                        length: 95,
                        width: 7,
                        pointerCap: { radius: 12 }
                    }],
                ticks: [{
                        type: "major",
                        distanceFromScale: 2,
                        height: 16,
                        width: 1, color: "#8c8c8c"
                    }, { type: "minor", height: 8, width: 1, distanceFromScale: 2, color: "#8c8c8c" }],
                labels: [{
                        color: "#8c8c8c"
                    }],
                ranges: [{
                        distanceFromScale: -30,
                        startValue: 0,
                        endValue: 70
                    }, {
                        distanceFromScale: -30,
                        startValue: 70,
                        endValue: 110,
                        backgroundColor: "#fc0606",
                        border: { color: "#fc0606" }
                    },
                    {
                        distanceFromScale: -30,
                        startValue: 110,
                        endValue: 120,
                        backgroundColor: "#f5b43f",
                        border: { color: "#f5b43f" }
                    }]
            }];
    }
    CircularDefaultPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"D:\Work\SVN\17.2.0.1\JS\ionic\src\pages\circulargauge\default.html"*/'<header-title title="Circular Gauge"></header-title>\n\n<ion-content>\n\n    <ej-circulargauge style="display:block;padding-top:30px" align="center" backgroundColor="transparent" [isResponsive]="true" [value]="80" width="300" [readOnly]="false" [enableAnimation]="false" [scales]="scales">\n\n    </ej-circulargauge>\n\n</ion-content>'/*ion-inline-end:"D:\Work\SVN\17.2.0.1\JS\ionic\src\pages\circulargauge\default.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], CircularDefaultPage);
    return CircularDefaultPage;
}());

//# sourceMappingURL=default.js.map

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CircularPointerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CircularPointerPage = /** @class */ (function () {
    function CircularPointerPage() {
        this.scales = [{
                showRanges: true, showTicks: false, showIndicators: true, startAngle: 120, sweepAngle: 300, radius: 80, size: 1,
                showScaleBar: false, minimum: 0, maximum: 100, majorIntervalValue: 10, minorIntervalValue: 10,
                border: {
                    width: 0.5,
                },
                customLabels: [{
                        value: "SPORTS", position: { x: 160, y: 145 }, color: "#333333", font: { fontFamily: "Segoe UI", fontStyle: "Bold", size: "16px" }
                    }, {
                        value: "Fan Ratio", position: { x: 160, y: 165 }, color: "#333333", font: { fontFamily: "Segoe UI", size: "14px" }
                    }, {
                        value: "(in million)", position: { x: 160, y: 180 }, color: "#333333", font: { fontFamily: "Segoe UI", size: "10px" }
                    }],
                labels: [{
                        color: "transparent"
                    }],
                ranges: [{
                        distanceFromScale: -36, size: 15, startValue: 0, endValue: 80, backgroundColor: "#bc4b4b", border: { color: "#bc4b4b", width: 2 }
                    }, {
                        distanceFromScale: -66, size: 15, startValue: 0, endValue: 70, backgroundColor: "#21a56f", border: { color: "#21a56f", width: 2 }
                    }, {
                        distanceFromScale: -95, size: 15, startValue: 0, endValue: 90, backgroundColor: "#2bafbc", border: { color: "#2bafbc", width: 2 }
                    }],
                pointers: [{
                        type: "marker", markerType: "image", value: 80, distanceFromScale: 4, placement: "far", length: 18, width: 18, backgroundColor: "transparent", border: { width: 0, color: "transparent" }, imageUrl: "assets/img/gauge/golfball.png",
                    }, {
                        type: "marker", markerType: "image", value: 70, distanceFromScale: 34, placement: "far", length: 18, width: 18, backgroundColor: "transparent", border: { width: 0, color: "transparent" }, imageUrl: "assets/img/gauge/basketball.png",
                    }, {
                        type: "marker", markerType: "image", value: 90, distanceFromScale: 59, placement: "far", length: 18, width: 18, backgroundColor: "transparent", border: { width: 0, color: "transparent" }, imageUrl: "assets/img/gauge/football.png",
                    }],
                indicators: [{
                        height: 10, width: 10, type: "text", textLocation: { x: 0, y: 0 }, stateRanges: [{ startValue: 0, endValue: 100, text: "", textColor: "#8c8c8c", font: { size: "12px" } }]
                    }, {
                        height: 10, width: 10, type: "text", textLocation: { x: 0, y: 0 }, stateRanges: [{ startValue: 0, endValue: 100, text: "", textColor: "#8c8c8c", font: { size: "12px" } }]
                    }, {
                        height: 10, width: 10, type: "text", textLocation: { x: 0, y: 0 }, stateRanges: [{ startValue: 0, endValue: 100, text: "", textColor: "#8c8c8c", font: { size: "12px" } }]
                    }]
            }];
    }
    CircularPointerPage.prototype.drawLabels = function (args) {
        if (args.pointerValue != 100 && args.pointerValue != 0)
            args.style.textValue = "";
    };
    CircularPointerPage.prototype.drawpointers = function (args) {
        var i = args.pointer.index;
        args.model.scales[0].indicators[i].stateRanges[0].text = args.pointer.pointerValue.toString();
        args.model.scales[0].indicators[i].position.x = args.position.startX + 8;
        args.model.scales[0].indicators[i].position.y = args.position.startY + 25;
    };
    CircularPointerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"D:\Work\SVN\17.2.0.1\JS\ionic\src\pages\circulargauge\pointer.html"*/'<header-title title="Circular Gauge  /  Pointer"></header-title>\n\n<ion-content>\n\n    <div style="padding-top:30px">\n\n        <ej-circulargauge align="center" style="display:block;" backgroundColor="#e0e0e0" [enableAnimation]="false" [isResponsive]="true" [readOnly]="true" width="320" height="320" radius="40" (drawLabels)="drawLabels($event)" (drawPointers)="drawpointers($event)" [scales]="scales">\n\n        </ej-circulargauge>\n\n    </div>\n\n</ion-content>'/*ion-inline-end:"D:\Work\SVN\17.2.0.1\JS\ionic\src\pages\circulargauge\pointer.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], CircularPointerPage);
    return CircularPointerPage;
}());

//# sourceMappingURL=pointer.js.map

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LinearDefaultPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LinearDefaultPage = /** @class */ (function () {
    function LinearDefaultPage() {
        this.scale = [{
                width: 4, border: { color: "transparent", width: 0 }, showRanges: true, length: 310,
                position: { x: 52, y: 50 },
                markerPointers: [{
                        value: 50, length: 10, width: 10, backgroundColor: "#4D4D4D", border: { color: "#4D4D4D" }
                    }],
                barPointers: [{
                        value: 50, width: 0, distanceFromScale: 8, backgroundColor: "#6FAAB0"
                    }], labels: [{ font: { size: "11px", fontFamily: "Segoe UI", fontStyle: "bold" }, distanceFromScale: { x: -13 } }],
                ticks: [{ type: "majorinterval", width: 1, color: "#8c8c8c" }],
                ranges: [{
                        endValue: 50,
                        startValue: 0,
                        backgroundColor: "#F6B53F",
                        border: { color: "#F6B53F" }, startWidth: 4, endWidth: 4
                    }, {
                        endValue: 120,
                        startValue: 50,
                        backgroundColor: "#E94649",
                        border: { color: "#E94649" }, startWidth: 4, endWidth: 4
                    }]
            }];
    }
    LinearDefaultPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"D:\Work\SVN\17.2.0.1\JS\ionic\src\pages\lineargauge\default.html"*/'<header-title title="Linear Gauge"></header-title>\n\n<ion-content>\n\n    <div class="cols-sample-area" align="center">\n\n        <ej-lineargauge [value]="50" [scales]="scale" [enableAnimation]="false" [readOnly]="false" [maximum]="120" labelColor="#8c8c8c">\n\n        </ej-lineargauge>\n\n    </div>\n\n</ion-content>'/*ion-inline-end:"D:\Work\SVN\17.2.0.1\JS\ionic\src\pages\lineargauge\default.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], LinearDefaultPage);
    return LinearDefaultPage;
}());

//# sourceMappingURL=default.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DigitalDefaultPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DigitalDefaultPage = /** @class */ (function () {
    function DigitalDefaultPage() {
        this.gaugeItem = [{
                segmentSettings: {
                    width: 1,
                    spacing: 0,
                    color: "#8c8c8c"
                },
                characterSettings: {
                    opacity: 0.8,
                },
                value: "syncfusion",
                position: { x: 5, y: 5 }
            }];
    }
    DigitalDefaultPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"D:\Work\SVN\17.2.0.1\JS\ionic\src\pages\digitalgauge\default.html"*/'<header-title title="Digital Gauge"></header-title>\n\n<ion-content>\n\n    <div class="cols-sample-area">\n\n        <ej-digitalgauge style="display:block;" align="center" [isResponsive]="false" height="200" [items]="gaugeItem">\n\n        </ej-digitalgauge>\n\n    </div>\n\n</ion-content>'/*ion-inline-end:"D:\Work\SVN\17.2.0.1\JS\ionic\src\pages\digitalgauge\default.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], DigitalDefaultPage);
    return DigitalDefaultPage;
}());

//# sourceMappingURL=default.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RangeDefaultPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RangeDefaultPage = /** @class */ (function () {
    function RangeDefaultPage() {
        this.chartSize = {
            height: "450"
        };
        this.rntooltip = {
            labelFormat: "MM/dd/yyyy",
            tooltipDisplayMode: "ondemand",
            visible: true
        };
        this.openData = GetData().Open;
        this.closeData = GetData().Close;
        this.rangeData = this.openData;
        this.crosshair = {
            visible: true,
            type: 'trackball',
            marker: {
                shape: 'circle',
                size: {
                    height: 9, width: 9
                },
                visible: true,
                border: { width: 1 }
            },
            line: {
                color: 'transparent'
            }
        };
        this.commonSeries = {
            type: 'line',
            enableAnimation: true,
            style: { borderWidth: 2 },
            tooltip: {
                format: "#point.x#  : ej.format(#point.y#,n2)"
            },
        };
        this.primaryX = {
            majorGridLines: { visible: false },
            valueType: 'datetime',
            labelFormat: "MMM dd",
            zoomPosition: 0.16483516483516483,
            zoomFactor: 0.7115384615384616
        };
        this.primaryY = { labelFormat: '${value}', range: { min: 60, max: 160, interval: 20 }, tickLinesPosition: 'inside' };
    }
    RangeDefaultPage.prototype.onchartload = function (sender) {
        if (!ej.util.isNullOrUndefined(window.orientation) && sender) {
            var model = sender.model, seriesLength = model.series.length;
            model.title.enableTrim = true;
            model.elementSpacing = 5;
            model.legend.visible = false;
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
    };
    RangeDefaultPage.prototype.onchartloaded = function (sender) {
        var chartobj = jQuery("#defaultChart").data("ejChart");
        if (chartobj != null) {
            chartobj.model.primaryXAxis.zoomPosition = sender.zoomPosition;
            chartobj.model.primaryXAxis.zoomFactor = sender.zoomFactor;
            chartobj.redraw();
        }
    };
    RangeDefaultPage.prototype.onrnload = function (sender) {
        sender.model.series = [{
                name: 'Product A',
                type: 'line',
                enableAnimation: false,
                dataSource: this.rangeData,
                xName: "XValue",
                yName: "YValue",
                border: {
                    color: "transparent",
                    width: "2"
                },
                opacity: 1
            }];
    };
    RangeDefaultPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"D:\Work\SVN\17.2.0.1\JS\ionic\src\pages\rangenavigator\default.html"*/'<header-title title="Range Navigator"></header-title>\n\n<ion-content padding>\n\n    <ej-rangenavigator id="defaultrange" style="display:block;" align="center" [tooltipSettings]="rntooltip" enableDefferedUpdate="true" padding="15" (rangeChanged)="onchartloaded($event)" (load)="onrnload($event)" [dataSource]="rangeData" xName="XValue" yName="YValue" [allowSnapping]="true" selectedRangeSettings.start="2010/5/1" selectedRangeSettings.end="2011/10/1" [isResponsive]="true" sizeSettings.height="120">\n\n    </ej-rangenavigator>\n\n    <ej-chart id="defaultChart" style="display:block;" [crosshair]="crosshair" [isResponsive]="true" [primaryXAxis]="primaryX" [primaryYAxis]="primaryY" [commonSeriesOptions]="commonSeries" (load)="onchartload($event)">\n\n        <e-seriescollection>\n\n            <e-series name="Product X" [dataSource]="openData" xName="XValue" yName="YValue"></e-series>\n\n            <e-series name="Product Y" [dataSource]="closeData" xName="XValue" yName="YValue"></e-series>\n\n        </e-seriescollection>\n\n    </ej-chart>\n\n</ion-content>'/*ion-inline-end:"D:\Work\SVN\17.2.0.1\JS\ionic\src\pages\rangenavigator\default.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], RangeDefaultPage);
    return RangeDefaultPage;
}());

function GetData() {
    var series1 = [];
    var series2 = [];
    var value = 100;
    var value1 = 120;
    for (var i = 1; i < 730; i++) {
        if (Math.random() > .5) {
            value += Math.random();
            value1 += Math.random();
        }
        else {
            value -= Math.random();
            value1 -= Math.random();
        }
        var point1 = { XValue: new Date(2010, 0, i), YValue: value };
        var point2 = { XValue: new Date(2010, 0, i), YValue: value1 };
        series1.push(point1);
        series2.push(point2);
    }
    var data = { Open: series1, Close: series2 };
    return data;
}
//# sourceMappingURL=default.js.map

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RangeNumericPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RangeNumericPage = /** @class */ (function () {
    function RangeNumericPage() {
        this.chartSize = {
            height: "450"
        };
        this.rntooltip = {
            tooltipDisplayMode: "ondemand",
            visible: true
        };
        this.openData = GetData().Open;
        this.closeData = GetData().Close;
        this.rangeData = this.openData;
        this.crosshair = {
            visible: true,
            type: 'trackball',
            marker: {
                shape: 'circle',
                size: {
                    height: 9, width: 9
                },
                visible: true,
                border: { width: 1 }
            },
            line: {
                color: 'transparent'
            }
        };
        this.commonSeries = { type: 'line',
            enableAnimation: true,
            style: { borderWidth: 2 },
            tooltip: {
                format: "#point.x#  : ej.format(#point.y#,n2)"
            },
        };
        this.primaryX = { majorGridLines: { visible: false },
            rangePadding: "none",
            zoomPosition: 0.285714285714,
            zoomFactor: 0.4285714285714
        };
        this.primaryY = { labelFormat: '${value}',
            range: { min: 60, max: 160, interval: 20 } };
    }
    RangeNumericPage.prototype.onchartload = function (sender) {
        if (!ej.util.isNullOrUndefined(window.orientation) && sender) {
            var model = sender.model, seriesLength = model.series.length;
            model.title.enableTrim = true;
            model.elementSpacing = 5;
            model.legend.visible = false;
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
    };
    RangeNumericPage.prototype.onchartloaded = function (sender) {
        var chartobj = jQuery("#numericChart").data("ejChart");
        if (chartobj != null) {
            chartobj.model.primaryXAxis.zoomPosition = sender.zoomPosition;
            chartobj.model.primaryXAxis.zoomFactor = sender.zoomFactor;
            chartobj.redraw();
        }
    };
    RangeNumericPage.prototype.onrnload = function (sender) {
        sender.model.series = [{
                name: 'Product A',
                type: 'line',
                enableAnimation: false,
                dataSource: this.rangeData,
                xName: "XValue",
                yName: "YValue",
                border: {
                    color: "transparent",
                    width: "2"
                },
                opacity: 1
            }];
    };
    RangeNumericPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"D:\Work\SVN\17.2.0.1\JS\ionic\src\pages\rangenavigator\numeric.html"*/'<header-title title="Range Navigator  /  Numeric"></header-title>\n\n<ion-content padding>\n\n    <ej-rangenavigator id="numericrange" style="display:block;" align="center" [tooltipSettings]="rntooltip" enableDefferedUpdate="true" padding="15" (load)="onrnload($event)" (rangeChanged)="onchartloaded($event)" [dataSource]="rangeData" xName="XValue" yName="YValue" [allowSnapping]="true" selectedRangeSettings.start="100" padding="15" selectedRangeSettings.end="250" valueType="numeric" [isResponsive]="true" sizeSettings.height="120">\n\n    </ej-rangenavigator>\n\n    <ej-chart id="numericChart" style="display:block;" [crosshair]="crosshair" [isResponsive]="true" [primaryXAxis]="primaryX" [primaryYAxis]="primaryY" [commonSeriesOptions]="commonSeries" (load)="onchartload($event)">\n\n        <e-seriescollection>\n\n            <e-series name="Product X" [dataSource]="openData" xName="XValue" yName="YValue"></e-series>\n\n            <e-series name="Product Y" [dataSource]="closeData" xName="XValue" yName="YValue"></e-series>\n\n        </e-seriescollection>\n\n    </ej-chart>\n\n</ion-content>'/*ion-inline-end:"D:\Work\SVN\17.2.0.1\JS\ionic\src\pages\rangenavigator\numeric.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], RangeNumericPage);
    return RangeNumericPage;
}());

function GetData() {
    var series1 = [];
    var series2 = [];
    var value = 100;
    var value1 = 120;
    for (var i = 0; i < 351; i++) {
        if (Math.random() > .5) {
            value += Math.random();
            value1 += Math.random();
        }
        else {
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
//# sourceMappingURL=numeric.js.map

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SparklineDefaultPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SparklineDefaultPage = /** @class */ (function () {
    function SparklineDefaultPage() {
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
        this.pdata2 = [8, 9, 6,];
        this.pdata3 = [2, 3, 5];
        this.pdata4 = [10, 12, 11];
        this.ptype = "pie";
        this.pstrokeWidth = 0;
        this.pheight = 40;
        this.pwidth = 40;
        this.tool = {
            visible: false,
            font: '10px'
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
    SparklineDefaultPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"D:\Work\SVN\17.2.0.1\JS\ionic\src\pages\sparkline\default.html"*/'<header-title title="SparkLine"></header-title>\n\n<ion-content padding>\n\n    <div style="padding-top:30px;">\n\n        <table style="width:100%;">\n\n            <tr>\n\n                <td align="center" style="vertical-align:middle;font-style:italic !important">Mean Working Hours for year</td>\n\n                <td>\n\n                    <ej-sparkline id="line" [dataSource]="ldata" [tooltip]="tool" [size.height]="lheight" [size.width]="lwidth"></ej-sparkline>\n\n                </td>\n\n            </tr>\n\n            <tr>\n\n                <td align="center" style="vertical-align:middle;font-style:italic !important">Revenue Status</td>\n\n                <td>\n\n                    <ej-sparkline id="column" [type]="ctype" [tooltip]="tool" [dataSource]="cdata" [negativePointColor]="negativeColor" [highPointColor]="highColor" [size.height]="cheight" [size.width]="cwidth"></ej-sparkline>\n\n                </td>\n\n            </tr>\n\n            <tr>\n\n                <td align="center" style="vertical-align:middle;font-style:italic !important">Project Status Tracing</td>\n\n                <td>\n\n                    <ej-sparkline id="area" [type]="atype" [tooltip]="tool" [markerSettings.visible]=true [dataSource]="adata" [highPointColor]="highColor" [lowPointColor]="orange" [size.height]="cheight" [size.width]="cwidth"></ej-sparkline>\n\n                </td>\n\n            </tr>\n\n            <tr>\n\n                <td align="center" style="vertical-align:middle;font-style:italic !important">Profit Comparison for each months</td>\n\n                <td>\n\n                    <ej-sparkline id="winloss" [type]="wtype" [dataSource]="wdata" [size.height]="cheight" [size.width]="cwidth"></ej-sparkline>\n\n                </td>\n\n            </tr>\n\n            <tr>\n\n                <td align="center" style="vertical-align:middle;font-style:italic !important">Expenditure for a year</td>\n\n                <td>\n\n                    <table>\n\n                        <tr>\n\n                            <td><ej-sparkline id="pie1" [type]="ptype" [tooltip]="tool" [dataSource]="pdata1" [size.height]="pheight" [size.width]="pwidth"></ej-sparkline></td>\n\n                            <td><ej-sparkline id="pie2" [type]="ptype" [tooltip]="tool" [dataSource]="pdata2" [size.height]="pheight" [size.width]="pwidth"></ej-sparkline></td>\n\n                            <td><ej-sparkline id="pie3" [type]="ptype" [tooltip]="tool" [dataSource]="pdata3" [size.height]="pheight" [size.width]="pwidth"></ej-sparkline></td>\n\n                            <td><ej-sparkline id="pie4" [type]="ptype" [tooltip]="tool" [dataSource]="pdata4" [size.height]="pheight" [size.width]="pwidth"></ej-sparkline></td>\n\n                        </tr>\n\n                        <tr>\n\n                            <td align="center">Q1</td>\n\n                            <td align="center">Q2</td>\n\n                            <td align="center">Q3</td>\n\n                            <td align="center">Q4</td>\n\n                        </tr>\n\n                    </table>\n\n                </td>\n\n            </tr>\n\n        </table>\n\n    </div>\n\n</ion-content>'/*ion-inline-end:"D:\Work\SVN\17.2.0.1\JS\ionic\src\pages\sparkline\default.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], SparklineDefaultPage);
    return SparklineDefaultPage;
}());

//# sourceMappingURL=default.js.map

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BulletgraphDefaultPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BulletgraphDefaultPage = /** @class */ (function () {
    function BulletgraphDefaultPage() {
        this.enableTabScroll = true;
        this.qualitiveRange3 = [{
                rangeEnd: -4.3
            }, {
                rangeEnd: 4.3
            }, {
                rangeEnd: 10
            }];
        this.qualitiveRange2 = [{
                rangeEnd: -4, rangeStroke: "#61a301"
            }, {
                rangeEnd: 3, rangeStroke: "#fcda21"
            }, {
                rangeEnd: 10, rangeStroke: "#d61e3f"
            }];
        this.qualitiveRange4 = [{
                rangeEnd: 4.3, rangeStroke: "#61a301"
            }, {
                rangeEnd: 7.3, rangeStroke: "#fcda21"
            }, {
                rangeEnd: 10, rangeStroke: "#d61e3f"
            }];
        this.caption = {
            location: { x: 17, y: 20 }, text: "Revenue YTD",
            subTitle: {
                text: "$ in Thousands", location: { x: 10, y: 35 }
            }
        };
        this.quantitativescale = {
            location: { x: 110, y: 10 },
            featureMeasures: [{ value: 8, comparativeMeasureValue: 6.7 }]
        };
        this.caption2 = {
            labelSettings: {
                offset: 14, size: 10, labelSuffix: ' %'
            },
            location: { x: 60, y: 25 }, text: "Profit"
        };
        this.quantitativescale2 = {
            labelSettings: {
                offset: 14, size: 10, labelSuffix: ' %'
            },
            location: { x: 110, y: 10 },
            minimum: -10,
            maximum: 10,
            interval: 2,
            featureMeasures: [{ value: 8, comparativeMeasureValue: 6.7 }]
        };
        this.caption3 = {
            labelSettings: {
                offset: 14, size: 10, labelSuffix: ' %',
            },
            location: { x: 38, y: 25 }, text: "Expenses"
        };
        this.quantitativescale3 = {
            labelSettings: {
                offset: 14, size: 10, labelSuffix: ' %'
            },
            location: { x: 105, y: 10 },
            minimum: -10,
            maximum: 10,
            interval: 2,
            featureMeasures: [{ value: -2, comparativeMeasureValue: -2 }]
        };
        this.caption4 = {
            location: { x: 17, y: 20 }, text: "Revenue YTD",
            subTitle: {
                textAngle: 0,
                text: "$ in Thousands", location: { x: 10, y: 35 }
            }
        };
        this.quantitativescale4 = {
            location: { x: 105, y: 10 },
            minimum: 0,
            maximum: 10,
            labelSettings: {
                labelPrefix: '$ ', labelSuffix: 'K'
            },
            featureMeasures: [{ value: 8, comparativeMeasureValue: 6.7 }]
        };
    }
    BulletgraphDefaultPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"D:\Work\SVN\17.2.0.1\JS\ionic\src\pages\bulletgraph\default.html"*/'<header-title title="Bullet Graph"></header-title>\n\n<ion-content padding>\n\n    <div class="cols-sample-area" align="center">\n\n        <ej-bulletgraph style="display:block;" [isResponsive]="true" [captionSettings]="caption" [quantitativeScaleSettings]="quantitativescale"></ej-bulletgraph>\n\n    </div>\n\n    <div class="cols-sample-area" align="center">\n\n        <ej-bulletgraph style="display:block;" [isResponsive]="true" [qualitativeRanges]="qualitiveRange2" [captionSettings]="caption2" [quantitativeScaleSettings]="quantitativescale2"></ej-bulletgraph>\n\n    </div>\n\n    <div class="cols-sample-area" align="center">\n\n        <ej-bulletgraph style="display:block;" [isResponsive]="true" [qualitativeRanges]="qualitiveRange3" [captionSettings]="caption3" [quantitativeScaleSettings]="quantitativescale3"></ej-bulletgraph>\n\n    </div>\n\n    <div class="cols-sample-area" align="center">\n\n        <ej-bulletgraph style="display:block;" [qualitativeRanges]="qualitiveRange4" [isResponsive]="true" [captionSettings]="caption4" [quantitativeScaleSettings]="quantitativescale4"></ej-bulletgraph>\n\n    </div>\n\n</ion-content>'/*ion-inline-end:"D:\Work\SVN\17.2.0.1\JS\ionic\src\pages\bulletgraph\default.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], BulletgraphDefaultPage);
    return BulletgraphDefaultPage;
}());

//# sourceMappingURL=default.js.map

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BulletgraphLocalDataPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BulletgraphLocalDataPage = /** @class */ (function () {
    function BulletgraphLocalDataPage() {
        this.enableTabScroll = true;
        this.caption = {
            textAngle: -90,
            location: { x: 40, y: 210 }, text: "Revenue YTD",
            subTitle: {
                textAngle: -90,
                text: "$ in Thousands", location: { x: 55, y: 210 },
            }
        };
        this.range = 320;
        this.quantitativescale = {
            location: { x: 110, y: 25 },
            minimum: 0,
            maximum: 10,
            interval: 1,
            featureMeasures: [{
                    value: 9.5, comparativeMeasureValue: 7.5,
                    category: 2001
                },
                {
                    value: 9.5, comparativeMeasureValue: 5,
                    category: 2002
                },
                {
                    value: 9.5, comparativeMeasureValue: 6,
                    category: 2003
                },
                {
                    value: 9.5, comparativeMeasureValue: 8,
                    category: 2004
                },
                {
                    value: 9.5, comparativeMeasureValue: 5,
                    category: 2005
                },
                {
                    value: 9.5, comparativeMeasureValue: 6,
                    category: 2006
                }]
        };
    }
    BulletgraphLocalDataPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"D:\Work\SVN\17.2.0.1\JS\ionic\src\pages\bulletgraph\local.html"*/'<header-title title="Bullet Graph  /  Local Data"></header-title>\n\n<ion-content padding>\n\n    <ej-bulletgraph style="display:block" align="center" [height]="400" [qualitativeRangeSize]="range" [isResponsive]="false" [captionSettings]="caption" [quantitativeScaleSettings]="quantitativescale">         \n\n    </ej-bulletgraph>\n\n</ion-content>'/*ion-inline-end:"D:\Work\SVN\17.2.0.1\JS\ionic\src\pages\bulletgraph\local.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], BulletgraphLocalDataPage);
    return BulletgraphLocalDataPage;
}());

//# sourceMappingURL=local.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScheduleDefaultPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ScheduleDefaultPage = /** @class */ (function () {
    function ScheduleDefaultPage() {
        this.currentdate = new Date(2017, 5, 5);
        this.scheduleData = [
            {
                Id: 100,
                Subject: "#SG 208 Greenville - Washington",
                StartTime: new Date(2017, 5, 5, 12, 0),
                EndTime: new Date(2017, 5, 5, 14, 30),
                Description: "",
                AllDay: false,
                Recurrence: true,
                RecurrenceRule: "FREQ=DAILY;INTERVAL=2;COUNT=10",
                OwnerId: 3
            }, {
                Id: 101,
                Subject: "#IT 188 Washington - Arizona",
                StartTime: new Date(2017, 5, 5, 4, 0),
                EndTime: new Date(2017, 5, 5, 5, 0),
                Description: "",
                AllDay: false,
                Recurrence: false,
                OwnerId: 3
            }, {
                Id: 102,
                Subject: "#SG 300 Chicago - Nevada",
                StartTime: new Date(2017, 5, 5, 11, 30),
                EndTime: new Date(2017, 5, 5, 13),
                Description: "",
                AllDay: false,
                Recurrence: true,
                RecurrenceRule: "FREQ=DAILY;INTERVAL=2;COUNT=10",
                OwnerId: 1
            }, {
                Id: 103,
                Subject: "#IT 306 Washington - Newport",
                StartTime: new Date(2017, 5, 5, 4, 0),
                EndTime: new Date(2017, 5, 5, 5, 0),
                Description: "",
                AllDay: false,
                Recurrence: true,
                RecurrenceRule: "FREQ=DAILY;INTERVAL=2;COUNT=10",
                OwnerId: 5
            }, {
                Id: 104,
                Subject: "#AI 520 Washington - Chicago",
                StartTime: new Date(2017, 5, 5, 12, 30),
                EndTime: new Date(2017, 5, 5, 13, 30),
                Description: "",
                AllDay: false,
                Recurrence: false,
                OwnerId: 5
            }, {
                Id: 105,
                Subject: "#SG 345 Renfrewshire - Lancashire",
                StartTime: new Date(2017, 5, 5, 6, 30),
                EndTime: new Date(2017, 5, 5, 7, 30),
                Description: "",
                AllDay: false,
                Recurrence: false,
                OwnerId: 3
            }
        ];
    }
    ScheduleDefaultPage.prototype.onCustomization = function (args) {
        if (args.model.currentView() == "month" && ((args.type == "create") || (args.type == "actionComplete" && (args.requestType == "viewNavigate" || args.requestType == "dateNavigate")))) {
            var elelist = [].slice.call(document.querySelectorAll('.e-headerdaydisplay'));
            for (var _i = 0, elelist_1 = elelist; _i < elelist_1.length; _i++) {
                var ele = elelist_1[_i];
                ele.innerText = ele.innerText.substr(0, 3);
            }
        }
    };
    ScheduleDefaultPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"D:\Work\SVN\17.2.0.1\JS\ionic\src\pages\schedule\default.html"*/'<header-title title="Schedule"></header-title>\n\n<ion-content>\n\n    <ej-schedule width="100%"\n\n                 height="530px"\n\n                 currentView="week"\n\n                 isResponsive="true"\n\n                 (create)="onCustomization($event)"\n\n                 (actionComplete)="onCustomization($event)" \n\n                 [currentDate]=currentdate \n\n                 [appointmentSettings.dataSource]=scheduleData \n\n                 appointmentSettings.id="Id"\n\n                 appointmentSettings.subject="Subject" \n\n                 appointmentSettings.startTime="StartTime" \n\n                 appointmentSettings.endTime="EndTime"\n\n                 appointmentSettings.allDay="AllDay"\n\n                 appointmentSettings.recurrence="Recurrence"\n\n                 appointmentSettings.recurrenceRule="RecurrenceRule" >\n\n    </ej-schedule>\n\n</ion-content>'/*ion-inline-end:"D:\Work\SVN\17.2.0.1\JS\ionic\src\pages\schedule\default.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], ScheduleDefaultPage);
    return ScheduleDefaultPage;
}());

//# sourceMappingURL=default.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScheduleBlockIntervalsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ScheduleBlockIntervalsPage = /** @class */ (function () {
    function ScheduleBlockIntervalsPage() {
        this.allowMultiple = false;
        this.blockenable = true;
        this.currentdate = new Date(2017, 5, 5);
        this.group = {
            resources: ['Owners']
        };
        this.resourceData = {
            dataSource: [
                { text: "Airline 1", id: 1, groupId: 1, color: "#f8a398" },
                { text: "Airline 2", id: 3, groupId: 2, color: "#56ca85" },
                { text: "Airline 3", id: 5, groupId: 1, color: "#51a0ed" }
            ],
            text: 'text',
            id: 'id',
            groupId: 'groupId',
            color: 'color'
        };
        this.blockData = [
            {
                Id: 1,
                Subject: "MAINTENANCE",
                StartTime: new Date(2017, 5, 5, 8),
                EndTime: new Date(2017, 5, 5, 10),
                ResourceId: 3,
                BlockAppointment: true
            }, {
                Id: 2,
                Subject: "SERVICE",
                StartTime: new Date(2017, 5, 5, 9),
                EndTime: new Date(2017, 5, 5, 11),
                ResourceId: 1,
                BlockAppointment: true
            }, {
                Id: 3,
                Subject: "SERVICE",
                StartTime: new Date(2017, 5, 6),
                EndTime: new Date(2017, 5, 6),
                ResourceId: 1,
                BlockAppointment: true,
                FullDay: true
            }, {
                Id: 4,
                Subject: "BAD MONSOON",
                StartTime: new Date(2017, 5, 5, 15, 30),
                EndTime: new Date(2017, 5, 5, 17),
                ResourceId: 1,
                BlockAppointment: true
            }, {
                Id: 5,
                Subject: "BAD MONSOON",
                StartTime: new Date(2017, 5, 5, 15, 30),
                EndTime: new Date(2017, 5, 5, 17),
                ResourceId: 3,
                BlockAppointment: true
            }, {
                Id: 6,
                Subject: "BAD MONSOON",
                StartTime: new Date(2017, 5, 5, 15, 30),
                EndTime: new Date(2017, 5, 5, 17),
                ResourceId: 5,
                BlockAppointment: true
            }
        ];
        this.scheduleData = [
            {
                Id: 100,
                Subject: "#SG 208 Greenville - Washington",
                StartTime: new Date(2017, 5, 5, 12, 0),
                EndTime: new Date(2017, 5, 5, 14, 30),
                Description: "",
                AllDay: false,
                Recurrence: true,
                RecurrenceRule: "FREQ=DAILY;INTERVAL=2;COUNT=10",
                OwnerId: 3
            }, {
                Id: 101,
                Subject: "#IT 188 Washington - Arizona",
                StartTime: new Date(2017, 5, 5, 4, 0),
                EndTime: new Date(2017, 5, 5, 5, 0),
                Description: "",
                AllDay: false,
                Recurrence: false,
                OwnerId: 3
            }, {
                Id: 102,
                Subject: "#SG 300 Chicago - Nevada",
                StartTime: new Date(2017, 5, 5, 11, 30),
                EndTime: new Date(2017, 5, 5, 13),
                Description: "",
                AllDay: false,
                Recurrence: true,
                RecurrenceRule: "FREQ=DAILY;INTERVAL=2;COUNT=10",
                OwnerId: 1
            }, {
                Id: 103,
                Subject: "#IT 306 Washington - Newport",
                StartTime: new Date(2017, 5, 5, 4, 0),
                EndTime: new Date(2017, 5, 5, 5, 0),
                Description: "",
                AllDay: false,
                Recurrence: true,
                RecurrenceRule: "FREQ=DAILY;INTERVAL=2;COUNT=10",
                OwnerId: 5
            }, {
                Id: 104,
                Subject: "#AI 520 Washington - Chicago",
                StartTime: new Date(2017, 5, 5, 12, 30),
                EndTime: new Date(2017, 5, 5, 13, 30),
                Description: "",
                AllDay: false,
                Recurrence: false,
                OwnerId: 5
            }, {
                Id: 105,
                Subject: "#SG 345 Renfrewshire - Lancashire",
                StartTime: new Date(2017, 5, 5, 6, 30),
                EndTime: new Date(2017, 5, 5, 7, 30),
                Description: "",
                AllDay: false,
                Recurrence: false,
                OwnerId: 3
            }
        ];
    }
    ScheduleBlockIntervalsPage.prototype.onCustomization = function (args) {
        if (args.model.currentView() == "month" && ((args.type == "create") || (args.type == "actionComplete" && (args.requestType == "viewNavigate" || args.requestType == "dateNavigate")))) {
            var elelist = [].slice.call(document.querySelectorAll('.e-headerdaydisplay'));
            for (var _i = 0, elelist_1 = elelist; _i < elelist_1.length; _i++) {
                var ele = elelist_1[_i];
                ele.innerText = ele.innerText.substr(0, 3);
            }
        }
    };
    ScheduleBlockIntervalsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"D:\Work\SVN\17.2.0.1\JS\ionic\src\pages\schedule\blockintervals.html"*/'<header-title title="Schedule  /  Block Intervals"></header-title>\n\n<ion-content>\n\n    <ej-schedule width="100%"\n\n                 height="530px"\n\n                 currentView="day"\n\n                 isResponsive="true"\n\n                 [currentDate]=currentdate\n\n                 (create)="onCustomization($event)"\n\n                 (actionComplete)="onCustomization($event)" \n\n                 [blockoutSettings.enable]=blockenable\n\n                 [blockoutSettings.dataSource]=blockData\n\n                 blockoutSettings.id="Id"\n\n                 blockoutSettings.subject="Subject"\n\n                 blockoutSettings.startTime="StartTime"\n\n                 blockoutSettings.endTime="EndTime"\n\n                 blockoutSettings.isBlockAppointment="BlockAppointment"\n\n                 blockoutSettings.resourceId="ResourceId"\n\n                 blockoutSettings.isAllDay="FullDay" \n\n                 [appointmentSettings.dataSource]=scheduleData \n\n                 appointmentSettings.id="Id"\n\n                 appointmentSettings.subject="Subject" \n\n                 appointmentSettings.startTime="StartTime" \n\n                 appointmentSettings.endTime="EndTime"\n\n                 appointmentSettings.allDay="AllDay"\n\n                 appointmentSettings.recurrence="Recurrence"\n\n                 appointmentSettings.recurrenceRule="RecurrenceRule"\n\n                 appointmentSettings.resourceFields="OwnerId"\n\n                 [group]=group >\n\n        <e-resources>\n\n            <e-resource field="OwnerId" title="Owner" name="Owners" [allowMultiple]=allowMultiple [resourceSettings]=resourceData></e-resource>\n\n        </e-resources>\n\n    </ej-schedule>\n\n</ion-content>'/*ion-inline-end:"D:\Work\SVN\17.2.0.1\JS\ionic\src\pages\schedule\blockintervals.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], ScheduleBlockIntervalsPage);
    return ScheduleBlockIntervalsPage;
}());

//# sourceMappingURL=blockintervals.js.map

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScheduleTimelineViewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ScheduleTimelineViewPage = /** @class */ (function () {
    function ScheduleTimelineViewPage() {
        this.currentdate = new Date(2017, 5, 5);
        this.scheduleData = [
            {
                Id: 100,
                Subject: "#SG 208 Greenville - Washington",
                StartTime: new Date(2017, 5, 5, 12, 0),
                EndTime: new Date(2017, 5, 5, 14, 30),
                Description: "",
                AllDay: false,
                Recurrence: true,
                RecurrenceRule: "FREQ=DAILY;INTERVAL=2;COUNT=10",
                OwnerId: 3
            }, {
                Id: 101,
                Subject: "#IT 188 Washington - Arizona",
                StartTime: new Date(2017, 5, 5, 4, 0),
                EndTime: new Date(2017, 5, 5, 5, 0),
                Description: "",
                AllDay: false,
                Recurrence: false,
                OwnerId: 3
            }, {
                Id: 102,
                Subject: "#SG 300 Chicago - Nevada",
                StartTime: new Date(2017, 5, 5, 11, 30),
                EndTime: new Date(2017, 5, 5, 13),
                Description: "",
                AllDay: false,
                Recurrence: true,
                RecurrenceRule: "FREQ=DAILY;INTERVAL=2;COUNT=10",
                OwnerId: 1
            }, {
                Id: 103,
                Subject: "#IT 306 Washington - Newport",
                StartTime: new Date(2017, 5, 5, 4, 0),
                EndTime: new Date(2017, 5, 5, 5, 0),
                Description: "",
                AllDay: false,
                Recurrence: true,
                RecurrenceRule: "FREQ=DAILY;INTERVAL=2;COUNT=10",
                OwnerId: 5
            }, {
                Id: 104,
                Subject: "#AI 520 Washington - Chicago",
                StartTime: new Date(2017, 5, 5, 12, 30),
                EndTime: new Date(2017, 5, 5, 13, 30),
                Description: "",
                AllDay: false,
                Recurrence: false,
                OwnerId: 5
            }, {
                Id: 105,
                Subject: "#SG 345 Renfrewshire - Lancashire",
                StartTime: new Date(2017, 5, 5, 6, 30),
                EndTime: new Date(2017, 5, 5, 7, 30),
                Description: "",
                AllDay: false,
                Recurrence: false,
                OwnerId: 3
            }
        ];
    }
    ScheduleTimelineViewPage.prototype.onCustomization = function (args) {
        if (args.model.currentView() == "month" && ((args.type == "create") || (args.type == "actionComplete" && (args.requestType == "viewNavigate" || args.requestType == "dateNavigate")))) {
            var elelist = [].slice.call(document.querySelectorAll('.e-headerdaydisplay'));
            for (var _i = 0, elelist_1 = elelist; _i < elelist_1.length; _i++) {
                var ele = elelist_1[_i];
                ele.innerText = ele.innerText.substr(0, 3);
            }
        }
    };
    ScheduleTimelineViewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"D:\Work\SVN\17.2.0.1\JS\ionic\src\pages\schedule\horizontal.html"*/'<header-title title="Schedule  /  Timeline View"></header-title>\n\n<ion-content>\n\n    <ej-schedule width="100%"\n\n                 height="530px"\n\n                 isResponsive="true"\n\n                 orientation="horizontal"\n\n                 currentView="week"\n\n                 [currentDate]=currentdate \n\n                 (create)="onCustomization($event)"\n\n                 (actionComplete)="onCustomization($event)" \n\n                 [appointmentSettings.dataSource]=scheduleData \n\n                 appointmentSettings.id="Id"\n\n                 appointmentSettings.subject="Subject" \n\n                 appointmentSettings.startTime="StartTime" \n\n                 appointmentSettings.endTime="EndTime"\n\n                 appointmentSettings.allDay="AllDay"\n\n                 appointmentSettings.recurrence="Recurrence"\n\n                 appointmentSettings.recurrenceRule="RecurrenceRule" >\n\n    </ej-schedule>\n\n</ion-content>'/*ion-inline-end:"D:\Work\SVN\17.2.0.1\JS\ionic\src\pages\schedule\horizontal.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], ScheduleTimelineViewPage);
    return ScheduleTimelineViewPage;
}());

//# sourceMappingURL=horizontal.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScheduleMultipleResourcePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ScheduleMultipleResourcePage = /** @class */ (function () {
    function ScheduleMultipleResourcePage() {
        this.allowMultiple = true;
        this.currentdate = new Date(2017, 5, 5);
        this.scheduleData = [
            {
                Id: 100,
                Subject: "#SG 208 Greenville - Washington",
                StartTime: new Date(2017, 5, 5, 12, 0),
                EndTime: new Date(2017, 5, 5, 14, 30),
                Description: "",
                AllDay: false,
                Recurrence: true,
                RecurrenceRule: "FREQ=DAILY;INTERVAL=2;COUNT=10",
                OwnerId: 3
            }, {
                Id: 101,
                Subject: "#IT 188 Washington - Arizona",
                StartTime: new Date(2017, 5, 5, 4, 0),
                EndTime: new Date(2017, 5, 5, 5, 0),
                Description: "",
                AllDay: false,
                Recurrence: false,
                OwnerId: 3
            }, {
                Id: 102,
                Subject: "#SG 300 Chicago - Nevada",
                StartTime: new Date(2017, 5, 5, 11, 30),
                EndTime: new Date(2017, 5, 5, 13),
                Description: "",
                AllDay: false,
                Recurrence: true,
                RecurrenceRule: "FREQ=DAILY;INTERVAL=2;COUNT=10",
                OwnerId: 1
            }, {
                Id: 103,
                Subject: "#IT 306 Washington - Newport",
                StartTime: new Date(2017, 5, 5, 4, 0),
                EndTime: new Date(2017, 5, 5, 5, 0),
                Description: "",
                AllDay: false,
                Recurrence: true,
                RecurrenceRule: "FREQ=DAILY;INTERVAL=2;COUNT=10",
                OwnerId: 5
            }, {
                Id: 104,
                Subject: "#AI 520 Washington - Chicago",
                StartTime: new Date(2017, 5, 5, 12, 30),
                EndTime: new Date(2017, 5, 5, 13, 30),
                Description: "",
                AllDay: false,
                Recurrence: false,
                OwnerId: 5
            }, {
                Id: 105,
                Subject: "#SG 345 Renfrewshire - Lancashire",
                StartTime: new Date(2017, 5, 5, 6, 30),
                EndTime: new Date(2017, 5, 5, 7, 30),
                Description: "",
                AllDay: false,
                Recurrence: false,
                OwnerId: 3
            }
        ];
        this.group = {
            resources: ['Owners']
        };
        this.resourceData = {
            dataSource: [
                { text: 'Nancy', id: 1, groupId: 1, color: '#ffaa00' },
                { text: 'Steven', id: 3, groupId: 2, color: '#f8a398' },
                { text: 'Michael', id: 5, groupId: 1, color: '#7499e1' }
            ],
            text: 'text',
            id: 'id',
            groupId: 'groupId',
            color: 'color'
        };
    }
    ScheduleMultipleResourcePage.prototype.onCustomization = function (args) {
        if (args.model.currentView() == "month" && ((args.type == "create") || (args.type == "actionComplete" && (args.requestType == "viewNavigate" || args.requestType == "dateNavigate")))) {
            var elelist = [].slice.call(document.querySelectorAll('.e-headerdaydisplay'));
            for (var _i = 0, elelist_1 = elelist; _i < elelist_1.length; _i++) {
                var ele = elelist_1[_i];
                ele.innerText = ele.innerText.substr(0, 3);
            }
        }
    };
    ScheduleMultipleResourcePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"D:\Work\SVN\17.2.0.1\JS\ionic\src\pages\schedule\multipleresource.html"*/'<header-title title="Schedule  /  Multiple Resource"></header-title>\n\n<ion-content>\n\n    <ej-schedule width="100%"\n\n                 height="530px"\n\n                 isResponsive="true"\n\n                 currentView="workweek"\n\n                 [currentDate]=currentdate \n\n                 (create)="onCustomization($event)"\n\n                 (actionComplete)="onCustomization($event)" \n\n                 [appointmentSettings.dataSource]=scheduleData \n\n                 appointmentSettings.id="Id"\n\n                 appointmentSettings.subject="Subject" \n\n                 appointmentSettings.startTime="StartTime" \n\n                 appointmentSettings.endTime="EndTime"\n\n                 appointmentSettings.allDay="AllDay"\n\n                 appointmentSettings.recurrence="Recurrence"\n\n                 appointmentSettings.recurrenceRule="RecurrenceRule"\n\n                 appointmentSettings.resourceFields="OwnerId"\n\n                 [group]=group >\n\n        <e-resources>\n\n            <e-resource field="OwnerId" title="Owner" name="Owners" [allowMultiple]=allowMultiple [resourceSettings]=resourceData></e-resource>\n\n        </e-resources>\n\n    </ej-schedule>\n\n</ion-content>'/*ion-inline-end:"D:\Work\SVN\17.2.0.1\JS\ionic\src\pages\schedule\multipleresource.html"*/,
            selector: 'page-schedule'
        }),
        __metadata("design:paramtypes", [])
    ], ScheduleMultipleResourcePage);
    return ScheduleMultipleResourcePage;
}());

//# sourceMappingURL=multipleresource.js.map

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScheduleTimescalePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ScheduleTimescalePage = /** @class */ (function () {
    function ScheduleTimescalePage() {
        this.majorslot = 60;
        this.minorslotcount = 5;
        this.currentdate = new Date(2017, 5, 5);
        this.scheduleData = [
            {
                Id: 100,
                Subject: "#SG 208 Greenville - Washington",
                StartTime: new Date(2017, 5, 5, 12, 0),
                EndTime: new Date(2017, 5, 5, 14, 30),
                Description: "",
                AllDay: false,
                Recurrence: true,
                RecurrenceRule: "FREQ=DAILY;INTERVAL=2;COUNT=10",
                OwnerId: 3
            }, {
                Id: 101,
                Subject: "#IT 188 Washington - Arizona",
                StartTime: new Date(2017, 5, 5, 4, 0),
                EndTime: new Date(2017, 5, 5, 5, 0),
                Description: "",
                AllDay: false,
                Recurrence: false,
                OwnerId: 3
            }, {
                Id: 102,
                Subject: "#SG 300 Chicago - Nevada",
                StartTime: new Date(2017, 5, 5, 11, 30),
                EndTime: new Date(2017, 5, 5, 13),
                Description: "",
                AllDay: false,
                Recurrence: true,
                RecurrenceRule: "FREQ=DAILY;INTERVAL=2;COUNT=10",
                OwnerId: 1
            }, {
                Id: 103,
                Subject: "#IT 306 Washington - Newport",
                StartTime: new Date(2017, 5, 5, 4, 0),
                EndTime: new Date(2017, 5, 5, 5, 0),
                Description: "",
                AllDay: false,
                Recurrence: true,
                RecurrenceRule: "FREQ=DAILY;INTERVAL=2;COUNT=10",
                OwnerId: 5
            }, {
                Id: 104,
                Subject: "#AI 520 Washington - Chicago",
                StartTime: new Date(2017, 5, 5, 12, 30),
                EndTime: new Date(2017, 5, 5, 13, 30),
                Description: "",
                AllDay: false,
                Recurrence: false,
                OwnerId: 5
            }, {
                Id: 105,
                Subject: "#SG 345 Renfrewshire - Lancashire",
                StartTime: new Date(2017, 5, 5, 6, 30),
                EndTime: new Date(2017, 5, 5, 7, 30),
                Description: "",
                AllDay: false,
                Recurrence: false,
                OwnerId: 3
            }
        ];
    }
    ScheduleTimescalePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"D:\Work\SVN\17.2.0.1\JS\ionic\src\pages\schedule\timescale.html"*/'<header-title title="Schedule  /  Time Scale"></header-title>\n\n<ion-content>\n\n    <ej-schedule width="100%"\n\n                 height="530px"\n\n                 isResponsive="true"\n\n                 [currentDate]=currentdate\n\n                 [timeScale.majorSlot]=majorslot\n\n                 [timeScale.minorSlotCount]=minorslotcount \n\n                 [appointmentSettings.dataSource]=scheduleData \n\n                 appointmentSettings.id="Id"\n\n                 appointmentSettings.subject="Subject" \n\n                 appointmentSettings.startTime="StartTime" \n\n                 appointmentSettings.endTime="EndTime"\n\n                 appointmentSettings.allDay="AllDay"\n\n                 appointmentSettings.recurrence="Recurrence"\n\n                 appointmentSettings.recurrenceRule="RecurrenceRule" >\n\n    </ej-schedule>\n\n</ion-content>'/*ion-inline-end:"D:\Work\SVN\17.2.0.1\JS\ionic\src\pages\schedule\timescale.html"*/,
            selector: 'page-schedule'
        }),
        __metadata("design:paramtypes", [])
    ], ScheduleTimescalePage);
    return ScheduleTimescalePage;
}());

//# sourceMappingURL=timescale.js.map

/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BarcodePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ej_angular2_src_ej_core__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ej_angular2_src_ej_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ej_angular2_src_ej_core__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BarcodePage = /** @class */ (function () {
    function BarcodePage() {
        this.data = [
            { text: "QRBarcode" },
            { text: "DataMatrix" },
            { text: "Codabar" },
            { text: "Code11" },
            { text: "Code128a" }
        ];
        this.fieldsvalues = { dataSource: this.data, text: "text" };
    }
    BarcodePage.prototype.onSelect = function (event) {
        this.barcode.widget.setModel({ symbologyType: event.text });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('barcode'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ej_angular2_src_ej_core__["EJComponents"])
    ], BarcodePage.prototype, "barcode", void 0);
    BarcodePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"D:\Work\SVN\17.2.0.1\JS\ionic\src\pages\barcode\barcode.html"*/'<header-title title="Barcode"></header-title>\n<ion-content padding>\n    <div class="barcodeSample" style="padding-left:100px">\n        <div>\n            <ej-barcode #barcode style="display:block" text="012345678" id="barcode">\n            </ej-barcode>\n        </div><br/><br/>\n        <div>\n            Select Barcode type<br/><br/><br/>\n            <input ej-dropdownlist [dataSource]="data" [fields]="fieldsvalues" [popupHeight]="330" text="QRBarcode" (select)="onSelect($event)" />\n        </div>\n    </div>\n</ion-content>\n'/*ion-inline-end:"D:\Work\SVN\17.2.0.1\JS\ionic\src\pages\barcode\barcode.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], BarcodePage);
    return BarcodePage;
}());

//# sourceMappingURL=barcode.js.map

/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeatMapDefaultPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeatMapDefaultPage = /** @class */ (function () {
    function HeatMapDefaultPage() {
        this.margin = { 'left': 25, 'right': 25 };
        var itemsSource = [];
        var columns = ["Adna", "Nora", "Orla", "Urvi", "Pele"];
        for (var i = 0; i < columns.length; i++) {
            for (var j = 0; j < 6; j++) {
                var value = Math.floor((Math.random() * 100) + 1);
                itemsSource.push({ ProductName: columns[i], Year: "Y" + (2011 + j), Value: value });
            }
        }
        this.itemsSource = itemsSource;
        this.itemsMapping = {
            column: { "propertyName": "ProductName", "displayName": "Product Name" },
            row: { "propertyName": "Year", "displayName": "Year", },
            value: { "propertyName": "Value" },
            columnMapping: [
                { "propertyName": columns[0], "displayName": columns[0] },
                { "propertyName": columns[1], "displayName": columns[1] },
                { "propertyName": columns[2], "displayName": columns[2] },
                { "propertyName": columns[3], "displayName": columns[3] },
                { "propertyName": columns[4], "displayName": columns[4] },
            ],
            headerMapping: { "propertyName": "Year", "displayName": "Year" }
        };
        this.label = { 'text': '0' };
        this.legendLabel = { 'text': '0' };
        this.isResponsive = true;
    }
    HeatMapDefaultPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"D:\Work\SVN\17.2.0.1\JS\ionic\src\pages\heatmap\default.html"*/'<header-title title="HeatMap"></header-title>\n<ion-content padding>\n   <div style="border-width: 2px; opacity: 0.7; text-align: center;">\n            <label class="ht-label1">Product Sales by Year</label><br />\n            <label class="ht-label2">(In Percentage)</label>\n        </div>\n        <div style="height: 15px; width: 100%;"></div>\n     <div style="margin: 0 auto; text-align: center;width: 94%;">   \n        <ej-heatmap id="heatmap" [isResponsive]="isResponsive" width="100%" [itemsMapping]="itemsMapping" [itemsSource]="itemsSource">\n            <e-colormappingcollection>\n                <e-colormapping [value]="0" color="#8ec8f8" [label]="label">\n                </e-colormapping>\n                <e-colormapping [value]="100" color="#0d47a1" [label]="label">\n                </e-colormapping>\n            </e-colormappingcollection>\n        </ej-heatmap>  \n     <div style="height: 15px; width: 100%;"></div>      \n        <ej-heatmaplegend id="heatmaplegend" height="50px" width="100%">\n            <e-legendcolormappings>\n                <e-legendcolormapping [value]="0" color="#8ec8f8">\n                </e-legendcolormapping>\n                <e-legendcolormapping [value]="100" color="#0d47a1">\n                </e-legendcolormapping>\n            </e-legendcolormappings>\n        </ej-heatmaplegend> \n    </div>\n</ion-content>'/*ion-inline-end:"D:\Work\SVN\17.2.0.1\JS\ionic\src\pages\heatmap\default.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], HeatMapDefaultPage);
    return HeatMapDefaultPage;
}());

//# sourceMappingURL=default.js.map

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeatMapLegendPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeatMapLegendPage = /** @class */ (function () {
    function HeatMapLegendPage() {
        this.margin = { 'left': 25, 'right': 25 };
        var itemsSource = [];
        var colorMappingCollection = [
            { value: 0, color: '#fe0002', label: { text: 'Poor' } },
            { value: 3, color: '#ffff01', label: { text: 'Average' } },
            { value: 6, color: '#13ab11', label: { text: 'Good' } },
            { value: 10, color: '#005ba2', label: { text: 'Excellent' } }
        ];
        var rows = ["Adna", "Nora", "Orla", "Urvi", "Pele", "Viva"];
        for (var i = 0; i < rows.length; i++) {
            itemsSource.push({
                EmpName: rows[i],
                Jan: getValue(), Feb: getValue(), Mar: getValue(), Apr: getValue(), May: getValue(), Jun: getValue(),
            });
        }
        this.itemsSource = itemsSource;
        this.colorMappingCollection = colorMappingCollection;
        this.itemsMapping = {
            headerMapping: { 'propertyName': 'EmpName', 'displayName': 'Name' },
            columnMapping: [
                { 'propertyName': 'Jan', 'displayName': 'Jan' },
                { 'propertyName': 'Feb', 'displayName': 'Feb' },
                { 'propertyName': 'Mar', 'displayName': 'Mar' },
                { 'propertyName': 'Apr', 'displayName': 'Apr' },
                { 'propertyName': 'May', 'displayName': 'May' },
                { 'propertyName': 'Jun', 'displayName': 'Jun' }
            ]
        };
        this.isResponsive = true;
        this.label = { 'text': 'poor' };
        this.legendLabel = { 'text': 'poor' };
        this.legendMode = 'list';
        function getValue() {
            return Math.floor((Math.random() * 10) + 1);
        }
    }
    HeatMapLegendPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"D:\Work\SVN\17.2.0.1\JS\ionic\src\pages\heatmap\legend.html"*/'<header-title title="HeatMap  /  Legend  "></header-title>\n<ion-content padding>\n    <div style="border-width: 2px; opacity: 0.7; text-align: center;">\n        <label class="ht-label1">Product Sales by Year</label><br />\n        <label class="ht-label2">(In Percentage)</label>\n    </div>\n      <div style="height: 15px; width: 100%;"></div>\n    <div style="margin: 0 auto; text-align: center;width: 94%;">\n        <ej-heatmap id="legend_heatmap1" isResponsive="true" width="100%" [itemsMapping]="itemsMapping" [itemsSource]="itemsSource" [legendCollection]="legendCollection">\n            <e-colormappingcollection>\n                <e-colormapping [value]="0" color="#fe0002" [label]="label">\n                </e-colormapping>\n                <e-colormapping [value]="3" color="#ffff01" [label]="label">\n                </e-colormapping>\n                <e-colormapping [value]="6" color="#13ab11" [label]="label">\n                </e-colormapping>\n                <e-colormapping [value]="10" color="#005ba2" [label]="label">\n                </e-colormapping>\n            </e-colormappingcollection>\n        </ej-heatmap>\n        <div style="height: 15px; width: 100%;"></div>\n        <ej-heatmaplegend id="legend_heatmaplegend" isResponsive="true" style="margin:auto;" [legendMode]="legendMode" height="50px" width="75%">\n            <e-legendcolormappings>\n                <e-legendcolormapping [value]="0" color="#fe0002">\n                </e-legendcolormapping>\n                <e-legendcolormapping [value]="3" color="#ffff01">\n                </e-legendcolormapping>\n                <e-legendcolormapping [value]="6" color="#13ab11">\n                </e-legendcolormapping>\n                <e-legendcolormapping [value]="10" color="#005ba2">\n                </e-legendcolormapping>\n            </e-legendcolormappings>\n        </ej-heatmaplegend>\n    </div>\n\n</ion-content>\n'/*ion-inline-end:"D:\Work\SVN\17.2.0.1\JS\ionic\src\pages\heatmap\legend.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], HeatMapLegendPage);
    return HeatMapLegendPage;
}());

//# sourceMappingURL=legend.js.map

/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeatMapTablePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeatMapTablePage = /** @class */ (function () {
    function HeatMapTablePage() {
        this.margin = { 'left': 25, 'right': 25 };
        var itemsSource = [];
        var colorMappingCollection = [
            { value: 0, color: '#8ec8f8', label: { text: '0' } },
            { value: 100, color: '#0d47a1', label: { text: '100' } }
        ];
        var rows = ["Adna", "Cory", "Nora", "Orla", "Urvi", "Pele"];
        for (var i = 0; i < 6; i++) {
            itemsSource.push({
                ProductName: rows[i], Y2010: getValue(), Y2011: getValue(),
                Y2012: getValue(), Y2013: getValue(), Y2014: getValue()
            });
        }
        this.itemsSource = itemsSource;
        this.colorMappingCollection = colorMappingCollection;
        this.itemsMapping = {
            headerMapping: { 'propertyName': 'ProductName', 'displayName': 'Product Name' },
            columnMapping: [
                { 'propertyName': 'Y2010', 'displayName': 'Y2010' },
                { 'propertyName': 'Y2011', 'displayName': 'Y2011' },
                { 'propertyName': 'Y2012', 'displayName': 'Y2012' },
                { 'propertyName': 'Y2013', 'displayName': 'Y2013' },
                { 'propertyName': 'Y2014', 'displayName': 'Y2014' }
            ]
        };
        this.isResponsive = true;
        this.label = { 'text': '0' };
        this.legendLabel = { 'text': '0' };
        this.legendCollection = ['heatmaplegend'];
        function getValue() {
            return Math.floor((Math.random() * 100) + 1);
        }
    }
    HeatMapTablePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"D:\Work\SVN\17.2.0.1\JS\ionic\src\pages\heatmap\tabledatabinding.html"*/'<header-title title="HeatMap  /  Table Binding  "></header-title>\n<ion-content padding>\n    <div style="border-width: 2px; opacity: 0.7; text-align: center;">\n        <label class="ht-label1">Product Sales by Year</label><br />\n        <label class="ht-label2">(In Percentage)</label>\n    </div>\n      <div style="height: 15px; width: 100%;"></div>\n    <div style="margin: 0 auto; text-align: center;width: 94%;">\n        <ej-heatmap id="tabeldatabinding_heatmap1"  isResponsive="true" width="100%" [itemsMapping]="itemsMapping" [itemsSource]="itemsSource" [legendCollection]="legendCollection">\n            <e-colormappingcollection>\n                <e-colormapping [value]="0" color="#8ec8f8" [label]="label">\n                </e-colormapping>\n                <e-colormapping [value]="100" color="#0d47a1" [label]="label">\n                </e-colormapping>\n            </e-colormappingcollection>\n        </ej-heatmap>\n        <div style="height: 15px; width: 100%;"></div>\n        <ej-heatmaplegend id="tabeldatabinding_heatmaplegend" isResponsive="true" [legendMode]="legendMode" height="50px" style="margin:auto;" width="75%">\n            <e-legendcolormappings>\n                <e-legendcolormapping [value]="0" color="#8ec8f8">\n                </e-legendcolormapping>\n                <e-legendcolormapping [value]="100" color="#0d47a1">\n                </e-legendcolormapping>\n            </e-legendcolormappings>\n        </ej-heatmaplegend>\n    </div>\n\n</ion-content>\n'/*ion-inline-end:"D:\Work\SVN\17.2.0.1\JS\ionic\src\pages\heatmap\tabledatabinding.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], HeatMapTablePage);
    return HeatMapTablePage;
}());

//# sourceMappingURL=tabledatabinding.js.map

/***/ }),

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(443);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 443:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(481);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(482);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ej_angular2_src_ej_grid_component__ = __webpack_require__(492);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ej_angular2_src_ej_grid_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ej_angular2_src_ej_grid_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ej_angular2_src_ej_chart_component__ = __webpack_require__(494);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ej_angular2_src_ej_chart_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ej_angular2_src_ej_chart_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ej_angular2_src_ej_circulargauge_component__ = __webpack_require__(495);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ej_angular2_src_ej_circulargauge_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ej_angular2_src_ej_circulargauge_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ej_angular2_src_ej_digitalgauge_component__ = __webpack_require__(497);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ej_angular2_src_ej_digitalgauge_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_ej_angular2_src_ej_digitalgauge_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ej_angular2_src_ej_lineargauge_component__ = __webpack_require__(499);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ej_angular2_src_ej_lineargauge_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_ej_angular2_src_ej_lineargauge_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ej_angular2_src_ej_rangenavigator_component__ = __webpack_require__(501);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ej_angular2_src_ej_rangenavigator_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_ej_angular2_src_ej_rangenavigator_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ej_angular2_src_ej_sparkline_component__ = __webpack_require__(503);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ej_angular2_src_ej_sparkline_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_ej_angular2_src_ej_sparkline_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ej_angular2_src_ej_radialmenu_component__ = __webpack_require__(505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ej_angular2_src_ej_radialmenu_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_ej_angular2_src_ej_radialmenu_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ej_angular2_src_ej_radialslider_component__ = __webpack_require__(507);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ej_angular2_src_ej_radialslider_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_ej_angular2_src_ej_radialslider_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ej_angular2_src_ej_bulletgraph_component__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ej_angular2_src_ej_bulletgraph_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_ej_angular2_src_ej_bulletgraph_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ej_angular2_src_ej_treegrid_component__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ej_angular2_src_ej_treegrid_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_ej_angular2_src_ej_treegrid_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_ej_angular2_src_ej_schedule_component__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_ej_angular2_src_ej_schedule_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_ej_angular2_src_ej_schedule_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_ej_angular2_src_ej_barcode_component__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_ej_angular2_src_ej_barcode_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_ej_angular2_src_ej_barcode_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_ej_angular2_src_ej_listview_component__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_ej_angular2_src_ej_listview_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_ej_angular2_src_ej_listview_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_ej_angular2_src_ej_accordion_component__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_ej_angular2_src_ej_accordion_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_ej_angular2_src_ej_accordion_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_ej_angular2_src_ej_rte_component__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_ej_angular2_src_ej_rte_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21_ej_angular2_src_ej_rte_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_ej_angular2_src_ej_dropdownlist_component__ = __webpack_require__(527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_ej_angular2_src_ej_dropdownlist_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22_ej_angular2_src_ej_dropdownlist_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_ej_angular2_src_ej_heatmap_component__ = __webpack_require__(528);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_ej_angular2_src_ej_heatmap_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_23_ej_angular2_src_ej_heatmap_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_ej_angular2_src_ej_heatmaplegend_component__ = __webpack_require__(529);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_ej_angular2_src_ej_heatmaplegend_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_24_ej_angular2_src_ej_heatmaplegend_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_ej_angular2_src_ej_template__ = __webpack_require__(530);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_ej_angular2_src_ej_template___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_25_ej_angular2_src_ej_template__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_status_bar__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_splash_screen__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_grid_default__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_grid_sorting__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_grid_filtering__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_grid_columntemplate__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_chart_line__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_chart_pie__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_chart_column__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_chart_bar__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_chart_doughnut__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_circulargauge_default__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_circulargauge_pointer__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_lineargauge_default__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_digitalgauge_default__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_rangenavigator_default__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__pages_rangenavigator_numeric__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__pages_sparkline_default__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__header_component__ = __webpack_require__(531);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__pages_bulletgraph_default__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__pages_bulletgraph_local__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__pages_schedule_default__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__pages_schedule_blockintervals__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__pages_schedule_horizontal__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__pages_schedule_multipleresource__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__pages_schedule_timescale__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__pages_barcode_barcode__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__pages_heatmap_default__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__pages_heatmap_legend__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__pages_heatmap_tabledatabinding__ = __webpack_require__(311);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






window['jQuery'] = __WEBPACK_IMPORTED_MODULE_5_jquery__;
window['$'] = __WEBPACK_IMPORTED_MODULE_5_jquery__;
//Syncfusion Angular components


















































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6_ej_angular2_src_ej_grid_component__["EJ_GRID_COMPONENTS"], __WEBPACK_IMPORTED_MODULE_7_ej_angular2_src_ej_chart_component__["EJ_CHART_COMPONENTS"], __WEBPACK_IMPORTED_MODULE_8_ej_angular2_src_ej_circulargauge_component__["EJ_CIRCULARGAUGE_COMPONENTS"], __WEBPACK_IMPORTED_MODULE_9_ej_angular2_src_ej_digitalgauge_component__["EJ_DIGITALGAUGE_COMPONENTS"], __WEBPACK_IMPORTED_MODULE_10_ej_angular2_src_ej_lineargauge_component__["EJ_LINEARGAUGE_COMPONENTS"],
                __WEBPACK_IMPORTED_MODULE_11_ej_angular2_src_ej_rangenavigator_component__["EJ_RANGENAVIGATOR_COMPONENTS"], __WEBPACK_IMPORTED_MODULE_12_ej_angular2_src_ej_sparkline_component__["EJ_SPARKLINE_COMPONENTS"], __WEBPACK_IMPORTED_MODULE_13_ej_angular2_src_ej_radialmenu_component__["EJ_RADIALMENU_COMPONENTS"], __WEBPACK_IMPORTED_MODULE_14_ej_angular2_src_ej_radialslider_component__["EJ_RADIALSLIDER_COMPONENTS"],
                __WEBPACK_IMPORTED_MODULE_15_ej_angular2_src_ej_bulletgraph_component__["EJ_BULLETGRAPH_COMPONENTS"], __WEBPACK_IMPORTED_MODULE_16_ej_angular2_src_ej_treegrid_component__["EJ_TREEGRID_COMPONENTS"], __WEBPACK_IMPORTED_MODULE_17_ej_angular2_src_ej_schedule_component__["EJ_SCHEDULE_COMPONENTS"], __WEBPACK_IMPORTED_MODULE_18_ej_angular2_src_ej_barcode_component__["EJ_BARCODE_COMPONENTS"],
                __WEBPACK_IMPORTED_MODULE_20_ej_angular2_src_ej_accordion_component__["EJ_ACCORDION_COMPONENTS"], __WEBPACK_IMPORTED_MODULE_19_ej_angular2_src_ej_listview_component__["EJ_LISTVIEW_COMPONENTS"], __WEBPACK_IMPORTED_MODULE_21_ej_angular2_src_ej_rte_component__["EJ_RTE_COMPONENTS"], __WEBPACK_IMPORTED_MODULE_22_ej_angular2_src_ej_dropdownlist_component__["EJ_DROPDOWNLIST_COMPONENTS"],
                __WEBPACK_IMPORTED_MODULE_25_ej_angular2_src_ej_template__["EJTemplateDirective"], __WEBPACK_IMPORTED_MODULE_23_ej_angular2_src_ej_heatmap_component__["EJ_HEATMAP_COMPONENTS"], __WEBPACK_IMPORTED_MODULE_24_ej_angular2_src_ej_heatmaplegend_component__["EJ_HEATMAPLEGEND_COMPONENTS"],
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_44__header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_28__pages_grid_default__["a" /* GridDefaultPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_grid_sorting__["a" /* GridSortingPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_grid_filtering__["a" /* GridFilteringPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_grid_columntemplate__["a" /* GridTemplatePage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_chart_line__["a" /* LineChartPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_chart_pie__["a" /* PieChartPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_chart_column__["a" /* ColumnChartPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_chart_bar__["a" /* BarChartPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_chart_doughnut__["a" /* DoughnutChartPage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_circulargauge_default__["a" /* CircularDefaultPage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_circulargauge_pointer__["a" /* CircularPointerPage */],
                __WEBPACK_IMPORTED_MODULE_39__pages_lineargauge_default__["a" /* LinearDefaultPage */],
                __WEBPACK_IMPORTED_MODULE_40__pages_digitalgauge_default__["a" /* DigitalDefaultPage */],
                __WEBPACK_IMPORTED_MODULE_41__pages_rangenavigator_default__["a" /* RangeDefaultPage */],
                __WEBPACK_IMPORTED_MODULE_42__pages_rangenavigator_numeric__["a" /* RangeNumericPage */],
                __WEBPACK_IMPORTED_MODULE_43__pages_sparkline_default__["a" /* SparklineDefaultPage */],
                __WEBPACK_IMPORTED_MODULE_45__pages_bulletgraph_default__["a" /* BulletgraphDefaultPage */],
                __WEBPACK_IMPORTED_MODULE_46__pages_bulletgraph_local__["a" /* BulletgraphLocalDataPage */],
                __WEBPACK_IMPORTED_MODULE_47__pages_schedule_default__["a" /* ScheduleDefaultPage */],
                __WEBPACK_IMPORTED_MODULE_48__pages_schedule_blockintervals__["a" /* ScheduleBlockIntervalsPage */],
                __WEBPACK_IMPORTED_MODULE_49__pages_schedule_horizontal__["a" /* ScheduleTimelineViewPage */],
                __WEBPACK_IMPORTED_MODULE_50__pages_schedule_multipleresource__["a" /* ScheduleMultipleResourcePage */],
                __WEBPACK_IMPORTED_MODULE_51__pages_schedule_timescale__["a" /* ScheduleTimescalePage */],
                __WEBPACK_IMPORTED_MODULE_52__pages_barcode_barcode__["a" /* BarcodePage */],
                __WEBPACK_IMPORTED_MODULE_53__pages_heatmap_default__["a" /* HeatMapDefaultPage */],
                __WEBPACK_IMPORTED_MODULE_54__pages_heatmap_legend__["a" /* HeatMapLegendPage */],
                __WEBPACK_IMPORTED_MODULE_55__pages_heatmap_tabledatabinding__["a" /* HeatMapTablePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_44__header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_28__pages_grid_default__["a" /* GridDefaultPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_grid_sorting__["a" /* GridSortingPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_grid_filtering__["a" /* GridFilteringPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_grid_columntemplate__["a" /* GridTemplatePage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_chart_line__["a" /* LineChartPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_chart_pie__["a" /* PieChartPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_chart_column__["a" /* ColumnChartPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_chart_bar__["a" /* BarChartPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_chart_doughnut__["a" /* DoughnutChartPage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_circulargauge_default__["a" /* CircularDefaultPage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_circulargauge_pointer__["a" /* CircularPointerPage */],
                __WEBPACK_IMPORTED_MODULE_39__pages_lineargauge_default__["a" /* LinearDefaultPage */],
                __WEBPACK_IMPORTED_MODULE_40__pages_digitalgauge_default__["a" /* DigitalDefaultPage */],
                __WEBPACK_IMPORTED_MODULE_41__pages_rangenavigator_default__["a" /* RangeDefaultPage */],
                __WEBPACK_IMPORTED_MODULE_42__pages_rangenavigator_numeric__["a" /* RangeNumericPage */],
                __WEBPACK_IMPORTED_MODULE_43__pages_sparkline_default__["a" /* SparklineDefaultPage */],
                __WEBPACK_IMPORTED_MODULE_45__pages_bulletgraph_default__["a" /* BulletgraphDefaultPage */],
                __WEBPACK_IMPORTED_MODULE_46__pages_bulletgraph_local__["a" /* BulletgraphLocalDataPage */],
                __WEBPACK_IMPORTED_MODULE_47__pages_schedule_default__["a" /* ScheduleDefaultPage */],
                __WEBPACK_IMPORTED_MODULE_48__pages_schedule_blockintervals__["a" /* ScheduleBlockIntervalsPage */],
                __WEBPACK_IMPORTED_MODULE_49__pages_schedule_horizontal__["a" /* ScheduleTimelineViewPage */],
                __WEBPACK_IMPORTED_MODULE_50__pages_schedule_multipleresource__["a" /* ScheduleMultipleResourcePage */],
                __WEBPACK_IMPORTED_MODULE_51__pages_schedule_timescale__["a" /* ScheduleTimescalePage */],
                __WEBPACK_IMPORTED_MODULE_52__pages_barcode_barcode__["a" /* BarcodePage */],
                __WEBPACK_IMPORTED_MODULE_53__pages_heatmap_default__["a" /* HeatMapDefaultPage */],
                __WEBPACK_IMPORTED_MODULE_54__pages_heatmap_legend__["a" /* HeatMapLegendPage */],
                __WEBPACK_IMPORTED_MODULE_55__pages_heatmap_tabledatabinding__["a" /* HeatMapTablePage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_26__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_27__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["e" /* Title */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 482:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Product */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_grid_default__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_grid_sorting__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_grid_filtering__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_grid_columntemplate__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_chart_line__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_chart_pie__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_chart_column__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_chart_bar__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_chart_doughnut__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_circulargauge_default__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_circulargauge_pointer__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_lineargauge_default__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_digitalgauge_default__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_rangenavigator_default__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_rangenavigator_numeric__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_sparkline_default__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_bulletgraph_default__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_bulletgraph_local__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_schedule_default__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_schedule_blockintervals__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_schedule_horizontal__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_schedule_multipleresource__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_schedule_timescale__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_barcode_barcode__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_heatmap_default__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_heatmap_legend__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_heatmap_tabledatabinding__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__analytics__ = __webpack_require__(491);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33_jquery__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_33_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var Product = /** @class */ (function () {
    function Product(control, samples, component, id) {
        this.control = control;
        this.samples = samples;
        this.component = component;
        this.id = id;
    }
    return Product;
}());



































window['jQuery'] = __WEBPACK_IMPORTED_MODULE_33_jquery__;
window['$'] = __WEBPACK_IMPORTED_MODULE_33_jquery__;
var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, loading, sidemenu, splashScreen, titleService, analyticsComp) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.loading = loading;
        this.sidemenu = sidemenu;
        this.splashScreen = splashScreen;
        this.titleService = titleService;
        this.analyticsComp = analyticsComp;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_grid_default__["a" /* GridDefaultPage */];
        this.initializeApp();
        ej.Scroller.prototype.defaults.enabled = false;
        this.pages = [
            new Product('Grid', ['Default', 'Sorting', 'Filtering', 'Column Template'], [__WEBPACK_IMPORTED_MODULE_5__pages_grid_default__["a" /* GridDefaultPage */], __WEBPACK_IMPORTED_MODULE_6__pages_grid_sorting__["a" /* GridSortingPage */], __WEBPACK_IMPORTED_MODULE_7__pages_grid_filtering__["a" /* GridFilteringPage */], __WEBPACK_IMPORTED_MODULE_8__pages_grid_columntemplate__["a" /* GridTemplatePage */]], 0),
            new Product('Chart', ['Line', 'Pie', 'Column', 'Bar', 'Doughnut'], [__WEBPACK_IMPORTED_MODULE_9__pages_chart_line__["a" /* LineChartPage */], __WEBPACK_IMPORTED_MODULE_10__pages_chart_pie__["a" /* PieChartPage */], __WEBPACK_IMPORTED_MODULE_11__pages_chart_column__["a" /* ColumnChartPage */], __WEBPACK_IMPORTED_MODULE_12__pages_chart_bar__["a" /* BarChartPage */], __WEBPACK_IMPORTED_MODULE_13__pages_chart_doughnut__["a" /* DoughnutChartPage */]], 1),
            new Product('Circular Gauge', ['Default', 'Pointer'], [__WEBPACK_IMPORTED_MODULE_14__pages_circulargauge_default__["a" /* CircularDefaultPage */], __WEBPACK_IMPORTED_MODULE_15__pages_circulargauge_pointer__["a" /* CircularPointerPage */]], 2),
            new Product('Digital Gauge', ['Default'], [__WEBPACK_IMPORTED_MODULE_17__pages_digitalgauge_default__["a" /* DigitalDefaultPage */]], 3),
            new Product('Linear Gauge', ['Default'], [__WEBPACK_IMPORTED_MODULE_16__pages_lineargauge_default__["a" /* LinearDefaultPage */]], 4),
            new Product('Range Navigator', ['Default', 'Numeric'], [__WEBPACK_IMPORTED_MODULE_18__pages_rangenavigator_default__["a" /* RangeDefaultPage */], __WEBPACK_IMPORTED_MODULE_19__pages_rangenavigator_numeric__["a" /* RangeNumericPage */]], 5),
            new Product('Sparkline', ['Default'], [__WEBPACK_IMPORTED_MODULE_20__pages_sparkline_default__["a" /* SparklineDefaultPage */]], 6),
            new Product('Bullet Graph', ['Default', 'Local Data'], [__WEBPACK_IMPORTED_MODULE_21__pages_bulletgraph_default__["a" /* BulletgraphDefaultPage */], __WEBPACK_IMPORTED_MODULE_22__pages_bulletgraph_local__["a" /* BulletgraphLocalDataPage */]], 7),
            new Product('Schedule', ['Default', 'Timeline View', 'Multiple Resource', 'Block Intervals', 'Time Scale'], [__WEBPACK_IMPORTED_MODULE_23__pages_schedule_default__["a" /* ScheduleDefaultPage */], __WEBPACK_IMPORTED_MODULE_25__pages_schedule_horizontal__["a" /* ScheduleTimelineViewPage */], __WEBPACK_IMPORTED_MODULE_26__pages_schedule_multipleresource__["a" /* ScheduleMultipleResourcePage */], __WEBPACK_IMPORTED_MODULE_24__pages_schedule_blockintervals__["a" /* ScheduleBlockIntervalsPage */], __WEBPACK_IMPORTED_MODULE_27__pages_schedule_timescale__["a" /* ScheduleTimescalePage */]], 8),
            new Product('Barcode', ['Default'], [__WEBPACK_IMPORTED_MODULE_28__pages_barcode_barcode__["a" /* BarcodePage */]], 9),
            new Product('HeatMap', ['Default', "Legend", "Table Binding"], [__WEBPACK_IMPORTED_MODULE_29__pages_heatmap_default__["a" /* HeatMapDefaultPage */], __WEBPACK_IMPORTED_MODULE_30__pages_heatmap_legend__["a" /* HeatMapLegendPage */], __WEBPACK_IMPORTED_MODULE_31__pages_heatmap_tabledatabinding__["a" /* HeatMapTablePage */]], 10),
        ];
        // Referral url and current url should not be same to avoid multiple entries
        if ((document.referrer && document.referrer.split('/')[2]) != window.location.host) {
            var existingCookieValue = this.getCookieValue("SampleSiteReferrer");
            var currentUrl = "";
            if (existingCookieValue.indexOf(window.location.host) === -1) {
                currentUrl = "," + window.location.href;
            }
            if (existingCookieValue != "undefined" && existingCookieValue != undefined && existingCookieValue != "") {
                existingCookieValue = existingCookieValue + currentUrl;
                document.cookie = "SampleSiteReferrer" + "=" + existingCookieValue + ";path=/;domain=syncfusion.com";
            }
            else {
                document.cookie = "SampleSiteReferrer" + "=" + document.referrer + currentUrl + ";path=/;domain=syncfusion.com";
            }
        }
        this.analyticsComp.analyticsLogmodel['PageUrl'] = window.location.href;
        this.analyticsComp.postRequest(analyticsComp.analyticsLogmodel);
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            jQuery("#list-0_container li").eq(0).addClass("e-state-active");
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page, sample) {
        var loader = this.loading.create({
            spinner: 'bubbles',
        });
        loader.present();
        jQuery(".control-list .e-lv .e-state-active").removeClass("e-state-active");
        var listID = 'list-' + page.id;
        var obj = jQuery("#" + listID).data("ejListView");
        var index = obj.model.selectedItemIndex;
        if (this.nav && this.nav.getActive().component.name != page.component[index].name) {
            this.nav.setRoot(page.component[index]);
            obj.setActive(index);
        }
        this.pageTitle = "Essential JavaScript for Ionic | " + page.control + " | " + page.samples[index];
        this.titleService.setTitle(this.pageTitle);
        loader.dismiss();
        this.sidemenu.close();
    };
    // To get cookie value
    MyApp.prototype.getCookieValue = function (cookieName) {
        var name = cookieName + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var cookieValues = decodedCookie.split(';');
        for (var i = 0; i < cookieValues.length; i++) {
            var cookie = cookieValues[i];
            while (cookie.charAt(0) == ' ') {
                cookie = cookie.substring(1);
            }
            if (cookie.indexOf(name) == 0) {
                return cookie.substring(name.length, cookie.length);
            }
        }
        return "";
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"D:\Work\SVN\17.2.0.1\JS\ionic\src\app\app.html"*/'<ion-split-pane when="lg">\n    <ion-menu [content]="content">\n        <ion-header>\n            <ion-toolbar id="left-header">\n                <ion-title class="e-iconlogo-synclogo">\n                    Essential JS 1 for Ionic\n                </ion-title>\n            </ion-toolbar>\n        </ion-header>\n        <ion-content>\n            <ej-accordion class="control-list" [collapsible]="true" *ngFor="let p of pages" id="{{ \'accordion-\' + p.id }}" customIcon.header="arrowRight" customIcon.selectedHeader="arrowDown">\n                <h3>\n                    {{p.control}}\n                </h3>\n                <div>\n                    <ej-listview [persistSelection]="true" (mouseUp)="openPage(p)" id="{{ \'list-\' + p.id }}"><ul><li *ngFor="let s of p.samples;">{{s}}</li></ul></ej-listview>\n                </div>\n            </ej-accordion>\n        </ion-content>\n    </ion-menu>\n    <ion-nav [root]="rootPage" #content main swipeBackEnabled="false">\n    </ion-nav>\n</ion-split-pane>'/*ion-inline-end:"D:\Work\SVN\17.2.0.1\JS\ionic\src\app\app.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_32__analytics__["a" /* Analytics */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* MenuController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["e" /* Title */], __WEBPACK_IMPORTED_MODULE_32__analytics__["a" /* Analytics */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 491:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Analytics; });
var Analytics = /** @class */ (function () {
    function Analytics() {
        var today = new Date();
        var uuid = '';
        var pageCount = 1;
        var url = window.location.href;
        //for creating new uuid if the client has no uuid cookies
        this.loadTimeOffset = today.getTimezoneOffset() * 60000;
        this.estTimeOffset = this.ESTTimeOffset();
        this.timeUTC = today.getTime() + this.loadTimeOffset;
        this.timeEST = (this.timeUTC + this.estTimeOffset) / 1;
        this.timeEST = new Date(this.timeEST);
        //check uuid in browser cookie
        if (this.getCookie('_uid') != '') {
            uuid = this.getCookie('_uid');
        }
        else {
            uuid = Math.floor(Math.random() * 1000) + 1 + this.timeEST.toString();
            this.createCookie('_uid', uuid);
        }
        //count and stores the number of pages user is visited
        if (this.getCookie('_pageCount') != '') {
            pageCount += parseInt(this.getCookie('_pageCount'));
            this.createCookie('_pageCount', pageCount);
        }
        else {
            this.createCookie('_pageCount', pageCount);
        }
        //creates the key value pair to be sent for analytics api
        this.analyticsLogmodel = {
            UUID: uuid,
            PageUrl: url,
            CurrentTime: today.toLocaleString(),
            PageCount: pageCount,
            Queue: '',
            CustomerIP: window["windowmyip"]
        };
        this.postRequest(this.analyticsLogmodel);
    }
    //used to change the client offset to est offset
    Analytics.prototype.ESTTimeOffset = function () {
        var today = new Date();
        var jan = new Date(today.getFullYear(), 0, 1);
        var jul = new Date(today.getFullYear(), 6, 1);
        return (Math.max(jan.getTimezoneOffset(), jul.getTimezoneOffset()) <= today.getTimezoneOffset() ? -4 : -5) * 3600000;
    };
    //used to create cookie with expiry	
    Analytics.prototype.createCookie = function (cookieName, cookieValue) {
        var d = new Date();
        var expires = '';
        if (cookieName != '_pageCount') {
            d.setMonth(d.getMonth() + 24);
            expires = ";expires=" + d.toUTCString();
        }
        document.cookie = cookieName + "=" + cookieValue + expires + ";domain=.syncfusion.com;path=/";
    };
    //used to check the given cookie is available or not
    Analytics.prototype.getCookie = function (cookieName) {
        var name = cookieName + "=";
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i];
            while (cookie.charAt(0) == ' ')
                cookie = cookie.substring(1);
            if (cookie.indexOf(name) == 0)
                return cookie.substring(name.length, cookie.length);
        }
        return "";
    };
    //post ajax request to be sent to analytics api
    Analytics.prototype.postRequest = function (analyticsLogmodel) {
        analyticsLogmodel.Queue = "EJ1 - IONIC";
        $.ajax({
            type: "post",
            url: "//analytics.syncfusion.com/log/common",
            data: analyticsLogmodel,
            dataType: 'json',
            crossDomain: true
        });
    };
    return Analytics;
}());

//# sourceMappingURL=analytics.js.map

/***/ }),

/***/ 531:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], HeaderComponent.prototype, "title", void 0);
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'header-title',
            template: "<ion-header><ion-toolbar id=\"right-header\"><button ion-button class=\"menuButton\" menuToggle><ion-icon name=\"menu\"></ion-icon></button><ion-title id=\"content-title\">{{title}}</ion-title></ion-toolbar></ion-header>"
        })
    ], HeaderComponent);
    return HeaderComponent;
}());

//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NorthwindService; });
var NorthwindService = /** @class */ (function () {
    function NorthwindService() {
    }
    NorthwindService.prototype.getFoodInformation = function () {
        return [{ FoodId: 1, Time: "8:40 AM", FoodName: "CHEESE BURGER", Calorie: 100, Protein: 15, Fat: 15, Carbohydrate: 28 }, { FoodId: 2, Time: "10:30 AM", FoodName: "PIZZA", Calorie: 100, Protein: 15, Fat: 9, Carbohydrate: 39 }, { FoodId: 3, Time: "12:45 PM", FoodName: "CHICKEN NOODLE", Calorie: 50, Protein: 4, Fat: 2, Carbohydrate: 9 }, { FoodId: 4, Time: "5:30 PM", FoodName: "YOGURT", Calorie: 75, Protein: 10, Fat: 2, Carbohydrate: 43 }, { FoodId: 5, Time: "9:00 PM", FoodName: "BEEF SANDWICH", Calorie: 125, Protein: 22, Fat: 13, Carbohydrate: 34 }, { FoodId: 6, Time: "11:00 PM", FoodName: "CHICKEN BURGER", Calorie: 100, Protein: 15, Fat: 10, Carbohydrate: 25 }];
    };
    NorthwindService.prototype.getEmployees = function () {
        return [{ EmployeeID: 1, LastName: "Davolio", FirstName: "Nancy", Title: "Sales Representative", TitleOfCourtesy: "Ms.", BirthDate: new Date(-6647328e5), HireDate: new Date(7047036e5), Address: "507 - 20th Ave. E.\r\nApt. 2A", City: "Seattle", Region: "WA", PostalCode: "98122", Country: "USA", HomePhone: "(206) 555-9857", Extension: "5467", Photo: { Length: 21626 }, Notes: 'Education includes a BA in psychology from Colorado State University in 1970.  She also completed "The Art of the Cold Call."  Nancy is a member of Toastmasters International.', ReportsTo: 2, PhotoPath: "http://accweb/emmployees/davolio.bmp" }, { EmployeeID: 2, LastName: "Fuller", FirstName: "Andrew", Title: "Vice President, Sales", TitleOfCourtesy: "Dr.", BirthDate: new Date(-5638176e5), HireDate: new Date(7137756e5), Address: "908 W. Capital Way", City: "Tacoma", Region: "WA", PostalCode: "98401", Country: "USA", HomePhone: "(206) 555-9482", Extension: "3457", Photo: { Length: 21626 }, Notes: "Andrew received his BTS commercial in 1974 and a Ph.D. in international marketing from the University of Dallas in 1981.  He is fluent in French and Italian and reads German.  He joined the company as a sales representative, was promoted to sales manager in January 1992 and to vice president of sales in March 1993.  Andrew is a member of the Sales Management Roundtable, the Seattle Chamber of Commerce, and the Pacific Rim Importers Association.", ReportsTo: null, PhotoPath: "http://accweb/emmployees/fuller.bmp" }, { EmployeeID: 3, LastName: "Leverling", FirstName: "Janet", Title: "Sales Representative", TitleOfCourtesy: "Ms.", BirthDate: new Date(-2000772e5), HireDate: new Date(7021152e5), Address: "722 Moss Bay Blvd.", City: "Kirkland", Region: "WA", PostalCode: "98033", Country: "USA", HomePhone: "(206) 555-3412", Extension: "3355", Photo: { Length: 21722 }, Notes: "Janet has a BS degree in chemistry from Boston College (1984).  She has also completed a certificate program in food retailing management.  Janet was hired as a sales associate in 1991 and promoted to sales representative in February 1992.", ReportsTo: 2, PhotoPath: "http://accweb/emmployees/leverling.bmp" }, { EmployeeID: 4, LastName: "Peacock", FirstName: "Margaret", Title: "Sales Representative", TitleOfCourtesy: "Mrs.", BirthDate: new Date(-10188036e5), HireDate: new Date(7364124e5), Address: "4110 Old Redmond Rd.", City: "Redmond", Region: "WA", PostalCode: "98052", Country: "USA", HomePhone: "(206) 555-8122", Extension: "5176", Photo: { Length: 21626 }, Notes: "Margaret holds a BA in English literature from Concordia College (1958) and an MA from the American Institute of Culinary Arts (1966).  She was assigned to the London office temporarily from July through November 1992.", ReportsTo: 2, PhotoPath: "http://accweb/emmployees/peacock.bmp" }, { EmployeeID: 5, LastName: "Buchanan", FirstName: "Steven", Title: "Sales Manager", TitleOfCourtesy: "Mr.", BirthDate: new Date(-468e9), HireDate: new Date(7508412e5), Address: "14 Garrett Hill", City: "London", Region: null, PostalCode: "SW1 8JR", Country: "UK", HomePhone: "(71) 555-4848", Extension: "3453", Photo: { Length: 21626 }, Notes: 'Steven Buchanan graduated from St. Andrews University, Scotland, with a BSC degree in 1976.  Upon joining the company as a sales representative in 1992, he spent 6 months in an orientation program at the Seattle office and then returned to his permanent post in London.  He was promoted to sales manager in March 1993.  Mr. Buchanan has completed the courses "Successful Telemarketing" and "International Sales Management."  He is fluent in French.', ReportsTo: 2, PhotoPath: "http://accweb/emmployees/buchanan.bmp" }, { EmployeeID: 6, LastName: "Suyama", FirstName: "Michael", Title: "Sales Representative", TitleOfCourtesy: "Mr.", BirthDate: new Date(-2051748e5), HireDate: new Date(7508412e5), Address: "Coventry House\r\nMiner Rd.", City: "London", Region: null, PostalCode: "EC2 7JR", Country: "UK", HomePhone: "(71) 555-7773", Extension: "428", Photo: { Length: 21626 }, Notes: 'Michael is a graduate of Sussex University (MA, economics, 1983) and the University of California at Los Angeles (MBA, marketing, 1986).  He has also taken the courses "Multi-Cultural Selling" and "Time Management for the Sales Professional."  He is fluent in Japanese and can read and write French, Portuguese, and Spanish.', ReportsTo: 5, PhotoPath: "http://accweb/emmployees/davolio.bmp" }, { EmployeeID: 7, LastName: "King", FirstName: "Robert", Title: "Sales Representative", TitleOfCourtesy: "Mr.", BirthDate: new Date(-3027204e5), HireDate: new Date(7574976e5), Address: "Edgeham Hollow\r\nWinchester Way", City: "London", Region: null, PostalCode: "RG1 9SP", Country: "UK", HomePhone: "(71) 555-5598", Extension: "465", Photo: { Length: 21626 }, Notes: 'Robert King served in the Peace Corps and traveled extensively before completing his degree in English at the University of Michigan in 1992, the year he joined the company.  After completing a course entitled "Selling in Europe," he was transferred to the London office in March 1993.', ReportsTo: 5, PhotoPath: "http://accweb/emmployees/davolio.bmp" }, { EmployeeID: 8, LastName: "Callahan", FirstName: "Laura", Title: "Inside Sales Coordinator", TitleOfCourtesy: "Ms.", BirthDate: new Date(-3779712e5), HireDate: new Date(7628544e5), Address: "4726 - 11th Ave. N.E.", City: "Seattle", Region: "WA", PostalCode: "98105", Country: "USA", HomePhone: "(206) 555-1189", Extension: "2344", Photo: { Length: 21626 }, Notes: "Laura received a BA in psychology from the University of Washington.  She has also completed a course in business French.  She reads and writes French.", ReportsTo: 2, PhotoPath: "http://accweb/emmployees/davolio.bmp" }, { EmployeeID: 9, LastName: "Dodsworth", FirstName: "Anne", Title: "Sales Representative", TitleOfCourtesy: "Ms.", BirthDate: new Date(-1239552e5), HireDate: new Date(7848864e5), Address: "7 Houndstooth Rd.", City: "London", Region: null, PostalCode: "WG2 7LT", Country: "UK", HomePhone: "(71) 555-4444", Extension: "452", Photo: { Length: 21626 }, Notes: "Anne has a BA degree in English from St. Lawrence College.  She is fluent in French and German.", ReportsTo: 5, PhotoPath: "http://accweb/emmployees/davolio.bmp" }];
    };
    NorthwindService.prototype.getOrders = function () {
        return [{ OrderID: 10280, CustomerID: "BERGS", EmployeeID: 2, OrderDate: new Date(840006e6), RequiredDate: new Date(8424252e5), ShippedDate: new Date(8425116e5), ShipVia: 1, Freight: 8.98, ShipName: "Berglunds snabbköp", ShipAddress: "Berguvsvägen  8", ShipCity: "Luleå", ShipRegion: null, ShipPostalCode: "S-958 22", ShipCountry: "Sweden", CompanyName: "Berglunds snabbköp", Address: "Berguvsvägen  8", City: "Luleå", Region: null, PostalCode: "S-958 22", Country: "Sweden" }, { OrderID: 10265, CustomerID: "BLONP", EmployeeID: 2, OrderDate: new Date(838278e6), RequiredDate: new Date(8406972e5), ShippedDate: new Date(8398332e5), ShipVia: 1, Freight: 55.28, ShipName: "Blondel père et fils", ShipAddress: "24, place Kléber", ShipCity: "Strasbourg", ShipRegion: null, ShipPostalCode: "67000", ShipCountry: "France", CompanyName: "Blondesddsl père et fils", Address: "24, place Kléber", City: "Strasbourg", Region: null, PostalCode: "67000", Country: "France" }, { OrderID: 10663, CustomerID: "BONAP", EmployeeID: 2, OrderDate: new Date(8738748e5), RequiredDate: new Date(8750844e5), ShippedDate: new Date(875862e6), ShipVia: 2, Freight: 113.15, ShipName: "Bon app'", ShipAddress: "12, rue des Bouchers", ShipCity: "Marseille", ShipRegion: null, ShipPostalCode: "13008", ShipCountry: "France", CompanyName: "Bon app'", Address: "12, rue des Bouchers", City: "Marseille", Region: null, PostalCode: "13008", Country: "France" }, { OrderID: 10949, CustomerID: "BOTTM", EmployeeID: 2, OrderDate: new Date(889776e6), RequiredDate: new Date(8921916e5), ShippedDate: new Date(8901216e5), ShipVia: 3, Freight: 74.44, ShipName: "Bottom-Dollar Markets", ShipAddress: "23 Tsawassen Blvd.", ShipCity: "Tsawassen", ShipRegion: "BC", ShipPostalCode: "T2F 8M4", ShipCountry: "Canada", CompanyName: "Bottom-Dollar Markets", Address: "23 Tsawassen Blvd.", City: "Tsawassen", Region: "BC", PostalCode: "T2F 8M4", Country: "Canada" }, { OrderID: 10982, CustomerID: "BOTTM", EmployeeID: 2, OrderDate: new Date(8909856e5), RequiredDate: new Date(8934012e5), ShippedDate: new Date(8920188e5), ShipVia: 1, Freight: 14.01, ShipName: "Bottom-Dollar Markets", ShipAddress: "23 Tsawassen Blvd.", ShipCity: "Tsawassen", ShipRegion: "BC", ShipPostalCode: "T2F 8M4", ShipCountry: "Canada", CompanyName: "Bottom-Dollar Markets", Address: "23 Tsawassen Blvd.", City: "Tsawassen", Region: "BC", PostalCode: "T2F 8M4", Country: "Canada" }, { OrderID: 10471, CustomerID: "BSBEV", EmployeeID: 2, OrderDate: new Date(8580672e5), RequiredDate: new Date(8604828e5), ShippedDate: new Date(858672e6), ShipVia: 3, Freight: 45.59, ShipName: "B's Beverages", ShipAddress: "Fauntleroy Circus", ShipCity: "London", ShipRegion: null, ShipPostalCode: "EC2 5NT", ShipCountry: "UK", CompanyName: "B's Beverages", Address: "Fauntleroy Circus", City: "London", Region: null, PostalCode: "EC2 5NT", Country: "UK" }, { OrderID: 10819, CustomerID: "CACTU", EmployeeID: 2, OrderDate: new Date(88416e7), RequiredDate: new Date(8865792e5), ShippedDate: new Date(8849376e5), ShipVia: 3, Freight: 19.76, ShipName: "Cactus Comidas para llevar", ShipAddress: "Cerrito 333", ShipCity: "Buenos Aires", ShipRegion: null, ShipPostalCode: "1010", ShipCountry: "Argentina", CompanyName: "Cactus Comidas para llevar", Address: "Cerrito 333", City: "Buenos Aires", Region: null, PostalCode: "1010", Country: "Argentina" }, { OrderID: 11042, CustomerID: "COMMI", EmployeeID: 2, OrderDate: new Date(8932284e5), RequiredDate: new Date(894438e6), ShippedDate: new Date(894006e6), ShipVia: 1, Freight: 29.99, ShipName: "Comércio Mineiro", ShipAddress: "Av. dos Lusíadas, 23", ShipCity: "Sao Paulo", ShipRegion: "SP", ShipPostalCode: "05432-043", ShipCountry: "Brazil", CompanyName: "Comércio Mineiro", Address: "Av. dos Lusíadas, 23", City: "Sao Paulo", Region: "SP", PostalCode: "05432-043", Country: "Brazil" }, { OrderID: 10462, CustomerID: "CONSH", EmployeeID: 2, OrderDate: new Date(857376e6), RequiredDate: new Date(8597952e5), ShippedDate: new Date(858672e6), ShipVia: 1, Freight: 6.17, ShipName: "Consolidated Holdings", ShipAddress: "Berkeley Gardens 12  Brewery", ShipCity: "London", ShipRegion: null, ShipPostalCode: "WX1 6LT", ShipCountry: "UK", CompanyName: "Consolidated Holdings", Address: "Berkeley Gardens 12  Brewery", City: "London", Region: null, PostalCode: "WX1 6LT", Country: "UK" }, { OrderID: 10683, CustomerID: "DUMON", EmployeeID: 2, OrderDate: new Date(8752572e5), RequiredDate: new Date(8776764e5), ShippedDate: new Date(8756892e5), ShipVia: 1, Freight: 4.4, ShipName: "Du monde entier", ShipAddress: "67, rue des Cinquante Otages", ShipCity: "Nantes", ShipRegion: null, ShipPostalCode: "44000", ShipCountry: "France", CompanyName: "Du monde entier", Address: "67, rue des Cinquante Otages", City: "Nantes", Region: null, PostalCode: "44000", Country: "France" }, { OrderID: 10595, CustomerID: "ERNSH", EmployeeID: 2, OrderDate: new Date(868518e6), RequiredDate: new Date(8709372e5), ShippedDate: new Date(8688636e5), ShipVia: 1, Freight: 96.78, ShipName: "Ernst Handel", ShipAddress: "Kirchgasse 6", ShipCity: "Graz", ShipRegion: null, ShipPostalCode: "8010", ShipCountry: "Austria", CompanyName: "Ernst Handel", Address: "Kirchgasse 6", City: "Graz", Region: null, PostalCode: "8010", Country: "Austria" }, { OrderID: 10368, CustomerID: "ERNSH", EmployeeID: 2, OrderDate: new Date(8492544e5), RequiredDate: new Date(8516736e5), ShippedDate: new Date(8495136e5), ShipVia: 2, Freight: 101.95, ShipName: "Ernst Handel", ShipAddress: "Kirchgasse 6", ShipCity: "Graz", ShipRegion: null, ShipPostalCode: "8010", ShipCountry: "Austria", CompanyName: "Ernst Handel", Address: "Kirchgasse 6", City: "Graz", Region: null, PostalCode: "8010", Country: "Austria" }, { OrderID: 10835, CustomerID: "ALFKI", EmployeeID: 1, OrderDate: new Date(8848512e5), RequiredDate: new Date(8872704e5), ShippedDate: new Date(8853696e5), ShipVia: 3, Freight: 69.53, ShipName: "Alfred's Futterkiste", ShipAddress: "Obere Str. 57", ShipCity: "Berlin", ShipRegion: null, ShipPostalCode: "12209", ShipCountry: "Germany", CompanyName: "Alfreds Futterkiste", Address: "Obere Str. 57", City: "Berlin", Region: null, PostalCode: "12209", Country: "Germany" }, { OrderID: 10952, CustomerID: "ALFKI", EmployeeID: 1, OrderDate: new Date(8900352e5), RequiredDate: new Date(8936604e5), ShippedDate: new Date(8907264e5), ShipVia: 1, Freight: 40.42, ShipName: "Alfred's Futterkiste", ShipAddress: "Obere Str. 57", ShipCity: "Berlin", ShipRegion: null, ShipPostalCode: "12209", ShipCountry: "Germany", CompanyName: "Alfreds Futterkiste", Address: "Obere Str. 57", City: "Berlin", Region: null, PostalCode: "12209", Country: "Germany" }, { OrderID: 10677, CustomerID: "ANTON", EmployeeID: 1, OrderDate: new Date(8749116e5), RequiredDate: new Date(8773308e5), ShippedDate: new Date(8752572e5), ShipVia: 3, Freight: 4.03, ShipName: "Antonio Moreno Taquería", ShipAddress: "Mataderos  2312", ShipCity: "México D.F.", ShipRegion: null, ShipPostalCode: "05023", ShipCountry: "Mexico", CompanyName: "Antonio Moreno Taquería", Address: "Mataderos  2312", City: "México D.F.", Region: null, PostalCode: "05023", Country: "Mexico" }, { OrderID: 10558, CustomerID: "AROUT", EmployeeID: 1, OrderDate: new Date(8654076e5), RequiredDate: new Date(8678268e5), ShippedDate: new Date(865926e6), ShipVia: 2, Freight: 72.97, ShipName: "Around the Horn", ShipAddress: "Brook Farm Stratford St. Mary", ShipCity: "Colchester", ShipRegion: "Essex", ShipPostalCode: "CO7 6JX", ShipCountry: "UK", CompanyName: "Around the Horn", Address: "120 Hanover Sq.", City: "London", Region: null, PostalCode: "WA1 1DP", Country: "UK" }, { OrderID: 10453, CustomerID: "AROUT", EmployeeID: 1, OrderDate: new Date(856512e6), RequiredDate: new Date(8589312e5), ShippedDate: new Date(856944e6), ShipVia: 2, Freight: 25.36, ShipName: "Around the Horn", ShipAddress: "Brook Farm Stratford St. Mary", ShipCity: "Colchester", ShipRegion: "Essex", ShipPostalCode: "CO7 6JX", ShipCountry: "UK", CompanyName: "Around the Horn", Address: "120 Hanover Sq.", City: "London", Region: null, PostalCode: "WA1 1DP", Country: "UK" }, { OrderID: 10743, CustomerID: "AROUT", EmployeeID: 1, OrderDate: new Date(8797536e5), RequiredDate: new Date(8821728e5), ShippedDate: new Date(8800992e5), ShipVia: 2, Freight: 23.72, ShipName: "Around the Horn", ShipAddress: "Brook Farm Stratford St. Mary", ShipCity: "Colchester", ShipRegion: "Essex", ShipPostalCode: "CO7 6JX", ShipCountry: "UK", CompanyName: "Around the Horn", Address: "120 Hanover Sq.", City: "London", Region: null, PostalCode: "WA1 1DP", Country: "UK" }, { OrderID: 10733, CustomerID: "BERGS", EmployeeID: 1, OrderDate: new Date(8788896e5), RequiredDate: new Date(8813088e5), ShippedDate: new Date(8791488e5), ShipVia: 3, Freight: 110.11, ShipName: "Berglunds snabbköp", ShipAddress: "Berguvsvägen  8", ShipCity: "Luleå", ShipRegion: null, ShipPostalCode: "S-958 22", ShipCountry: "Sweden", CompanyName: "Berglunds snabbköp", Address: "Berguvsvägen  8", City: "Luleå", Region: null, PostalCode: "S-958 22", Country: "Sweden" }, { OrderID: 10524, CustomerID: "BERGS", EmployeeID: 1, OrderDate: new Date(86247e7), RequiredDate: new Date(8648892e5), ShippedDate: new Date(8629884e5), ShipVia: 2, Freight: 244.79, ShipName: "Berglunds snabbköp", ShipAddress: "Berguvsvägen  8", ShipCity: "Luleå", ShipRegion: null, ShipPostalCode: "S-958 22", ShipCountry: "Sweden", CompanyName: "Berglunds snabbköp", Address: "Berguvsvägen  8", City: "Luleå", Region: null, PostalCode: "S-958 22", Country: "Sweden" }, { OrderID: 10626, CustomerID: "BERGS", EmployeeID: 1, OrderDate: new Date(8712828e5), RequiredDate: new Date(873702e6), ShippedDate: new Date(8720604e5), ShipVia: 2, Freight: 138.69, ShipName: "Berglunds snabbköp", ShipAddress: "Berguvsvägen  8", ShipCity: "Luleå", ShipRegion: null, ShipPostalCode: "S-958 22", ShipCountry: "Sweden", CompanyName: "Berglunds snabbköp", Address: "Berguvsvägen  8", City: "Luleå", Region: null, PostalCode: "S-958 22", Country: "Sweden" }, { OrderID: 10689, CustomerID: "BERGS", EmployeeID: 1, OrderDate: new Date(8756892e5), RequiredDate: new Date(878112e6), ShippedDate: new Date(8762076e5), ShipVia: 2, Freight: 13.42, ShipName: "Berglunds snabbköp", ShipAddress: "Berguvsvägen  8", ShipCity: "Luleå", ShipRegion: null, ShipPostalCode: "S-958 22", ShipCountry: "Sweden", CompanyName: "Berglunds snabbköp", Address: "Berguvsvägen  8", City: "Luleå", Region: null, PostalCode: "S-958 22", Country: "Sweden" }, { OrderID: 10525, CustomerID: "BONAP", EmployeeID: 1, OrderDate: new Date(8625564e5), RequiredDate: new Date(8649756e5), ShippedDate: new Date(8643708e5), ShipVia: 2, Freight: 11.06, ShipName: "Bon app'", ShipAddress: "12, rue des Bouchers", ShipCity: "Marseille", ShipRegion: null, ShipPostalCode: "13008", ShipCountry: "France", CompanyName: "Bon app'", Address: "12, rue des Bouchers", City: "Marseille", Region: null, PostalCode: "13008", Country: "France" }, { OrderID: 10340, CustomerID: "BONAP", EmployeeID: 1, OrderDate: new Date(846576e6), RequiredDate: new Date(8489952e5), ShippedDate: new Date(84744e7), ShipVia: 3, Freight: 166.31, ShipName: "Bon app'", ShipAddress: "12, rue des Bouchers", ShipCity: "Marseille", ShipRegion: null, ShipPostalCode: "13008", ShipCountry: "France", CompanyName: "Bon app'", Address: "12, rue des Bouchers", City: "Marseille", Region: null, PostalCode: "13008", Country: "France" }, { OrderID: 11011, CustomerID: "ALFKI", EmployeeID: 3, OrderDate: new Date(8921052e5), RequiredDate: new Date(8945244e5), ShippedDate: new Date(8924508e5), ShipVia: 1, Freight: 1.21, ShipName: "Alfred's Futterkiste", ShipAddress: "Obere Str. 57", ShipCity: "Berlin", ShipRegion: null, ShipPostalCode: "12209", ShipCountry: "Germany", CompanyName: "Alfreds Futterkiste", Address: "Obere Str. 57", City: "Berlin", Region: null, PostalCode: "12209", Country: "Germany" }, { OrderID: 10759, CustomerID: "ANATR", EmployeeID: 3, OrderDate: new Date(880704e6), RequiredDate: new Date(8831232e5), ShippedDate: new Date(8819136e5), ShipVia: 3, Freight: 11.99, ShipName: "Ana Trujillo Emparedados y helados", ShipAddress: "Avda. de la Constitución 2222", ShipCity: "México D.F.", ShipRegion: null, ShipPostalCode: "05021", ShipCountry: "Mexico", CompanyName: "Ana Trujillo Emparedados y helados", Address: "Avda. de la Constitución 2222", City: "México D.F.", Region: null, PostalCode: "05021", Country: "Mexico" }, { OrderID: 10625, CustomerID: "ANATR", EmployeeID: 3, OrderDate: new Date(8710236e5), RequiredDate: new Date(8734428e5), ShippedDate: new Date(871542e6), ShipVia: 1, Freight: 43.9, ShipName: "Ana Trujillo Emparedados y helados", ShipAddress: "Avda. de la Constitución 2222", ShipCity: "México D.F.", ShipRegion: null, ShipPostalCode: "05021", ShipCountry: "Mexico", CompanyName: "Ana Trujillo Emparedados y helados", Address: "Avda. de la Constitución 2222", City: "México D.F.", Region: null, PostalCode: "05021", Country: "Mexico" }, { OrderID: 10682, CustomerID: "ANTON", EmployeeID: 3, OrderDate: new Date(8751708e5), RequiredDate: new Date(87759e7), ShippedDate: new Date(8756892e5), ShipVia: 2, Freight: 36.13, ShipName: "Antonio Moreno Taquería", ShipAddress: "Mataderos  2312", ShipCity: "México D.F.", ShipRegion: null, ShipPostalCode: "05023", ShipCountry: "Mexico", CompanyName: "Antonio Moreno Taquería", Address: "Mataderos  2312", City: "México D.F.", Region: null, PostalCode: "05023", Country: "Mexico" }, { OrderID: 10365, CustomerID: "ANTON", EmployeeID: 3, OrderDate: new Date(8490816e5), RequiredDate: new Date(8515008e5), ShippedDate: new Date(8495136e5), ShipVia: 2, Freight: 22, ShipName: "Antonio Moreno Taquería", ShipAddress: "Mataderos  2312", ShipCity: "México D.F.", ShipRegion: null, ShipPostalCode: "05023", ShipCountry: "Mexico", CompanyName: "Antonio Moreno Taquería", Address: "Mataderos  2312", City: "México D.F.", Region: null, PostalCode: "05023", Country: "Mexico" }, { OrderID: 10856, CustomerID: "ANTON", EmployeeID: 3, OrderDate: new Date(8859744e5), RequiredDate: new Date(8883936e5), ShippedDate: new Date(8870976e5), ShipVia: 2, Freight: 58.43, ShipName: "Antonio Moreno Taquería", ShipAddress: "Mataderos  2312", ShipCity: "México D.F.", ShipRegion: null, ShipPostalCode: "05023", ShipCountry: "Mexico", CompanyName: "Antonio Moreno Taquería", Address: "Mataderos  2312", City: "México D.F.", Region: null, PostalCode: "05023", Country: "Mexico" }, { OrderID: 10768, CustomerID: "AROUT", EmployeeID: 3, OrderDate: new Date(881568e6), RequiredDate: new Date(8839872e5), ShippedDate: new Date(8821728e5), ShipVia: 2, Freight: 146.32, ShipName: "Around the Horn", ShipAddress: "Brook Farm Stratford St. Mary", ShipCity: "Colchester", ShipRegion: "Essex", ShipPostalCode: "CO7 6JX", ShipCountry: "UK", CompanyName: "Around the Horn", Address: "120 Hanover Sq.", City: "London", Region: null, PostalCode: "WA1 1DP", Country: "UK" }, { OrderID: 10793, CustomerID: "AROUT", EmployeeID: 3, OrderDate: new Date(8829504e5), RequiredDate: new Date(8853696e5), ShippedDate: new Date(8842464e5), ShipVia: 3, Freight: 4.52, ShipName: "Around the Horn", ShipAddress: "Brook Farm Stratford St. Mary", ShipCity: "Colchester", ShipRegion: "Essex", ShipPostalCode: "CO7 6JX", ShipCountry: "UK", CompanyName: "Around the Horn", Address: "120 Hanover Sq.", City: "London", Region: null, PostalCode: "WA1 1DP", Country: "UK" }, { OrderID: 10778, CustomerID: "BERGS", EmployeeID: 3, OrderDate: new Date(8822592e5), RequiredDate: new Date(8846784e5), ShippedDate: new Date(8829504e5), ShipVia: 1, Freight: 6.79, ShipName: "Berglunds snabbköp", ShipAddress: "Berguvsvägen  8", ShipCity: "Luleå", ShipRegion: null, ShipPostalCode: "S-958 22", ShipCountry: "Sweden", CompanyName: "Berglunds snabbköp", Address: "Berguvsvägen  8", City: "Luleå", Region: null, PostalCode: "S-958 22", Country: "Sweden" }, { OrderID: 10924, CustomerID: "BERGS", EmployeeID: 3, OrderDate: new Date(8889984e5), RequiredDate: new Date(8914176e5), ShippedDate: new Date(8920188e5), ShipVia: 2, Freight: 151.52, ShipName: "Berglunds snabbköp", ShipAddress: "Berguvsvägen  8", ShipCity: "Luleå", ShipRegion: null, ShipPostalCode: "S-958 22", ShipCountry: "Sweden", CompanyName: "Berglunds snabbköp", Address: "Berguvsvägen  8", City: "Luleå", Region: null, PostalCode: "S-958 22", Country: "Sweden" }, { OrderID: 10384, CustomerID: "BERGS", EmployeeID: 3, OrderDate: new Date(8507232e5), RequiredDate: new Date(8531424e5), ShippedDate: new Date(8510688e5), ShipVia: 3, Freight: 168.64, ShipName: "Berglunds snabbköp", ShipAddress: "Berguvsvägen  8", ShipCity: "Luleå", ShipRegion: null, ShipPostalCode: "S-958 22", ShipCountry: "Sweden", CompanyName: "Berglunds snabbköp", Address: "Berguvsvägen  8", City: "Luleå", Region: null, PostalCode: "S-958 22", Country: "Sweden" }, { OrderID: 10444, CustomerID: "BERGS", EmployeeID: 3, OrderDate: new Date(8557344e5), RequiredDate: new Date(8581536e5), ShippedDate: new Date(856512e6), ShipVia: 3, Freight: 3.5, ShipName: "Berglunds snabbköp", ShipAddress: "Berguvsvägen  8", ShipCity: "Luleå", ShipRegion: null, ShipPostalCode: "S-958 22", ShipCountry: "Sweden", CompanyName: "Berglunds snabbköp", Address: "Berguvsvägen  8", City: "Luleå", Region: null, PostalCode: "S-958 22", Country: "Sweden" }, { OrderID: 10692, CustomerID: "ALFKI", EmployeeID: 4, OrderDate: new Date(875862e6), RequiredDate: new Date(8782848e5), ShippedDate: new Date(876726e6), ShipVia: 2, Freight: 61.02, ShipName: "Alfred's Futterkiste", ShipAddress: "Obere Str. 57", ShipCity: "Berlin", ShipRegion: null, ShipPostalCode: "12209", ShipCountry: "Germany", CompanyName: "Alfreds Futterkiste", Address: "Obere Str. 57", City: "Berlin", Region: null, PostalCode: "12209", Country: "Germany" }, { OrderID: 10702, CustomerID: "ALFKI", EmployeeID: 4, OrderDate: new Date(876726e6), RequiredDate: new Date(8803584e5), ShippedDate: new Date(8774172e5), ShipVia: 1, Freight: 23.94, ShipName: "Alfred's Futterkiste", ShipAddress: "Obere Str. 57", ShipCity: "Berlin", ShipRegion: null, ShipPostalCode: "12209", ShipCountry: "Germany", CompanyName: "Alfreds Futterkiste", Address: "Obere Str. 57", City: "Berlin", Region: null, PostalCode: "12209", Country: "Germany" }, { OrderID: 10926, CustomerID: "ANATR", EmployeeID: 4, OrderDate: new Date(8889984e5), RequiredDate: new Date(8914176e5), ShippedDate: new Date(8896032e5), ShipVia: 3, Freight: 39.92, ShipName: "Ana Trujillo Emparedados y helados", ShipAddress: "Avda. de la Constitución 2222", ShipCity: "México D.F.", ShipRegion: null, ShipPostalCode: "05021", ShipCountry: "Mexico", CompanyName: "Ana Trujillo Emparedados y helados", Address: "Avda. de la Constitución 2222", City: "México D.F.", Region: null, PostalCode: "05021", Country: "Mexico" }, { OrderID: 10535, CustomerID: "ANTON", EmployeeID: 4, OrderDate: new Date(8635068e5), RequiredDate: new Date(865926e6), ShippedDate: new Date(864198e6), ShipVia: 1, Freight: 15.64, ShipName: "Antonio Moreno Taquería", ShipAddress: "Mataderos  2312", ShipCity: "México D.F.", ShipRegion: null, ShipPostalCode: "05023", ShipCountry: "Mexico", CompanyName: "Antonio Moreno Taquería", Address: "Mataderos  2312", City: "México D.F.", Region: null, PostalCode: "05023", Country: "Mexico" }, { OrderID: 10864, CustomerID: "AROUT", EmployeeID: 4, OrderDate: new Date(8864064e5), RequiredDate: new Date(8888256e5), ShippedDate: new Date(8870112e5), ShipVia: 2, Freight: 3.04, ShipName: "Around the Horn", ShipAddress: "Brook Farm Stratford St. Mary", ShipCity: "Colchester", ShipRegion: "Essex", ShipPostalCode: "CO7 6JX", ShipCountry: "UK", CompanyName: "Around the Horn", Address: "120 Hanover Sq.", City: "London", Region: null, PostalCode: "WA1 1DP", Country: "UK" }, { OrderID: 10707, CustomerID: "AROUT", EmployeeID: 4, OrderDate: new Date(8769852e5), RequiredDate: new Date(8781984e5), ShippedDate: new Date(87759e7), ShipVia: 3, Freight: 21.74, ShipName: "Around the Horn", ShipAddress: "Brook Farm Stratford St. Mary", ShipCity: "Colchester", ShipRegion: "Essex", ShipPostalCode: "CO7 6JX", ShipCountry: "UK", CompanyName: "Around the Horn", Address: "120 Hanover Sq.", City: "London", Region: null, PostalCode: "WA1 1DP", Country: "UK" }, { OrderID: 10741, CustomerID: "AROUT", EmployeeID: 4, OrderDate: new Date(8794944e5), RequiredDate: new Date(880704e6), ShippedDate: new Date(87984e7), ShipVia: 3, Freight: 10.96, ShipName: "Around the Horn", ShipAddress: "Brook Farm Stratford St. Mary", ShipCity: "Colchester", ShipRegion: "Essex", ShipPostalCode: "CO7 6JX", ShipCountry: "UK", CompanyName: "Around the Horn", Address: "120 Hanover Sq.", City: "London", Region: null, PostalCode: "WA1 1DP", Country: "UK" }, { OrderID: 10920, CustomerID: "AROUT", EmployeeID: 4, OrderDate: new Date(888912e6), RequiredDate: new Date(8913312e5), ShippedDate: new Date(8894304e5), ShipVia: 2, Freight: 29.61, ShipName: "Around the Horn", ShipAddress: "Brook Farm Stratford St. Mary", ShipCity: "Colchester", ShipRegion: "Essex", ShipPostalCode: "CO7 6JX", ShipCountry: "UK", CompanyName: "Around the Horn", Address: "120 Hanover Sq.", City: "London", Region: null, PostalCode: "WA1 1DP", Country: "UK" }, { OrderID: 10875, CustomerID: "BERGS", EmployeeID: 4, OrderDate: new Date(886752e6), RequiredDate: new Date(8891712e5), ShippedDate: new Date(888912e6), ShipVia: 2, Freight: 32.37, ShipName: "Berglunds snabbköp", ShipAddress: "Berguvsvägen  8", ShipCity: "Luleå", ShipRegion: null, ShipPostalCode: "S-958 22", ShipCountry: "Sweden", CompanyName: "Berglunds snabbköp", Address: "Berguvsvägen  8", City: "Luleå", Region: null, PostalCode: "S-958 22", Country: "Sweden" }, { OrderID: 10509, CustomerID: "BLAUS", EmployeeID: 4, OrderDate: new Date(8612604e5), RequiredDate: new Date(8636796e5), ShippedDate: new Date(8622972e5), ShipVia: 1, Freight: .15, ShipName: "Blauer See Delikatessen", ShipAddress: "Forsterstr. 57", ShipCity: "Mannheim", ShipRegion: null, ShipPostalCode: "68306", ShipCountry: "Germany", CompanyName: "Blauer See Delikatessen", Address: "Forsterstr. 57", City: "Mannheim", Region: null, PostalCode: "68306", Country: "Germany" }, { OrderID: 10584, CustomerID: "BLONP", EmployeeID: 4, OrderDate: new Date(867654e6), RequiredDate: new Date(8700732e5), ShippedDate: new Date(8679996e5), ShipVia: 1, Freight: 59.14, ShipName: "Blondel père et fils", ShipAddress: "24, place Kléber", ShipCity: "Strasbourg", ShipRegion: null, ShipPostalCode: "67000", ShipCountry: "France", CompanyName: "Blondesddsl père et fils", Address: "24, place Kléber", City: "Strasbourg", Region: null, PostalCode: "67000", Country: "France" }, { OrderID: 10360, CustomerID: "BLONP", EmployeeID: 4, OrderDate: new Date(8486496e5), RequiredDate: new Date(8510688e5), ShippedDate: new Date(8495136e5), ShipVia: 3, Freight: 131.7, ShipName: "Blondel père et fils", ShipAddress: "24, place Kléber", ShipCity: "Strasbourg", ShipRegion: null, ShipPostalCode: "67000", ShipCountry: "France", CompanyName: "Blondesddsl père et fils", Address: "24, place Kléber", City: "Strasbourg", Region: null, PostalCode: "67000", Country: "France" }, { OrderID: 10654, CustomerID: "BERGS", EmployeeID: 5, OrderDate: new Date(8731836e5), RequiredDate: new Date(8756028e5), ShippedDate: new Date(8739612e5), ShipVia: 1, Freight: 55.26, ShipName: "Berglunds snabbköp", ShipAddress: "Berguvsvägen  8", ShipCity: "Luleå", ShipRegion: null, ShipPostalCode: "S-958 22", ShipCountry: "Sweden", CompanyName: "Berglunds snabbköp", Address: "Berguvsvägen  8", City: "Luleå", Region: null, PostalCode: "S-958 22", Country: "Sweden" }, { OrderID: 10866, CustomerID: "BERGS", EmployeeID: 5, OrderDate: new Date(8864928e5), RequiredDate: new Date(888912e6), ShippedDate: new Date(8872704e5), ShipVia: 1, Freight: 109.11, ShipName: "Berglunds snabbköp", ShipAddress: "Berguvsvägen  8", ShipCity: "Luleå", ShipRegion: null, ShipPostalCode: "S-958 22", ShipCountry: "Sweden", CompanyName: "Berglunds snabbköp", Address: "Berguvsvägen  8", City: "Luleå", Region: null, PostalCode: "S-958 22", Country: "Sweden" }, { OrderID: 10297, CustomerID: "BLONP", EmployeeID: 5, OrderDate: new Date(8418204e5), RequiredDate: new Date(8454492e5), ShippedDate: new Date(8423388e5), ShipVia: 2, Freight: 5.74, ShipName: "Blondel père et fils", ShipAddress: "24, place Kléber", ShipCity: "Strasbourg", ShipRegion: null, ShipPostalCode: "67000", ShipCountry: "France", CompanyName: "Blondesddsl père et fils", Address: "24, place Kléber", City: "Strasbourg", Region: null, PostalCode: "67000", Country: "France" }, { OrderID: 10730, CustomerID: "BONAP", EmployeeID: 5, OrderDate: new Date(8787168e5), RequiredDate: new Date(881136e6), ShippedDate: new Date(8794944e5), ShipVia: 1, Freight: 20.12, ShipName: "Bon app'", ShipAddress: "12, rue des Bouchers", ShipCity: "Marseille", ShipRegion: null, ShipPostalCode: "13008", ShipCountry: "France", CompanyName: "Bon app'", Address: "12, rue des Bouchers", City: "Marseille", Region: null, PostalCode: "13008", Country: "France" }, { OrderID: 10254, CustomerID: "CHOPS", EmployeeID: 5, OrderDate: new Date(8370684e5), RequiredDate: new Date(8394876e5), ShippedDate: new Date(8381052e5), ShipVia: 2, Freight: 22.98, ShipName: "Chop-suey Chinese", ShipAddress: "Hauptstr. 31", ShipCity: "Bern", ShipRegion: null, ShipPostalCode: "3012", ShipCountry: "Switzerland", CompanyName: "Chop-suey Chinese", Address: "Hauptstr. 29", City: "Bern", Region: null, PostalCode: "3012", Country: "Switzerland" }, { OrderID: 10650, CustomerID: "FAMIA", EmployeeID: 5, OrderDate: new Date(872838e6), RequiredDate: new Date(8752572e5), ShippedDate: new Date(87327e7), ShipVia: 3, Freight: 176.81, ShipName: "Familia Arquibaldo", ShipAddress: "Rua Orós, 92", ShipCity: "Sao Paulo", ShipRegion: "SP", ShipPostalCode: "05442-030", ShipCountry: "Brazil", CompanyName: "Familia Arquibaldo", Address: "Rua Orós, 92", City: "Sao Paulo", Region: "SP", PostalCode: "05442-030", Country: "Brazil" }, { OrderID: 10378, CustomerID: "FOLKO", EmployeeID: 5, OrderDate: new Date(8502048e5), RequiredDate: new Date(852624e6), ShippedDate: new Date(8509824e5), ShipVia: 3, Freight: 5.44, ShipName: "Folk och fä HB", ShipAddress: "Åkergatan 24", ShipCity: "Bräcke", ShipRegion: null, ShipPostalCode: "S-844 67", ShipCountry: "Sweden", CompanyName: "Folk och fä HB", Address: "Åkergatan 24", City: "Bräcke", Region: null, PostalCode: "S-844 67", Country: "Sweden" }, { OrderID: 10675, CustomerID: "FRANK", EmployeeID: 5, OrderDate: new Date(8746524e5), RequiredDate: new Date(8770716e5), ShippedDate: new Date(874998e6), ShipVia: 2, Freight: 31.85, ShipName: "Frankenversand", ShipAddress: "Berliner Platz 43", ShipCity: "München", ShipRegion: null, ShipPostalCode: "80805", ShipCountry: "Germany", CompanyName: "Frankenversand", Address: "Berliner Platz 43", City: "München", Region: null, PostalCode: "80805", Country: "Germany" }, { OrderID: 10872, CustomerID: "GODOS", EmployeeID: 5, OrderDate: new Date(8866656e5), RequiredDate: new Date(8890848e5), ShippedDate: new Date(8870112e5), ShipVia: 2, Freight: 175.32, ShipName: "Godos Cocina Típica", ShipAddress: "C/ Romero, 33", ShipCity: "Sevilla", ShipRegion: null, ShipPostalCode: "41101", ShipCountry: "Spain", CompanyName: "Godos Cocina Típica", Address: "C/ Romero, 33", City: "Sevilla", Region: null, PostalCode: "41101", Country: "Spain" }, { OrderID: 10874, CustomerID: "GODOS", EmployeeID: 5, OrderDate: new Date(886752e6), RequiredDate: new Date(8891712e5), ShippedDate: new Date(887184e6), ShipVia: 2, Freight: 19.58, ShipName: "Godos Cocina Típica", ShipAddress: "C/ Romero, 33", ShipCity: "Sevilla", ShipRegion: null, ShipPostalCode: "41101", ShipCountry: "Spain", CompanyName: "Godos Cocina Típica", Address: "C/ Romero, 33", City: "Sevilla", Region: null, PostalCode: "41101", Country: "Spain" }, { OrderID: 10922, CustomerID: "HANAR", EmployeeID: 5, OrderDate: new Date(888912e6), RequiredDate: new Date(8913312e5), ShippedDate: new Date(8890848e5), ShipVia: 3, Freight: 62.74, ShipName: "Hanari Carnes", ShipAddress: "Rua do Paço, 67", ShipCity: "Rio de Janeiro", ShipRegion: "RJ", ShipPostalCode: "05454-876", ShipCountry: "Brazil", CompanyName: "Hanari Carnes", Address: "Rua do Paço, 67", City: "Rio de Janeiro", Region: "RJ", PostalCode: "05454-876", Country: "Brazil" }, { OrderID: 10358, CustomerID: "LAMAI", EmployeeID: 5, OrderDate: new Date(8484768e5), RequiredDate: new Date(850896e6), ShippedDate: new Date(8490816e5), ShipVia: 1, Freight: 19.64, ShipName: "La maison d'Asie", ShipAddress: "1 rue Alsace-Lorraine", ShipCity: "Toulouse", ShipRegion: null, ShipPostalCode: "31000", ShipCountry: "France", CompanyName: "La maison d'Asie", Address: "1 rue Alsace-Lorraine", City: "Toulouse", Region: null, PostalCode: "31000", Country: "France" }, { OrderID: 10249, CustomerID: "TOMSP", EmployeeID: 6, OrderDate: new Date(83655e7), RequiredDate: new Date(8401788e5), ShippedDate: new Date(836982e6), ShipVia: 1, Freight: 11.61, ShipName: "Toms Spezialitäten", ShipAddress: "Luisenstr. 48", ShipCity: "Münster", ShipRegion: null, ShipPostalCode: "44087", ShipCountry: "Germany", CompanyName: "Toms Spezialitäten", Address: "Luisenstr. 48", City: "Münster", Region: null, PostalCode: "44087", Country: "Germany" }, { OrderID: 10264, CustomerID: "FOLKO", EmployeeID: 6, OrderDate: new Date(8381916e5), RequiredDate: new Date(8406108e5), ShippedDate: new Date(8407836e5), ShipVia: 3, Freight: 3.67, ShipName: "Folk och fä HB", ShipAddress: "Åkergatan 24", ShipCity: "Bräcke", ShipRegion: null, ShipPostalCode: "S-844 67", ShipCountry: "Sweden", CompanyName: "Folk och fä HB", Address: "Åkergatan 24", City: "Bräcke", Region: null, PostalCode: "S-844 67", Country: "Sweden" }, { OrderID: 10271, CustomerID: "SPLIR", EmployeeID: 6, OrderDate: new Date(8388828e5), RequiredDate: new Date(841302e6), ShippedDate: new Date(8413884e5), ShipVia: 2, Freight: 4.54, ShipName: "Split Rail Beer & Ale", ShipAddress: "P.O. Box 555", ShipCity: "Lander", ShipRegion: "WY", ShipPostalCode: "82520", ShipCountry: "USA", CompanyName: "Split Rail Beer & Ale", Address: "P.O. Box 555", City: "Lander", Region: "WY", PostalCode: "82520", Country: "USA" }, { OrderID: 10272, CustomerID: "RATTC", EmployeeID: 6, OrderDate: new Date(8389692e5), RequiredDate: new Date(8413884e5), ShippedDate: new Date(8393148e5), ShipVia: 2, Freight: 98.03, ShipName: "Rattlesnake Canyon Grocery", ShipAddress: "2817 Milton Dr.", ShipCity: "Albuquerque", ShipRegion: "NM", ShipPostalCode: "87110", ShipCountry: "USA", CompanyName: "Rattlesnake Canyon Grocery", Address: "2817 Milton Dr.", City: "Albuquerque", Region: "NM", PostalCode: "87110", Country: "USA" }, { OrderID: 10274, CustomerID: "VINET", EmployeeID: 6, OrderDate: new Date(8393148e5), RequiredDate: new Date(841734e6), ShippedDate: new Date(8401788e5), ShipVia: 1, Freight: 6.01, ShipName: "Vins et alcools Chevalier", ShipAddress: "59 rue de l'Abbaye", ShipCity: "Reims", ShipRegion: null, ShipPostalCode: "51100", ShipCountry: "France", CompanyName: "Vins et alcools Chevalier", Address: "59 rue de l'Abbaye", City: "Reims", Region: null, PostalCode: "51100", Country: "France" }, { OrderID: 10291, CustomerID: "QUEDE", EmployeeID: 6, OrderDate: new Date(8411292e5), RequiredDate: new Date(8435484e5), ShippedDate: new Date(8418204e5), ShipVia: 2, Freight: 6.4, ShipName: "Que Delícia", ShipAddress: "Rua da Panificadora, 12", ShipCity: "Rio de Janeiro", ShipRegion: "RJ", ShipPostalCode: "02389-673", ShipCountry: "Brazil", CompanyName: "Que Delícia", Address: "Rua da Panificadora, 12", City: "Rio de Janeiro", Region: "RJ", PostalCode: "02389-673", Country: "Brazil" }, { OrderID: 10296, CustomerID: "LILAS", EmployeeID: 6, OrderDate: new Date(841734e6), RequiredDate: new Date(8441532e5), ShippedDate: new Date(8424252e5), ShipVia: 1, Freight: .12, ShipName: "LILA-Supermercado", ShipAddress: "Carrera 52 con Ave. Bolívar #65-98 Llano Largo", ShipCity: "Barquisimeto", ShipRegion: "Lara", ShipPostalCode: "3508", ShipCountry: "Venezuela", CompanyName: "LILA-Supermercado", Address: "Carrera 52 con Ave. Bolívar #65-98 Llano Largo", City: "Barquisimeto", Region: "Lara", PostalCode: "3508", Country: "Venezuela" }, { OrderID: 10298, CustomerID: "HUNGO", EmployeeID: 6, OrderDate: new Date(8419068e5), RequiredDate: new Date(844326e6), ShippedDate: new Date(8424252e5), ShipVia: 2, Freight: 168.22, ShipName: "Hungry Owl All-Night Grocers", ShipAddress: "8 Johnstown Road", ShipCity: "Cork", ShipRegion: "Co. Cork", ShipPostalCode: null, ShipCountry: "Ireland", CompanyName: "Hungry Owl All-Night Grocers", Address: "8 Johnstown Road", City: "Cork", Region: "Co. Cork", PostalCode: null, Country: "Ireland" }, { OrderID: 10317, CustomerID: "LONEP", EmployeeID: 6, OrderDate: new Date(8440668e5), RequiredDate: new Date(8464896e5), ShippedDate: new Date(8449308e5), ShipVia: 1, Freight: 12.69, ShipName: "Lonesome Pine Restaurant", ShipAddress: "89 Chiaroscuro Rd.", ShipCity: "Portland", ShipRegion: "OR", ShipPostalCode: "97219", ShipCountry: "USA", CompanyName: "Lonesome Pine Restaurant", Address: "89 Chiaroscuro Rd.", City: "Portland", Region: "OR", PostalCode: "97219", Country: "USA" }, { OrderID: 10350, CustomerID: "LAMAI", EmployeeID: 6, OrderDate: new Date(8476992e5), RequiredDate: new Date(8501184e5), ShippedDate: new Date(8496e8), ShipVia: 2, Freight: 64.19, ShipName: "La maison d'Asie", ShipAddress: "1 rue Alsace-Lorraine", ShipCity: "Toulouse", ShipRegion: null, ShipPostalCode: "31000", ShipCountry: "France", CompanyName: "La maison d'Asie", Address: "1 rue Alsace-Lorraine", City: "Toulouse", Region: null, PostalCode: "31000", Country: "France" }, { OrderID: 10355, CustomerID: "AROUT", EmployeeID: 6, OrderDate: new Date(8480448e5), RequiredDate: new Date(850464e6), ShippedDate: new Date(8484768e5), ShipVia: 1, Freight: 41.95, ShipName: "Around the Horn", ShipAddress: "Brook Farm Stratford St. Mary", ShipCity: "Colchester", ShipRegion: "Essex", ShipPostalCode: "CO7 6JX", ShipCountry: "UK", CompanyName: "Around the Horn", Address: "120 Hanover Sq.", City: "London", Region: null, PostalCode: "WA1 1DP", Country: "UK" }, { OrderID: 10356, CustomerID: "WANDK", EmployeeID: 6, OrderDate: new Date(848304e6), RequiredDate: new Date(8507232e5), ShippedDate: new Date(8490816e5), ShipVia: 2, Freight: 36.71, ShipName: "Die Wandernde Kuh", ShipAddress: "Adenauerallee 900", ShipCity: "Stuttgart", ShipRegion: null, ShipPostalCode: "70563", ShipCountry: "Germany", CompanyName: "Die Wandernde Kuh", Address: "Adenauerallee 900", City: "Stuttgart", Region: null, PostalCode: "70563", Country: "Germany" }, { OrderID: 10289, CustomerID: "BSBEV", EmployeeID: 7, OrderDate: new Date(8410428e5), RequiredDate: new Date(843462e6), ShippedDate: new Date(8412156e5), ShipVia: 3, Freight: 22.77, ShipName: "B's Beverages", ShipAddress: "Fauntleroy Circus", ShipCity: "London", ShipRegion: null, ShipPostalCode: "EC2 5NT", ShipCountry: "UK", CompanyName: "B's Beverages", Address: "Fauntleroy Circus", City: "London", Region: null, PostalCode: "EC2 5NT", Country: "UK" }, { OrderID: 10303, CustomerID: "GODOS", EmployeeID: 7, OrderDate: new Date(8424252e5), RequiredDate: new Date(8448444e5), ShippedDate: new Date(84303e7), ShipVia: 2, Freight: 107.83, ShipName: "Godos Cocina Típica", ShipAddress: "C/ Romero, 33", ShipCity: "Sevilla", ShipRegion: null, ShipPostalCode: "41101", ShipCountry: "Spain", CompanyName: "Godos Cocina Típica", Address: "C/ Romero, 33", City: "Sevilla", Region: null, PostalCode: "41101", Country: "Spain" }, { OrderID: 10308, CustomerID: "ANATR", EmployeeID: 7, OrderDate: new Date(84303e7), RequiredDate: new Date(8454492e5), ShippedDate: new Date(8435484e5), ShipVia: 3, Freight: 1.61, ShipName: "Ana Trujillo Emparedados y helados", ShipAddress: "Avda. de la Constitución 2222", ShipCity: "México D.F.", ShipRegion: null, ShipPostalCode: "05021", ShipCountry: "Mexico", CompanyName: "Ana Trujillo Emparedados y helados", Address: "Avda. de la Constitución 2222", City: "México D.F.", Region: null, PostalCode: "05021", Country: "Mexico" }, { OrderID: 10319, CustomerID: "TORTU", EmployeeID: 7, OrderDate: new Date(8442396e5), RequiredDate: new Date(8466624e5), ShippedDate: new Date(8450172e5), ShipVia: 3, Freight: 64.5, ShipName: "Tortuga Restaurante", ShipAddress: "Avda. Azteca 123", ShipCity: "México D.F.", ShipRegion: null, ShipPostalCode: "05033", ShipCountry: "Mexico", CompanyName: "Tortuga Restaurante", Address: "Avda. Azteca 123", City: "México D.F.", Region: null, PostalCode: "05033", Country: "Mexico" }, { OrderID: 10322, CustomerID: "PERIC", EmployeeID: 7, OrderDate: new Date(8444124e5), RequiredDate: new Date(8468352e5), ShippedDate: new Date(846054e6), ShipVia: 3, Freight: .4, ShipName: "Pericles Comidas clásicas", ShipAddress: "Calle Dr. Jorge Cash 321", ShipCity: "México D.F.", ShipRegion: null, ShipPostalCode: "05033", ShipCountry: "Mexico", CompanyName: "Pericles Comidas clásicas", Address: "Calle Dr. Jorge Cash 321", City: "México D.F.", Region: null, PostalCode: "05033", Country: "Mexico" }, { OrderID: 10335, CustomerID: "HUNGO", EmployeeID: 7, OrderDate: new Date(8459676e5), RequiredDate: new Date(8483904e5), ShippedDate: new Date(8461404e5), ShipVia: 2, Freight: 42.11, ShipName: "Hungry Owl All-Night Grocers", ShipAddress: "8 Johnstown Road", ShipCity: "Cork", ShipRegion: "Co. Cork", ShipPostalCode: null, ShipCountry: "Ireland", CompanyName: "Hungry Owl All-Night Grocers", Address: "8 Johnstown Road", City: "Cork", Region: "Co. Cork", PostalCode: null, Country: "Ireland" }, { OrderID: 10336, CustomerID: "PRINI", EmployeeID: 7, OrderDate: new Date(846054e6), RequiredDate: new Date(8484768e5), ShippedDate: new Date(8462268e5), ShipVia: 2, Freight: 15.51, ShipName: "Princesa Isabel Vinhos", ShipAddress: "Estrada da saúde n. 58", ShipCity: "Lisboa", ShipRegion: null, ShipPostalCode: "1756", ShipCountry: "Portugal", CompanyName: "Princesa Isabel Vinhos", Address: "Estrada da saúde n. 58", City: "Lisboa", Region: null, PostalCode: "1756", Country: "Portugal" }, { OrderID: 10341, CustomerID: "SIMOB", EmployeeID: 7, OrderDate: new Date(846576e6), RequiredDate: new Date(8489952e5), ShippedDate: new Date(8471808e5), ShipVia: 3, Freight: 26.78, ShipName: "Simons bistro", ShipAddress: "Vinbæltet 34", ShipCity: "Kobenhavn", ShipRegion: null, ShipPostalCode: "1734", ShipCountry: "Denmark", CompanyName: "Simons bistro", Address: "Vinbæltet 34", City: "Kobenhavn", Region: null, PostalCode: "1734", Country: "Denmark" }, { OrderID: 10349, CustomerID: "SPLIR", EmployeeID: 7, OrderDate: new Date(84744e7), RequiredDate: new Date(8498592e5), ShippedDate: new Date(8480448e5), ShipVia: 1, Freight: 8.63, ShipName: "Split Rail Beer & Ale", ShipAddress: "P.O. Box 555", ShipCity: "Lander", ShipRegion: "WY", ShipPostalCode: "82520", ShipCountry: "USA", CompanyName: "Split Rail Beer & Ale", Address: "P.O. Box 555", City: "Lander", Region: "WY", PostalCode: "82520", Country: "USA" }, { OrderID: 10353, CustomerID: "PICCO", EmployeeID: 7, OrderDate: new Date(847872e6), RequiredDate: new Date(8502912e5), ShippedDate: new Date(8489088e5), ShipVia: 3, Freight: 360.63, ShipName: "Piccolo und mehr", ShipAddress: "Geislweg 14", ShipCity: "Salzburg", ShipRegion: null, ShipPostalCode: "5020", ShipCountry: "Austria", CompanyName: "Piccolo und mehr", Address: "Geislweg 14", City: "Salzburg", Region: null, PostalCode: "5020", Country: "Austria" }, { OrderID: 10367, CustomerID: "VAFFE", EmployeeID: 7, OrderDate: new Date(849168e6), RequiredDate: new Date(8515872e5), ShippedDate: new Date(8495136e5), ShipVia: 3, Freight: 13.55, ShipName: "Vaffeljernet", ShipAddress: "Smagsloget 45", ShipCity: "Århus", ShipRegion: null, ShipPostalCode: "8200", ShipCountry: "Denmark", CompanyName: "Vaffeljernet", Address: "Smagsloget 45", City: "Århus", Region: null, PostalCode: "8200", Country: "Denmark" }, { OrderID: 10406, CustomerID: "QUEEN", EmployeeID: 7, OrderDate: new Date(852624e6), RequiredDate: new Date(8562528e5), ShippedDate: new Date(8531424e5), ShipVia: 1, Freight: 108.04, ShipName: "Queen Cozinha", ShipAddress: "Alameda dos Canàrios, 891", ShipCity: "Sao Paulo", ShipRegion: "SP", ShipPostalCode: "05487-020", ShipCountry: "Brazil", CompanyName: "Queen Cozinha", Address: "Alameda dos Canàrios, 891", City: "Sao Paulo", Region: "SP", PostalCode: "05487-020", Country: "Brazil" }, { OrderID: 10262, CustomerID: "RATTC", EmployeeID: 8, OrderDate: new Date(8380188e5), RequiredDate: new Date(840438e6), ShippedDate: new Date(838278e6), ShipVia: 3, Freight: 48.29, ShipName: "Rattlesnake Canyon Grocery", ShipAddress: "2817 Milton Dr.", ShipCity: "Albuquerque", ShipRegion: "NM", ShipPostalCode: "87110", ShipCountry: "USA", CompanyName: "Rattlesnake Canyon Grocery", Address: "2817 Milton Dr.", City: "Albuquerque", Region: "NM", PostalCode: "87110", Country: "USA" }, { OrderID: 10268, CustomerID: "GROSR", EmployeeID: 8, OrderDate: new Date(83871e7), RequiredDate: new Date(8411292e5), ShippedDate: new Date(8389692e5), ShipVia: 3, Freight: 66.29, ShipName: "GROSELLA-Restaurante", ShipAddress: "5ª Ave. Los Palos Grandes", ShipCity: "Caracas", ShipRegion: "DF", ShipPostalCode: "1081", ShipCountry: "Venezuela", CompanyName: "GROSELLA-Restaurante", Address: "5ª Ave. Los Palos Grandes", City: "Caracas", Region: "DF", PostalCode: "1081", Country: "Venezuela" }, { OrderID: 10276, CustomerID: "TORTU", EmployeeID: 8, OrderDate: new Date(8394876e5), RequiredDate: new Date(8406972e5), ShippedDate: new Date(840006e6), ShipVia: 3, Freight: 13.84, ShipName: "Tortuga Restaurante", ShipAddress: "Avda. Azteca 123", ShipCity: "México D.F.", ShipRegion: null, ShipPostalCode: "05033", ShipCountry: "Mexico", CompanyName: "Tortuga Restaurante", Address: "Avda. Azteca 123", City: "México D.F.", Region: null, PostalCode: "05033", Country: "Mexico" }, { OrderID: 10278, CustomerID: "BERGS", EmployeeID: 8, OrderDate: new Date(8398332e5), RequiredDate: new Date(8422524e5), ShippedDate: new Date(8401788e5), ShipVia: 2, Freight: 92.69, ShipName: "Berglunds snabbköp", ShipAddress: "Berguvsvägen  8", ShipCity: "Luleå", ShipRegion: null, ShipPostalCode: "S-958 22", ShipCountry: "Sweden", CompanyName: "Berglunds snabbköp", Address: "Berguvsvägen  8", City: "Luleå", Region: null, PostalCode: "S-958 22", Country: "Sweden" }, { OrderID: 10279, CustomerID: "LEHMS", EmployeeID: 8, OrderDate: new Date(8399196e5), RequiredDate: new Date(8423388e5), ShippedDate: new Date(8401788e5), ShipVia: 2, Freight: 25.83, ShipName: "Lehmanns Marktstand", ShipAddress: "Magazinweg 7", ShipCity: "Frankfurt a.M.", ShipRegion: null, ShipPostalCode: "60528", ShipCountry: "Germany", CompanyName: "Lehmanns Marktstand", Address: "Magazinweg 7", City: "Frankfurt a.M.", Region: null, PostalCode: "60528", Country: "Germany" }, { OrderID: 10286, CustomerID: "QUICK", EmployeeID: 8, OrderDate: new Date(8406108e5), RequiredDate: new Date(84303e7), ShippedDate: new Date(8413884e5), ShipVia: 3, Freight: 229.24, ShipName: "QUICK-Stop", ShipAddress: "Taucherstraße 10", ShipCity: "Cunewalde", ShipRegion: null, ShipPostalCode: "01307", ShipCountry: "Germany", CompanyName: "QUICK-Stop", Address: "Taucherstraße 10", City: "Cunewalde", Region: null, PostalCode: "01307", Country: "Germany" }, { OrderID: 10287, CustomerID: "RICAR", EmployeeID: 8, OrderDate: new Date(8406972e5), RequiredDate: new Date(8431164e5), ShippedDate: new Date(8412156e5), ShipVia: 3, Freight: 12.76, ShipName: "Ricardo Adocicados", ShipAddress: "Av. Copacabana, 267", ShipCity: "Rio de Janeiro", ShipRegion: "RJ", ShipPostalCode: "02389-890", ShipCountry: "Brazil", CompanyName: "Ricardo Adocicados", Address: "Av. Copacabana, 267", City: "Rio de Janeiro", Region: "RJ", PostalCode: "02389-890", Country: "Brazil" }, { OrderID: 10290, CustomerID: "COMMI", EmployeeID: 8, OrderDate: new Date(8411292e5), RequiredDate: new Date(8435484e5), ShippedDate: new Date(841734e6), ShipVia: 1, Freight: 79.7, ShipName: "Comércio Mineiro", ShipAddress: "Av. dos Lusíadas, 23", ShipCity: "Sao Paulo", ShipRegion: "SP", ShipPostalCode: "05432-043", ShipCountry: "Brazil", CompanyName: "Comércio Mineiro", Address: "Av. dos Lusíadas, 23", City: "Sao Paulo", Region: "SP", PostalCode: "05432-043", Country: "Brazil" }, { OrderID: 10301, CustomerID: "WANDK", EmployeeID: 8, OrderDate: new Date(8422524e5), RequiredDate: new Date(8446716e5), ShippedDate: new Date(8429436e5), ShipVia: 2, Freight: 45.08, ShipName: "Die Wandernde Kuh", ShipAddress: "Adenauerallee 900", ShipCity: "Stuttgart", ShipRegion: null, ShipPostalCode: "70563", ShipCountry: "Germany", CompanyName: "Die Wandernde Kuh", Address: "Adenauerallee 900", City: "Stuttgart", Region: null, PostalCode: "70563", Country: "Germany" }, { OrderID: 10305, CustomerID: "OLDWO", EmployeeID: 8, OrderDate: new Date(842598e6), RequiredDate: new Date(8450172e5), ShippedDate: new Date(8448444e5), ShipVia: 3, Freight: 257.62, ShipName: "Old World Delicatessen", ShipAddress: "2743 Bering St.", ShipCity: "Anchorage", ShipRegion: "AK", ShipPostalCode: "99508", ShipCountry: "USA", CompanyName: "Old World Delicatessen", Address: "2743 Bering St.", City: "Anchorage", Region: "AK", PostalCode: "99508", Country: "USA" }, { OrderID: 10310, CustomerID: "THEBI", EmployeeID: 8, OrderDate: new Date(8432028e5), RequiredDate: new Date(845622e6), ShippedDate: new Date(8438076e5), ShipVia: 2, Freight: 17.52, ShipName: "The Big Cheese", ShipAddress: "89 Jefferson Way Suite 2", ShipCity: "Portland", ShipRegion: "OR", ShipPostalCode: "97201", ShipCountry: "USA", CompanyName: "The Big Cheese", Address: "89 Jefferson Way Suite 2", City: "Portland", Region: "OR", PostalCode: "97201", Country: "USA" }, { OrderID: 10318, CustomerID: "ISLAT", EmployeeID: 8, OrderDate: new Date(8441532e5), RequiredDate: new Date(846576e6), ShippedDate: new Date(8444124e5), ShipVia: 2, Freight: 4.73, ShipName: "Island Trading", ShipAddress: "Garden House Crowther Way", ShipCity: "Cowes", ShipRegion: "Isle of Wight", ShipPostalCode: "PO31 7PJ", ShipCountry: "UK", CompanyName: "Island Trading", Address: "Garden House Crowther Way", City: "Cowes", Region: "Isle of Wight", PostalCode: "PO31 7PJ", Country: "UK" }, { OrderID: 10255, CustomerID: "RICSU", EmployeeID: 9, OrderDate: new Date(8371548e5), RequiredDate: new Date(839574e6), ShippedDate: new Date(837414e6), ShipVia: 3, Freight: 148.33, ShipName: "Richter Supermarkt", ShipAddress: "Starenweg 5", ShipCity: "Genève", ShipRegion: null, ShipPostalCode: "1204", ShipCountry: "Switzerland", CompanyName: "Richter Supermarkt", Address: "Grenzacherweg 237", City: "Genève", Region: null, PostalCode: "1203", Country: "Switzerland" }, { OrderID: 10263, CustomerID: "ERNSH", EmployeeID: 9, OrderDate: new Date(8381052e5), RequiredDate: new Date(8405244e5), ShippedDate: new Date(8387964e5), ShipVia: 3, Freight: 146.06, ShipName: "Ernst Handel", ShipAddress: "Kirchgasse 6", ShipCity: "Graz", ShipRegion: null, ShipPostalCode: "8010", ShipCountry: "Austria", CompanyName: "Ernst Handel", Address: "Kirchgasse 6", City: "Graz", Region: null, PostalCode: "8010", Country: "Austria" }, { OrderID: 10324, CustomerID: "SAVEA", EmployeeID: 9, OrderDate: new Date(844758e6), RequiredDate: new Date(8471808e5), ShippedDate: new Date(8449308e5), ShipVia: 1, Freight: 214.27, ShipName: "Save-a-lot Markets", ShipAddress: "187 Suffolk Ln.", ShipCity: "Boise", ShipRegion: "ID", ShipPostalCode: "83720", ShipCountry: "USA", CompanyName: "Save-a-lot Markets", Address: "187 Suffolk Ln.", City: "Boise", Region: "ID", PostalCode: "83720", Country: "USA" }, { OrderID: 10331, CustomerID: "BONAP", EmployeeID: 9, OrderDate: new Date(8454492e5), RequiredDate: new Date(8490816e5), ShippedDate: new Date(8458812e5), ShipVia: 1, Freight: 10.19, ShipName: "Bon app'", ShipAddress: "12, rue des Bouchers", ShipCity: "Marseille", ShipRegion: null, ShipPostalCode: "13008", ShipCountry: "France", CompanyName: "Bon app'", Address: "12, rue des Bouchers", City: "Marseille", Region: null, PostalCode: "13008", Country: "France" }, { OrderID: 10386, CustomerID: "FAMIA", EmployeeID: 9, OrderDate: new Date(850896e6), RequiredDate: new Date(8521056e5), ShippedDate: new Date(8515008e5), ShipVia: 3, Freight: 13.99, ShipName: "Familia Arquibaldo", ShipAddress: "Rua Orós, 92", ShipCity: "Sao Paulo", ShipRegion: "SP", ShipPostalCode: "05442-030", ShipCountry: "Brazil", CompanyName: "Familia Arquibaldo", Address: "Rua Orós, 92", City: "Sao Paulo", Region: "SP", PostalCode: "05442-030", Country: "Brazil" }, { OrderID: 10411, CustomerID: "BOTTM", EmployeeID: 9, OrderDate: new Date(8528832e5), RequiredDate: new Date(8553024e5), ShippedDate: new Date(8538336e5), ShipVia: 3, Freight: 23.65, ShipName: "Bottom-Dollar Markets", ShipAddress: "23 Tsawassen Blvd.", ShipCity: "Tsawassen", ShipRegion: "BC", ShipPostalCode: "T2F 8M4", ShipCountry: "Canada", CompanyName: "Bottom-Dollar Markets", Address: "23 Tsawassen Blvd.", City: "Tsawassen", Region: "BC", PostalCode: "T2F 8M4", Country: "Canada" }, { OrderID: 10475, CustomerID: "SUPRD", EmployeeID: 9, OrderDate: new Date(8583264e5), RequiredDate: new Date(860742e6), ShippedDate: new Date(8601408e5), ShipVia: 1, Freight: 68.52, ShipName: "Suprêmes délices", ShipAddress: "Boulevard Tirou, 255", ShipCity: "Charleroi", ShipRegion: null, ShipPostalCode: "B-6000", ShipCountry: "Belgium", CompanyName: "Suprêmes délices", Address: "Boulevard Tirou, 255", City: "Charleroi", Region: null, PostalCode: "B-6000", Country: "Belgium" }, { OrderID: 10501, CustomerID: "BLAUS", EmployeeID: 9, OrderDate: new Date(8605692e5), RequiredDate: new Date(8629884e5), ShippedDate: new Date(861174e6), ShipVia: 3, Freight: 8.85, ShipName: "Blauer See Delikatessen", ShipAddress: "Forsterstr. 57", ShipCity: "Mannheim", ShipRegion: null, ShipPostalCode: "68306", ShipCountry: "Germany", CompanyName: "Blauer See Delikatessen", Address: "Forsterstr. 57", City: "Mannheim", Region: null, PostalCode: "68306", Country: "Germany" }, { OrderID: 10506, CustomerID: "KOENE", EmployeeID: 9, OrderDate: new Date(8610876e5), RequiredDate: new Date(8635068e5), ShippedDate: new Date(8625564e5), ShipVia: 2, Freight: 21.19, ShipName: "Königlich Essen", ShipAddress: "Maubelstr. 90", ShipCity: "Brandenburg", ShipRegion: null, ShipPostalCode: "14776", ShipCountry: "Germany", CompanyName: "Königlich Essen", Address: "Maubelstr. 90", City: "Brandenburg", Region: null, PostalCode: "14776", Country: "Germany" }, { OrderID: 10538, CustomerID: "BSBEV", EmployeeID: 9, OrderDate: new Date(8636796e5), RequiredDate: new Date(8660988e5), ShippedDate: new Date(863766e6), ShipVia: 3, Freight: 4.87, ShipName: "B's Beverages", ShipAddress: "Fauntleroy Circus", ShipCity: "London", ShipRegion: null, ShipPostalCode: "EC2 5NT", ShipCountry: "UK", CompanyName: "B's Beverages", Address: "Fauntleroy Circus", City: "London", Region: null, PostalCode: "EC2 5NT", Country: "UK" }, { OrderID: 10557, CustomerID: "LEHMS", EmployeeID: 9, OrderDate: new Date(8653212e5), RequiredDate: new Date(8665308e5), ShippedDate: new Date(8655804e5), ShipVia: 2, Freight: 96.72, ShipName: "Lehmanns Marktstand", ShipAddress: "Magazinweg 7", ShipCity: "Frankfurt a.M.", ShipRegion: null, ShipPostalCode: "60528", ShipCountry: "Germany", CompanyName: "Lehmanns Marktstand", Address: "Magazinweg 7", City: "Frankfurt a.M.", Region: null, PostalCode: "60528", Country: "Germany" }, { OrderID: 10566, CustomerID: "BLONP", EmployeeID: 9, OrderDate: new Date(8660988e5), RequiredDate: new Date(868518e6), ShippedDate: new Date(8666172e5), ShipVia: 1, Freight: 88.4, ShipName: "Blondel père et fils", ShipAddress: "24, place Kléber", ShipCity: "Strasbourg", ShipRegion: null, ShipPostalCode: "67000", ShipCountry: "France", CompanyName: "Blondesddsl père et fils", Address: "24, place Kléber", City: "Strasbourg", Region: null, PostalCode: "67000", Country: "France" }];
    };
    NorthwindService.prototype.getStacks = function () {
        return [{ Symbol: "DDNDKJ", Open: "6,088.20", High: "6,114.55", Low: "6,084.15", Close: "12.5", Change: "0.21", TradedVolume: "79.94", TradedValue: "355.7", WeekHigh: "6,114.55", WeekLow: "4,770.35", yearChange: "14.37", monthChange: "9.87" }, { Symbol: "FKLND", Open: "2,042.00", High: "2,108.40", Low: "2,042.00", Close: "77.8", Change: "3.85", TradedVolume: "0.94", TradedValue: "19.57", WeekHigh: "2,108.40", WeekLow: "1,526.40", yearChange: "23.7", monthChange: "10.55" }, { Symbol: "DSNNS", Open: "740", High: "772.3", Low: "740", Close: "26.6", Change: "3.58", TradedVolume: "3.82", TradedValue: "29.08", WeekHigh: "772.3", WeekLow: "496.4", yearChange: "47.28", monthChange: "23.20" }, { Symbol: "MLSSD", Open: "939.5", High: "958.2", Low: "939.5", Close: "22.1", Change: "2.36", TradedVolume: "1.18", TradedValue: "11.26", WeekHigh: "998.85", WeekLow: "553", yearChange: "47.28", monthChange: "9.87" }, { Symbol: "LKSNDL", Open: "4,641.10", High: "4,749.75", Low: "4,641.10", Close: "99.25", Change: "2.14", TradedVolume: "0.22", TradedValue: "10.47", WeekHigh: "5,050.00", WeekLow: "3,432.40", yearChange: "61.24", monthChange: "11.63" }, { Symbol: "NKJSN", Open: "445", High: "451.9", Low: "442", Close: "6.95", Change: "1.57", TradedVolume: "1.07", TradedValue: "4.78", WeekHigh: "578.4", WeekLow: "370.8", yearChange: "29.67", monthChange: "4.45" }, { Symbol: "LNKNDS", Open: "298.5", High: "303.95", Low: "298.5", Close: "4.25", Change: "1.42", TradedVolume: "2.12", TradedValue: "6.42", WeekHigh: "386.25", WeekLow: "289.4", yearChange: "-9.42", monthChange: "3.13" }, { Symbol: "NSDN", Open: "400", High: "403", Low: "397.95", Close: "4.6", Change: "1.16", TradedVolume: "1.7", TradedValue: "6.81", WeekHigh: "435", WeekLow: "300", yearChange: "-5.40", monthChange: "-1.52" }, { Symbol: "SDMSMD", Open: "162.75", High: "164.85", Low: "162.4", Close: "1.85", Change: "1.14", TradedVolume: "1.18", TradedValue: "1.94", WeekHigh: "207.95", WeekLow: "140.3", yearChange: "23.21", monthChange: "0.79" }, { Symbol: "SMMSDS", Open: "75.4", High: "76.45", Low: "75.2", Close: "0.75", Change: "0.99", TradedVolume: "14.44", TradedValue: "10.95", WeekHigh: "106.7", WeekLow: "58", yearChange: "-6", monthChange: "11.78" }, { Symbol: "MSMDM", Open: "2,291.00", High: "2,315.00", Low: "2,291.00", Close: "20.4", Change: "0.89", TradedVolume: "1.09", TradedValue: "25.1", WeekHigh: "2,551.70", WeekLow: "1,802.30", yearChange: "26.37", monthChange: "15.28" }, { Symbol: "MLKSDM", Open: "329.7", High: "329.7", Low: "327.2", Close: "2.65", Change: "0.81", TradedVolume: "1.88", TradedValue: "6.16", WeekHigh: "355", WeekLow: "227.4", yearChange: "25.55", monthChange: "14.38" }, { Symbol: "BDSBD", Open: "730.5", High: "736.75", Low: "727.15", Close: "5.55", Change: "0.76", TradedVolume: "0.33", TradedValue: "2.38", WeekHigh: "736.75", WeekLow: "524.1", yearChange: "26.87", monthChange: "8.65" }, { Symbol: "SKJDB", Open: "421.5", High: "424.9", Low: "416", Close: "2.95", Change: "0.71", TradedVolume: "2.51", TradedValue: "10.5", WeekHigh: "789.35", WeekLow: "315", yearChange: "35.88", monthChange: "15.32" }, { Symbol: "VDSVH", Open: "505", High: "509", Low: "503", Close: "3.35", Change: "0.66", TradedVolume: "1.01", TradedValue: "5.14", WeekHigh: "509.5", WeekLow: "279", yearChange: "-40.65", monthChange: "13.13" }, { Symbol: "DSJBD", Open: "1,730.00", High: "1,739.95", Low: "1,721.20", Close: "10.05", Change: "0.58", TradedVolume: "1.14", TradedValue: "19.74", WeekHigh: "1,739.95", WeekLow: "1,051.00", yearChange: "61.28", monthChange: "31.47" }, { Symbol: "BSBDBD", Open: "1,161.00", High: "1,172.00", Low: "1,161.00", Close: "6.25", Change: "0.54", TradedVolume: "0.81", TradedValue: "9.51", WeekHigh: "1,232.00", WeekLow: "767.4", yearChange: "37.73", monthChange: "23.04" }, { Symbol: "BDBSJ", Open: "770", High: "776", Low: "768.65", Close: "4.05", Change: "0.53", TradedVolume: "0.82", TradedValue: "6.31", WeekHigh: "920", WeekLow: "659.2", yearChange: "43.90", monthChange: "16.66" }, { Symbol: "NSDJN", Open: "106", High: "106.8", Low: "105.35", Close: "0.55", Change: "0.52", TradedVolume: "4.75", TradedValue: "5.04", WeekHigh: "137.1", WeekLow: "86.9", yearChange: "2.89", monthChange: "9.53" }, { Symbol: "NDSS", Open: "3,000.30", High: "3,040.00", Low: "3,000.30", Close: "14.9", Change: "0.49", TradedVolume: "0.03", TradedValue: "0.76", WeekHigh: "3,510.00", WeekLow: "2,210.00", yearChange: "-9.36", monthChange: "17.10" }, { Symbol: "NKDN", Open: "126", High: "128", Low: "126", Close: "0.6", Change: "0.47", TradedVolume: "1.61", TradedValue: "2.05", WeekHigh: "202.8", WeekLow: "121.85", yearChange: "22.41", monthChange: "10.60" }];
    };
    NorthwindService.prototype.getEvents = function () {
        return [{ Id: 100, Subject: "Bering Sea Gold", StartTime: new Date(2014, 4, 5, 10, 0), EndTime: new Date(2014, 4, 5, 11, 0), Description: "", AllDay: false, Recurrence: false, Categorize: "1,3", RoomId: 1, OwnerId: 1 }, { Id: 101, Subject: "Bering Sea Gold", StartTime: new Date(2014, 4, 2, 16, 0), EndTime: new Date(2014, 4, 2, 17, 30), Description: "", AllDay: false, Recurrence: false, Categorize: "2,5", RoomId: 2, OwnerId: 3 }, { Id: 102, Subject: "What Happened Next?", StartTime: new Date(2014, 4, 4, 1, 0), EndTime: new Date(2014, 4, 4, 1, 30), Description: "", AllDay: false, Recurrence: false, Categorize: "3,6", RoomId: 1, OwnerId: 5 }, { Id: 103, Subject: "What Happened Next?", StartTime: new Date(2014, 4, 5, 12, 30), EndTime: new Date(2014, 4, 5, 15, 0), Description: "", AllDay: false, Recurrence: false, Categorize: "4,1", RoomId: 1, OwnerId: 1 }, { Id: 104, Subject: "Daily Planet", StartTime: new Date(2014, 4, 3, 1, 0), EndTime: new Date(2014, 4, 3, 2, 0), Description: "", AllDay: false, Recurrence: false, Categorize: "1,3,6", RoomId: 2, OwnerId: 3 }, { Id: 105, Subject: "Alaska: The Last Frontier", StartTime: new Date(2014, 4, 3, 4, 0), EndTime: new Date(2014, 4, 3, 5, 30), Description: "", AllDay: false, Recurrence: false, Categorize: "2,3,4,5", RoomId: 1, OwnerId: 5 }, { Id: 106, Subject: "Deadest Catch", StartTime: new Date(2014, 4, 3, 16, 0), EndTime: new Date(2014, 4, 3, 17, 0), Description: "", AllDay: false, Recurrence: false, Categorize: "2,4,6,1", RoomId: 1, OwnerId: 1 }, { Id: 107, Subject: "MayDay", StartTime: new Date(2014, 3, 30, 6, 30), EndTime: new Date(2014, 3, 30, 7, 30), Description: "", AllDay: false, Recurrence: false, Categorize: "5,3", RoomId: 2, OwnerId: 3 }, { Id: 108, Subject: "How Its Made", StartTime: new Date(2014, 4, 1, 6, 0), EndTime: new Date(2014, 4, 1, 7, 30), Description: "", AllDay: false, Recurrence: true, RecurrenceRule: "FREQ=WEEKLY;BYDAY=MO,TU;INTERVAL=1;COUNT=15", Categorize: "2,3,6", RoomId: 1, OwnerId: 5 }, { Id: 109, Subject: "Bering Sea Gold", StartTime: new Date(2014, 4, 2, 6, 0), EndTime: new Date(2014, 4, 2, 8, 0), Description: "", AllDay: false, Recurrence: true, RecurrenceRule: "FREQ=DAILY;INTERVAL=2;COUNT=10", Categorize: "3", RoomId: 1, OwnerId: 1 }, { Id: 110, Subject: "MoonShiners", StartTime: new Date(2014, 4, 2, 2, 0), EndTime: new Date(2014, 4, 2, 2, 30), Description: "", AllDay: false, Recurrence: true, RecurrenceRule: "FREQ=DAILY;INTERVAL=1;COUNT=5", Categorize: "6,2,5", RoomId: 2, OwnerId: 3 }];
    };
    NorthwindService.prototype.getTasks = function () {
        return [{ Id: 1, Status: "Open", Summary: "Analyze the new requirements gathered from the customer.", Type: "Story", Priority: "Low", Tags: "Analyze,Customer", Estimate: 3.5, Assignee: "Nancy Davloio", ImgUrl: "app/content/images/kanban/1.png", RankId: 1 }, { Id: 2, Status: "InProgress", Summary: "Improve application performance", Type: "Improvement", Priority: "Normal", Tags: "Improvement", Estimate: 6, Assignee: "Andrew Fuller", ImgUrl: "app/content/images/kanban/2.png", RankId: 1 }, { Id: 3, Status: "Open", Summary: "Arrange a web meeting with the customer to get new requirements.", Type: "Others", Priority: "Critical", Tags: "Meeting", Estimate: 5.5, Assignee: "Janet Leverling", ImgUrl: "app/content/images/kanban/3.png", RankId: 2 }, { Id: 4, Status: "InProgress", Summary: "Fix the issues reported in the IE browser.", Type: "Bug", Priority: "Release Breaker", Tags: "IE", Estimate: 2.5, Assignee: "Janet Leverling", ImgUrl: "app/content/images/kanban/3.png", RankId: 2 }, { Id: 5, Status: "Testing", Summary: "Fix the issues reported by the customer.", Type: "Bug", Priority: "Low", Tags: "Customer", Estimate: "3.5", Assignee: "Steven walker", ImgUrl: "app/content/images/kanban/5.png", RankId: 1 }, { Id: 6, Status: "Close", Summary: "Arrange a web meeting with the customer to get the login page requirements.", Type: "Others", Priority: "Low", Tags: "Meeting", Estimate: 2, Assignee: "Michael Suyama", ImgUrl: "app/content/images/kanban/6.png", RankId: 1 }, { Id: 7, Status: "Validate", Summary: "Validate new requirements", Type: "Improvement", Priority: "Low", Tags: "Validation", Estimate: 1.5, Assignee: "Robert King", ImgUrl: "app/content/images/kanban/7.png", RankId: 1 }, { Id: 8, Status: "Close", Summary: "Login page validation", Type: "Story", Priority: "Release Breaker", Tags: "Validation,Fix", Estimate: 2.5, Assignee: "Laura Callahan", ImgUrl: "app/content/images/kanban/8.png", RankId: 2 }, { Id: 9, Status: "Testing", Summary: "Fix the issues reported in Safari browser.", Type: "Bug", Priority: "Release Breaker", Tags: "Fix,Safari", Estimate: 1.5, Assignee: "Nancy Davloio", ImgUrl: "app/content/images/kanban/1.png", RankId: 2 }, { Id: 10, Status: "Close", Summary: "Test the application in the IE browser.", Type: "Story", Priority: "Low", Tags: "Testing,IE", Estimate: 5.5, Assignee: "Margaret hamilt", ImgUrl: "app/content/images/kanban/4.png", RankId: 3 }, { Id: 11, Status: "Validate", Summary: "Validate the issues reported by the customer.", Type: "Story", Priority: "High", Tags: "Validation,Fix", Estimate: 1, Assignee: "Steven walker", ImgUrl: "app/content/images/kanban/5.png", RankId: 1 }, { Id: 12, Status: "Testing", Summary: "Check Login page validation.", Type: "Story", Priority: "Release Breaker", Tags: "Testing", Estimate: 0.5, Assignee: "Michael Suyama", ImgUrl: "app/content/images/kanban/6.png", RankId: 3 }, { Id: 13, Status: "Open", Summary: "API improvements.", Type: "Improvement", Priority: "High", Tags: "Grid,API", Estimate: 3.5, Assignee: "Robert King", ImgUrl: "app/content/images/kanban/7.png", RankId: 3 }, { Id: 14, Status: "InProgress", Summary: "Add responsive support to application", Type: "Epic", Priority: "Critical", Tags: "Responsive", Estimate: 6, Assignee: "Laura Callahan", ImgUrl: "app/content/images/kanban/8.png", RankId: 3 }, { Id: 15, Status: "Open", Summary: "Show the retrieved data from the server in grid control.", Type: "Story", Priority: "High", Tags: "Database,SQL", Estimate: 5.5, Assignee: "Margaret hamilt", ImgUrl: "app/content/images/kanban/4.png", RankId: 4 }, { Id: 16, Status: "InProgress", Summary: "Fix cannot open user’s default database SQL error.", Priority: "Critical", Type: "Bug", Tags: "Database,Sql2008", Estimate: 2.5, Assignee: "Janet Leverling", ImgUrl: "app/content/images/kanban/3.png", RankId: 4 }, { Id: 17, Status: "Testing", Summary: "Fix the issues reported in data binding.", Type: "Story", Priority: "Normal", Tags: "Databinding", Estimate: "3.5", Assignee: "Janet Leverling", ImgUrl: "app/content/images/kanban/3.png", RankId: 4 }, { Id: 18, Status: "Close", Summary: "Analyze SQL server 2008 connection.", Type: "Story", Priority: "Release Breaker", Tags: "Grid,Sql", Estimate: 2, Assignee: "Andrew Fuller", ImgUrl: "app/content/images/kanban/2.png", RankId: 4 }, { Id: 19, Status: "Validate", Summary: "Validate databinding issues.", Type: "Story", Priority: "Low", Tags: "Validation", Estimate: 1.5, Assignee: "Margaret hamilt", ImgUrl: "app/content/images/kanban/4.png", RankId: 1 }, { Id: 20, Status: "Close", Summary: "Analyze grid control.", Type: "Story", Priority: "High", Tags: "Analyze", Estimate: 2.5, Assignee: "Margaret hamilt", ImgUrl: "app/content/images/kanban/4.png", RankId: 5 }, { Id: 21, Status: "Close", Summary: "Stored procedure for initial data binding of the grid.", Type: "Others", Priority: "Release Breaker", Tags: "Databinding", Estimate: 1.5, Assignee: "Steven walker", ImgUrl: "app/content/images/kanban/5.png", RankId: 6 }, { Id: 22, Status: "Close", Summary: "Analyze stored procedures.", Type: "Story", Priority: "Release Breaker", Tags: "Procedures", Estimate: 5.5, Assignee: "Janet Leverling", ImgUrl: "app/content/images/kanban/3.png", RankId: 7 }, { Id: 23, Status: "Validate", Summary: "Validate editing issues.", Type: "Story", Priority: "Critical", Tags: "Editing", Estimate: 1, Assignee: "Nancy Davloio", ImgUrl: "app/content/images/kanban/1.png", RankId: 1 }, { Id: 24, Status: "Testing", Summary: "Test editing functionality.", Type: "Story", Priority: "Normal", Tags: "Editing,Test", Estimate: 0.5, Assignee: "Nancy Davloio", ImgUrl: "app/content/images/kanban/1.png", RankId: 5 }, { Id: 25, Status: "Open", Summary: "Enhance editing functionality.", Type: "Improvement", Priority: "Low", Tags: "Editing", Estimate: 3.5, Assignee: "Andrew Fuller", ImgUrl: "app/content/images/kanban/2.png", RankId: 5 }, { Id: 26, Status: "InProgress", Summary: "Improve the performance of the editing functionality.", Type: "Epic", Priority: "High", Tags: "Performance", Estimate: 6, Assignee: "Nancy Davloio", ImgUrl: "app/content/images/kanban/1.png", RankId: 5 }, { Id: 27, Status: "Open", Summary: "Arrange web meeting with the customer to show editing demo.", Type: "Others", Priority: "High", Tags: "Meeting,Editing", Estimate: 5.5, Assignee: "Steven walker", ImgUrl: "app/content/images/kanban/5.png", RankId: 6 }, { Id: 28, Status: "InProgress", Summary: "Fix editing issues reported in chrome", Type: "Bug", Priority: "Normal", Tags: "Editing,Customer", Estimate: 2.5, Assignee: "Janet Leverling", ImgUrl: "app/content/images/kanban/3.png", RankId: 6 }, { Id: 29, Status: "Testing", Summary: "Fix the editing issues reported by the customer.", Type: "Bug", Priority: "Low", Tags: "Editing,Fix", Estimate: "3.5", Assignee: "Janet Leverling", ImgUrl: "app/content/images/kanban/3.png", RankId: 6 }, { Id: 30, Status: "Close", Summary: "Arrange a web meeting with the customer to get editing requirements.", Type: "Others", Priority: "Critical", Tags: "Meeting,Editing", Estimate: 2, Assignee: "Steven walker", ImgUrl: "app/content/images/kanban/5.png", RankId: 8 }];
    };
    return NorthwindService;
}());

//# sourceMappingURL=northwind-service.js.map

/***/ })

},[324]);
//# sourceMappingURL=main.js.map