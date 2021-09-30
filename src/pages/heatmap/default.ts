import { Component } from '@angular/core';
@Component({
  templateUrl: 'default.html'
})
export class HeatMapDefaultPage {
    margin: Object;
    itemsSource: Array<Object>;
    itemsMapping: Object;
    label: Object;
    legendLabel: Object;
    isResponsive: boolean;
  constructor() {
        this.margin = { 'left': 25, 'right': 25 };
        let itemsSource = [];
        let columns = ["Adna", "Nora", "Orla", "Urvi", "Pele"]
        for (let i = 0; i < columns.length; i++) {
            for (let j = 0; j < 6; j++) {
                let value = Math.floor((Math.random() * 100) + 1);
                itemsSource.push({ ProductName: columns[i], Year: "Y" + (2011 + j), Value: value })
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
}