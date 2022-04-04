import {Component} from '@angular/core';

@Component({
    templateUrl: 'timescale.html',
    selector: 'page-schedule'
})

export class ScheduleTimescalePage {
    constructor() { }
    public majorslot = 60;
    public minorslotcount = 5;
    public currentdate = new Date(2017, 5, 5);
    public scheduleData = [
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
