import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

import { ProductsModule } from '../products/products.module';
import { NewsAndEventsModule } from '../news-and-events/news-and-events.module';
import { ContactUsModule } from '../contact-us/contact-us.module';
import { AboutModule } from '../about/about.module';
import { MainMenuModule } from '../main-menu/main-menu.module';
import { LoginModule } from '../login/login.module';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    ProductsModule,
    NewsAndEventsModule,
    AboutModule,
    MainMenuModule,
    LoginModule,
    ContactUsModule
  ],
  declarations: [HomeComponent],
  exports: [HomeComponent]
})
export class HomeModule { }
