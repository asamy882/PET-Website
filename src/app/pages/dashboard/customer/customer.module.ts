import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DialogModule} from 'primeng/dialog';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';

@NgModule({
  imports: [
    CommonModule,
    CustomerRoutingModule,
    SharedModule,
    RouterModule,
    DialogModule,
    FormsModule
  ],
  declarations: [CustomerComponent]
})
export class CustomerModule { }
