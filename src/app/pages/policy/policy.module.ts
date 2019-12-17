import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PolicyRoutingModule } from './policy-routing.module';
import { PolicyComponent } from './policy.component';

import { MainMenuModule } from '../main-menu/main-menu.module';
import { LoginModule } from '../login/login.module';

@NgModule({
  imports: [
    CommonModule,
    MainMenuModule,
    LoginModule,
    PolicyRoutingModule
  ],
  declarations: [PolicyComponent]
})
export class PolicyModule { }
