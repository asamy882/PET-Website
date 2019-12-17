import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsAndEventsRoutingModule } from './news-and-events-routing.module';
import { NewsAndEventsComponent } from './news-and-events.component';
import { HomePageNewsAndEventsComponent } from './home-page-news-and-events.component';

import { DataViewModule } from 'primeng/dataview';
import { PanelModule } from 'primeng/panel';

import { MainMenuModule } from '../main-menu/main-menu.module';
import { LoginModule } from '../login/login.module';

@NgModule({
  imports: [
    CommonModule,
    NewsAndEventsRoutingModule,
    DataViewModule,
    MainMenuModule,
    LoginModule,
    PanelModule
  ],
  declarations: [NewsAndEventsComponent, HomePageNewsAndEventsComponent],
  exports: [NewsAndEventsComponent, HomePageNewsAndEventsComponent]
})
export class NewsAndEventsModule { }
