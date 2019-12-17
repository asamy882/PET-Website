import { Component, OnInit, AfterViewInit } from '@angular/core';
import { WOW } from 'src/assets/js/wow.js';
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  ngAfterViewInit() {
    new WOW().init();
  }
  constructor() { }

  ngOnInit() {
    $('.counter').counterUp({
      time: 1000
    });
  }
}

