import { Component, OnInit, AfterViewInit } from '@angular/core';
import { WOW } from 'src/assets/js/wow.js';

import { Artical } from '../../shared/model/artical.model';
import { MediaService } from '../../shared/services/media.service';
import { GetArticlesRequest } from '../../shared/model/get.articals.request.model';

@Component({
  selector: 'app-news-and-events',
  templateUrl: './news-and-events.component.html',
  styleUrls: ['./news-and-events.component.css']
})
export class NewsAndEventsComponent implements OnInit, AfterViewInit {


  isChangeStyle = false;
  articals: Artical [];
  request: GetArticlesRequest = new GetArticlesRequest();

  constructor(private service: MediaService) {
  }

  ngOnInit() {
    this.request.dateFrom = null;
    this.request.dateTo = null;
    this.service.getArticles(this.request).subscribe(res => {
      console.log('getArticles - res', res);
      if (res.Success) {
        this.articals = res.Items;
       }
    });
  }

  ngAfterViewInit() {

    new WOW().init();
  }
  changeStyleFlag(style) {
    (style === 'newsStyle1') ? this.isChangeStyle = true : this.isChangeStyle = false;
  }
}
