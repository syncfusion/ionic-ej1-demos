import { Component } from '@angular/core';

@Component({
    templateUrl: 'default.html'
})
export class DigitalDefaultPage {
    gaugeItem: any;
    constructor() {
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
}