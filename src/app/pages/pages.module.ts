import { SharedModule } from './../shared/shared.module';
import { HomeModule } from './home/home.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    HomeModule,
    SharedModule
],
  declarations: [PagesComponent]
})
export class PagesModule { }
