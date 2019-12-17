import { Component, OnInit, AfterViewInit } from '@angular/core';
import { WOW } from 'src/assets/js/wow.js';

@Component({
  selector: 'app-enviroments',
  templateUrl: './enviroments.component.html',
  styleUrls: ['./enviroments.component.css']
})
export class EnviromentsComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit() {

    new WOW().init();
  }
}
