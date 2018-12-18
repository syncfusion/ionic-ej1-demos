import { Component } from '@angular/core';
import {NorthwindService } from '../../providers/northwind-service/northwind-service';

@Component({
  selector: 'page-grid',
  templateUrl: 'sorting.html',
    providers: [NorthwindService]
})
export class GridSortingPage {
    public gridData;
  constructor(public northwindService: NorthwindService) {
        this.gridData = northwindService.getOrders();
    }     
}