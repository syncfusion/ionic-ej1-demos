import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';
import * as $ from 'jquery';
window['jQuery'] = $;
window['$'] = $;

//Syncfusion Angular components

import { EJ_GRID_COMPONENTS } from 'ej-angular2/src/ej/grid.component';
import { EJ_CHART_COMPONENTS } from 'ej-angular2/src/ej/chart.component';
import { EJ_CIRCULARGAUGE_COMPONENTS } from 'ej-angular2/src/ej/circulargauge.component';
import { EJ_DIGITALGAUGE_COMPONENTS } from 'ej-angular2/src/ej/digitalgauge.component';
import { EJ_LINEARGAUGE_COMPONENTS } from 'ej-angular2/src/ej/lineargauge.component';
import { EJ_RANGENAVIGATOR_COMPONENTS } from 'ej-angular2/src/ej/rangenavigator.component';
import { EJ_SPARKLINE_COMPONENTS } from 'ej-angular2/src/ej/sparkline.component';
import { EJ_RADIALMENU_COMPONENTS } from 'ej-angular2/src/ej/radialmenu.component';
import { EJ_RADIALSLIDER_COMPONENTS } from 'ej-angular2/src/ej/radialslider.component';
import { EJ_BULLETGRAPH_COMPONENTS } from 'ej-angular2/src/ej/bulletgraph.component';
import { EJ_TREEGRID_COMPONENTS } from 'ej-angular2/src/ej/treegrid.component';
import { EJ_SCHEDULE_COMPONENTS } from 'ej-angular2/src/ej/schedule.component';
import { EJ_BARCODE_COMPONENTS } from 'ej-angular2/src/ej/barcode.component';
import { EJ_LISTVIEW_COMPONENTS } from 'ej-angular2/src/ej/listview.component';
import { EJ_ACCORDION_COMPONENTS } from 'ej-angular2/src/ej/accordion.component';

import { EJ_RTE_COMPONENTS } from 'ej-angular2/src/ej/rte.component';
import { EJ_DROPDOWNLIST_COMPONENTS } from 'ej-angular2/src/ej/dropdownlist.component';
import { EJ_HEATMAP_COMPONENTS } from 'ej-angular2/src/ej/heatmap.component';
import { EJ_HEATMAPLEGEND_COMPONENTS } from 'ej-angular2/src/ej/heatmaplegend.component';
import { EJTemplateDirective } from 'ej-angular2/src/ej/template';

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
import { HeaderComponent } from './header.component';
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
@NgModule({
  declarations: [
    EJ_GRID_COMPONENTS, EJ_CHART_COMPONENTS, EJ_CIRCULARGAUGE_COMPONENTS, EJ_DIGITALGAUGE_COMPONENTS, EJ_LINEARGAUGE_COMPONENTS,
    EJ_RANGENAVIGATOR_COMPONENTS, EJ_SPARKLINE_COMPONENTS, EJ_RADIALMENU_COMPONENTS, EJ_RADIALSLIDER_COMPONENTS,
    EJ_BULLETGRAPH_COMPONENTS, EJ_TREEGRID_COMPONENTS, EJ_SCHEDULE_COMPONENTS, EJ_BARCODE_COMPONENTS,
    EJ_ACCORDION_COMPONENTS, EJ_LISTVIEW_COMPONENTS, EJ_RTE_COMPONENTS, EJ_DROPDOWNLIST_COMPONENTS,
    EJTemplateDirective, EJ_HEATMAP_COMPONENTS, EJ_HEATMAPLEGEND_COMPONENTS,
    MyApp,
    HeaderComponent,
    GridDefaultPage,
    GridSortingPage,
    GridFilteringPage,
    GridTemplatePage,
    LineChartPage,
    PieChartPage,
    ColumnChartPage,
    BarChartPage,
    DoughnutChartPage,
    CircularDefaultPage,
    CircularPointerPage,
    LinearDefaultPage,
    DigitalDefaultPage,
    RangeDefaultPage,
    RangeNumericPage,
    SparklineDefaultPage,
    BulletgraphDefaultPage,
    BulletgraphLocalDataPage,
    ScheduleDefaultPage,
    ScheduleBlockIntervalsPage,
    ScheduleTimelineViewPage,
    ScheduleMultipleResourcePage,
    ScheduleTimescalePage,
    BarcodePage,
    HeatMapDefaultPage,
    HeatMapLegendPage,
    HeatMapTablePage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HeaderComponent,
    GridDefaultPage,
    GridSortingPage,
    GridFilteringPage,
    GridTemplatePage,
    LineChartPage,
    PieChartPage,
    ColumnChartPage,
    BarChartPage,
    DoughnutChartPage,
    CircularDefaultPage,
    CircularPointerPage,
    LinearDefaultPage,
    DigitalDefaultPage,
    RangeDefaultPage,
    RangeNumericPage,
    SparklineDefaultPage,
    BulletgraphDefaultPage,
    BulletgraphLocalDataPage,
    ScheduleDefaultPage,
    ScheduleBlockIntervalsPage,
    ScheduleTimelineViewPage,
    ScheduleMultipleResourcePage,
    ScheduleTimescalePage,
    BarcodePage,
    HeatMapDefaultPage,
    HeatMapLegendPage,
    HeatMapTablePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Title,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    { provide: ErrorHandler, useClass: IonicErrorHandler },
  ]
})
export class AppModule {}
