export class Product {
    control: string;
    samples: any;
    component: any;
    id: any;
    constructor(control, samples, component, id) {
        this.control = control;
        this.samples = samples;
        this.component = component;
        this.id = id;
    }
}
import { Component, ViewChild } from '@angular/core';
import { Title }from '@angular/platform-browser';
import { Nav, Platform, MenuController,LoadingController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GridDefaultPage } from '../pages/grid/default';
import { GridSortingPage } from '../pages/grid/sorting';
import { GridFilteringPage } from '../pages/grid/filtering';
import { GridTemplatePage } from '../pages/grid/columntemplate';
import { LineChartPage } from '../pages/chart/line';
import { PieChartPage } from '../pages/chart/pie';
import { ColumnChartPage } from '../pages/chart/column';
import { BarChartPage } from '../pages/chart/bar';
import { DoughnutChartPage } from '../pages/chart/doughnut';
import { CircularDefaultPage } from '../pages/circulargauge/default';
import { CircularPointerPage } from '../pages/circulargauge/pointer';
import { LinearDefaultPage } from '../pages/lineargauge/default';
import { DigitalDefaultPage } from '../pages/digitalgauge/default';
import { RangeDefaultPage } from '../pages/rangenavigator/default';
import { RangeNumericPage } from '../pages/rangenavigator/numeric';
import { SparklineDefaultPage } from '../pages/sparkline/default';
import { BulletgraphDefaultPage } from '../pages/bulletgraph/default';
import { BulletgraphLocalDataPage } from '../pages/bulletgraph/local';
import { ScheduleDefaultPage } from '../pages/schedule/default';
import { ScheduleBlockIntervalsPage } from '../pages/schedule/blockintervals';
import { ScheduleTimelineViewPage } from '../pages/schedule/horizontal';
import { ScheduleMultipleResourcePage } from '../pages/schedule/multipleresource';
import { ScheduleTimescalePage } from '../pages/schedule/timescale';
import { BarcodePage } from '../pages/barcode/barcode';
import { HeatMapDefaultPage } from '../pages/heatmap/default';
import { HeatMapLegendPage } from '../pages/heatmap/legend';
import { HeatMapTablePage } from '../pages/heatmap/tabledatabinding';
import { Analytics } from './analytics';
import * as $ from 'jquery';
window['jQuery'] = $;
window['$'] = $;
declare var jQuery: any;
declare var ej: any;
@Component({
    templateUrl: 'app.html',
    providers: [Analytics]
})
export class MyApp {
    @ViewChild(Nav) nav: Nav;
    rootPage: any = GridDefaultPage;
    pages: Array<Product>;
    pageTitle: string;
    analyticsLogmodel: any;
    constructor(public platform: Platform, public statusBar: StatusBar,public loading: LoadingController, public sidemenu: MenuController, public splashScreen: SplashScreen,public titleService:Title,private analyticsComp: Analytics ) {
        this.initializeApp();
        ej.Scroller.prototype.defaults.enabled=false;
        this.pages = [
            new Product('Grid', ['Default', 'Sorting', 'Filtering', 'Column Template'], [GridDefaultPage, GridSortingPage, GridFilteringPage, GridTemplatePage], 0),
            new Product('Chart', ['Line', 'Pie', 'Column', 'Bar', 'Doughnut'], [LineChartPage, PieChartPage, ColumnChartPage, BarChartPage, DoughnutChartPage], 1),
            new Product('Circular Gauge', ['Default', 'Pointer'], [CircularDefaultPage, CircularPointerPage], 2),
            new Product('Digital Gauge', ['Default'], [DigitalDefaultPage], 3),
            new Product('Linear Gauge', ['Default'], [LinearDefaultPage], 4),
            new Product('Range Navigator', ['Default', 'Numeric'], [RangeDefaultPage, RangeNumericPage], 5),
            new Product('Sparkline', ['Default'], [SparklineDefaultPage], 6),
            new Product('Bullet Graph', ['Default','Local Data'], [BulletgraphDefaultPage,BulletgraphLocalDataPage], 7),
            new Product('Schedule', ['Default','Timeline View','Multiple Resource','Block Intervals','Time Scale'], [ScheduleDefaultPage,ScheduleTimelineViewPage,ScheduleMultipleResourcePage,ScheduleBlockIntervalsPage,ScheduleTimescalePage], 8),
            new Product('Barcode', ['Default'], [BarcodePage], 9),
            new Product('HeatMap', ['Default',"Legend","Table Binding"], [HeatMapDefaultPage,HeatMapLegendPage,HeatMapTablePage], 10),
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
    initializeApp() {
        this.platform.ready().then(() => {
            jQuery("#list-0_container li").eq(0).addClass("e-state-active");
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }         
    openPage(page, sample) {
        let loader = this.loading.create({
            spinner:'bubbles',
        });     
        loader.present();
        jQuery(".control-list .e-lv .e-state-active").removeClass("e-state-active")
        let listID = 'list-' + page.id;
        let obj = jQuery("#" + listID).data("ejListView");
        let index = obj.model.selectedItemIndex;
        if(this.nav && this.nav.getActive().component.name != page.component[index].name) {
          this.nav.setRoot(page.component[index]);
          obj.setActive(index);
        }
        this.pageTitle="Essential JavaScript for Ionic | " +page.control +" | "+ page.samples[index];
        this.titleService.setTitle(this.pageTitle);
        loader.dismiss();
        this.sidemenu.close();
    }

    // To get cookie value
    getCookieValue(cookieName) {
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
    }

}