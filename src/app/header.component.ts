import {Component, Input} from '@angular/core';

@Component({
  selector: 'header-title',
  template: `<ion-header><ion-toolbar id="right-header"><button ion-button class="menuButton" menuToggle><ion-icon name="menu"></ion-icon></button><ion-title id="content-title">{{title}}</ion-title></ion-toolbar></ion-header>`
})
export class HeaderComponent {
  @Input() title: string;
}