import { Component, ViewChild } from '@angular/core';
import { EJComponents } from 'ej-angular2/src/ej/core';
@Component({
  templateUrl: 'barcode.html'
})
export class BarcodePage {
  data: any;
  fieldsvalues: any;
  @ViewChild('barcode') barcode : EJComponents<any, any>;
  constructor() {
    this.data = [
      { text: "QRBarcode" },
      { text: "DataMatrix" },
      { text: "Codabar" },
      { text: "Code11" },
      { text: "Code128a" }
    ];
    this.fieldsvalues = { dataSource: this.data, text: "text" };

  }
  onSelect(event) {
    this.barcode.widget.setModel({ symbologyType: event.text });
  }
}
