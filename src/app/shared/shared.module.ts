import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { AppFooterComponent } from './components/app-footer/app-footer.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableComponent } from './components/data-table/data-table.component';
import {TableModule} from 'primeng/table';

@NgModule({
  imports: [
    CommonModule,
    TableModule,
   FormsModule
  ],
  declarations: [
    HeaderComponent,
    AppFooterComponent,
    DataTableComponent],
  exports: [
    HeaderComponent,
    AppFooterComponent,
    DataTableComponent]
})
export class SharedModule { }
