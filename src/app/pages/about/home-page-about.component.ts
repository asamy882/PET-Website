import { Component, OnInit, AfterViewInit } from '@angular/core';
import { WOW } from 'src/assets/js/wow.js';

import { GeneralService } from '../../shared/services/general.service';

@Component({
  selector: 'app-home-page-about',
  templateUrl: './home-page-about.component.html',
  styleUrls: ['./home-page-about.component.css']
})
export class HomePageAboutComponent implements OnInit, AfterViewInit {

  constructor(private service: GeneralService) { }

  public statistics: any = {};

  ngOnInit() {

    this.service.getStatisticsOnHomePage().subscribe(res => {
      console.log('getStatisticsOnHomePage - res', res);
     if (res.Success) {
      this.statistics = res.Item;
       }
    });
  }
  ngAfterViewInit() {
    new WOW().init();
  }
}
