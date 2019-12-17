import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnviromentsRoutingModule } from './enviroments-routing.module';
import { EnviromentsComponent } from './enviroments.component';

import { MainMenuModule } from '../main-menu/main-menu.module';
import { LoginModule } from '../login/login.module';

@NgModule({
  imports: [
    CommonModule,
    EnviromentsRoutingModule,
    LoginModule,
    MainMenuModule
  ],
  declarations: [EnviromentsComponent]
})
export class EnviromentsModule { }
