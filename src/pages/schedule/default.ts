import { Component } from '@angular/core';

@Component({
    templateUrl: 'default.html'
})
export class ScheduleDefaultPage {
    constructor() {
    }
    onCustomization(args) {
        if (args.model.currentView() == "month" && ((args.type == "create") || (args.type == "actionComplete" && (args.requestType == "viewNavigate" || args.requestType == "dateNavigate")))) {
            let elelist: Element[] = [].slice.call(document.querySelectorAll('.e-headerdaydisplay'));
            for (let ele of elelist) {
                (ele as HTMLElement).innerText = (ele as HTMLElement).innerText.substr(0, 3);
            }
        }
    }
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
