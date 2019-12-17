import { CustomerComponent } from './customer/customer.component';
import { DashboardComponent } from './dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: DashboardComponent, children: [
      { path: 'customer', loadChildren: 'src/app/pages/dashboard/customer/customer.module#CustomerModule' }
    ]
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
