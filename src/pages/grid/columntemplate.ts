import { Component } from '@angular/core';
import {NorthwindService } from '../../providers/northwind-service/northwind-service';

@Component({
  selector: 'page-grid',
  templateUrl: 'columntemplate.html',
    providers: [NorthwindService]
})
export class GridTemplatePage {
    public gridData;
  constructor(public northwindService: NorthwindService) {
        this.gridData = northwindService.getEmployees();
    }     
}