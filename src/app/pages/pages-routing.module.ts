import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', loadChildren: 'src/app/pages/about/about.module#AboutModule' },
  { path: 'certificates', loadChildren: 'src/app/pages/certificates/certificates.module#CertificatesModule' },
  { path: 'contactus', loadChildren: 'src/app/pages/contact-us/contact-us.module#ContactUsModule' },
  { path: 'newsandevents', loadChildren: 'src/app/pages/news-and-events/news-and-events.module#NewsAndEventsModule' },
  { path: 'policy', loadChildren: 'src/app/pages/policy/policy.module#PolicyModule' },
  { path: 'products', loadChildren: 'src/app/pages/products/products.module#ProductsModule' },
  { path: 'enviroments', loadChildren: 'src/app/pages/enviroments/enviroments.module#EnviromentsModule' },
  { path: 'dashboard', loadChildren: 'src/app/pages/dashboard/dashboard.module#DashboardModule' },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
