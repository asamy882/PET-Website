import { Component, OnInit, AfterViewInit } from '@angular/core';
import { WOW } from 'src/assets/js/wow.js';

import { Artical } from '../../shared/model/artical.model';
import { MediaService } from '../../shared/services/media.service';


@Component({
  selector: 'app-home-page-news-and-events',
  templateUrl: './home-page-news-and-events.component.html',
  styleUrls: ['./home-page-news-and-events.component.css']
})
export class HomePageNewsAndEventsComponent implements OnInit, AfterViewInit {

  articals: Artical [];
  serverUrl: string;

  constructor(private service: MediaService) {
    this.serverUrl = this.service.getServerUrl();
  }

  ngOnInit() {
    this.service.getLatestArticles().subscribe(res => {
      console.log('getLatestArticles - res', res);
      if (res.Success) {
        this.articals = res.Items;
       }
    });
  }
  ngAfterViewInit() {
    new WOW().init();
  }


}
