import { Component } from '@angular/core'; 

@Component({
    templateUrl: 'tabledatabinding.html'
})
export class HeatMapTablePage {
   margin: Object;
    itemsSource: Array<Object>;
    colorMappingCollection: Array<Object>;
    itemsMapping: Object;
    label: Object;
    legendLabel: Object;
    legendCollection: Array<Object>;
    isResponsive: Boolean;
    getValue: Function;
    constructor() {
        this.margin = { 'left': 25, 'right': 25 };
        let itemsSource = [];
         let colorMappingCollection = [
               { value: 0, color: '#8ec8f8', label: { text: '0' } },
                { value: 100, color: '#0d47a1', label: { text: '100' } }
            ];
        let rows =  ["Adna","Cory","Nora","Orla","Urvi", "Pele"];
      for (let i = 0; i < 6; i++) {
                itemsSource.push({
                    ProductName: rows[i], Y2010: getValue(), Y2011: getValue(), 
                    Y2012: getValue(), Y2013: getValue(), Y2014: getValue()
                });
            }
        this.itemsSource = itemsSource;
        this.colorMappingCollection = colorMappingCollection;
        this.itemsMapping = {
            headerMapping: { 'propertyName': 'ProductName', 'displayName': 'Product Name'  },
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
}
