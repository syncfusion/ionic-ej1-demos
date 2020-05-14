import { Component } from '@angular/core'; 

@Component({
    templateUrl: 'legend.html'
})
export class HeatMapLegendPage {
 margin: Object;
    itemsSource: Array<Object>;
    colorMappingCollection: Array<Object>;
    itemsMapping: Object;
    legendMode: Object;
    label: Object;
    legendLabel: Object;
    legendCollection: Array<Object>;
    isResponsive: boolean;
    getValue: Function;
    constructor() {
        this.margin = { 'left': 25, 'right': 25 };
        let itemsSource = [];
         let colorMappingCollection = [
                { value: 0, color: '#fe0002', label: { text: 'Poor' } },
                { value: 3, color: '#ffff01', label: { text: 'Average' } },
                { value: 6, color: '#13ab11', label: { text: 'Good' } },
                { value: 10, color: '#005ba2', label: { text: 'Excellent' } }
            ];
        let rows =  ["Adna", "Nora", "Orla", "Urvi", "Pele","Viva"];
         for (let i = 0; i < rows.length; i++) {
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
}
