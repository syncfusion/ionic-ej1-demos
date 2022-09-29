import { Component } from '@angular/core';
@Component({
    templateUrl: 'default.html'
})

export class BulletgraphDefaultPage {
    caption: any;
    enableTabScroll: any;
    quantitativescale: any;
    caption2: any;
    quantitativescale2: any;
    qualitiveRange2: any;
    qualitiveRange4: any;
    caption3: any;
    quantitativescale3: any;
    caption4: any;
    quantitativescale4: any;
    qualitiveRange3: any;
    constructor() {
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
}
