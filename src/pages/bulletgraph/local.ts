import { Component } from '@angular/core';
@Component({
    templateUrl: 'local.html'
})

export class BulletgraphLocalDataPage {
    caption: any;
    range: any;
    enableTabScroll: any;
    quantitativescale: any;
    constructor() {
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
}