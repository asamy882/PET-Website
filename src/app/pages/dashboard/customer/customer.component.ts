import { CustomerService } from './../../../shared/services/customer.service';
import { LookupService } from './../../../shared/services/lookup.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  colDefs: any[] = [];
  rowData: any[] = [];
  display = false;
  customerTypes: any[] = [];
  countries: any[] = [];
  codeSearch: any = '';
  nameSearch: any = '';
  emailSearch: any = '';
  countrySearch: any = {};
  customerTypeSearch: any = {};
  searchObject: any = {};
  constructor(private lookupService: LookupService, private customerService: CustomerService) { }

  ngOnInit() {
    this.customerTypes = this.lookupService.getCustomerTypes();
    this.countries = this.lookupService.getCountries();
    console.log(this.countries);
  }
  searchForCustomer() {
    console.log(this.codeSearch)
    console.log(this.nameSearch)
    console.log(this.emailSearch)
    console.log(this.countrySearch.ID)
    console.log(this.customerTypeSearch.length)
    this.searchObject.code = this.codeSearch;
    this.searchObject.name = this.nameSearch;
    this.searchObject.email = this.emailSearch;
    this.searchObject.countryId = (this.customerTypeSearch.ID === undefined) ? '' : this.customerTypeSearch.ID;
    this.searchObject.typeId = (this.customerTypeSearch.ID === undefined) ? '' : this.customerTypeSearch.ID;
    console.log(this.searchObject)

    this.customerService.searchForCustomer(this.searchObject).subscribe(
      res => this.rowData = res
    )
  }
  showDialog() {
    this.display = true;
  }
}
