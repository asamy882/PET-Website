import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { HomePageAboutComponent } from './home-page-about.component';

import { MainMenuModule } from '../main-menu/main-menu.module';
import { LoginModule } from '../login/login.module';

@NgModule({
  imports: [
    CommonModule,
    AboutRoutingModule,
    SharedModule,
    LoginModule,
    MainMenuModule
  ],
  declarations: [AboutComponent, HomePageAboutComponent],
  exports: [AboutComponent, HomePageAboutComponent]
})
export class AboutModule { }
