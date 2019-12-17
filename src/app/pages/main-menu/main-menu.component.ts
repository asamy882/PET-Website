import { Component, OnInit, AfterViewInit } from '@angular/core';
import { WOW } from 'src/assets/js/wow.js';




@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    new WOW().init();
  }

}
