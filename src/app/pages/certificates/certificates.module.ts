import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CertificatesRoutingModule } from './certificates-routing.module';
import { CertificatesComponent } from './certificates.component';

import { MainMenuModule } from '../main-menu/main-menu.module';
import { LoginModule } from '../login/login.module';

@NgModule({
  imports: [
    CommonModule,
    CertificatesRoutingModule,
    LoginModule,
    MainMenuModule
  ],
  declarations: [CertificatesComponent]
})
export class CertificatesModule { }
