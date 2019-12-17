import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Lookup } from '../model/lookup.model';
import { ProductCategory } from '../model/product.category.model';


@Injectable({
  providedIn: 'root'
})
export class LookupService {

  constructor(private service: HttpService) {
    this.loadLookups();
   }

   public getServerUrl(): string {
    return this.service.getServerUrl();
  }

  loadLookups() {
    this.getCountries();
    this.getCurrencies();
    this.getCustomerTypes();
    this.getMainProductCategories();
    this.getOrderStatuses();
    this.getPaymentMethods();
    this.getProductCategories();
    this.getProductColors();
    this.getProductMaterials();
    this.getProductShapes();
    this.getProductSizes();
  }

  getCountries(): Lookup[] {
    return this.getLookupItems('Countries', 'Lookups/GetCountries?categoryId=-1');
  }

  getPaymentMethods(): Lookup[] {
    return this.getLookupItems('PaymentMethods', 'Lookups/GetPaymentMethods?categoryId=-1');
  }

  getCurrencies(): Lookup[] {
    return this.getLookupItems('Currencies', 'Lookups/GetCurrencies?categoryId=-1');
  }

  getCustomerTypes(): Lookup[] {
    return this.getLookupItems('CustomerTypes', 'Lookups/GetCustomerTypes?categoryId=-1');
  }

  getOrderStatuses(): Lookup[] {
    return this.getLookupItems('OrderStatuses', 'Lookups/GetOrderStatuses?categoryId=-1');
  }

  getProductSizes(): Lookup[] {
    return this.getLookupItems('ProductSizes', 'Lookups/GetProductSizes?categoryId=-1');
  }

  getProductColors(): Lookup[] {
    return this.getLookupItems('ProductColors', 'Lookups/GetProductColors?categoryId=-1');
  }

  getProductMaterials(): Lookup[] {
    return this.getLookupItems('ProductMaterials', 'Lookups/GetProductMaterials?categoryId=-1');
  }

  getProductShapes(): Lookup[] {
    return this.getLookupItems('ProductShapes', 'Lookups/GetProductShapes?categoryId=-1');
  }

  getProductCategories(): ProductCategory[] {
    return this.getLookupItems('ProductCategories', 'Lookups/GetProductCategories');
  }

  getMainProductCategories(): ProductCategory[] {
    return this.getLookupItems('MainProductCategories', 'Lookups/GetMainProductCategories');
  }

  getLookupItems(key: string, url: string): any {

    let items = null;
    items = this.service.loadObjectFromLocalStorage(key);

    if (items) {
      return JSON.parse(items);
    }

    this.service.get<any>(url).subscribe(res => {
      items = res.Items;
      this.service.saveObjectOnLocalStorage(key, JSON.stringify(items));
    });

    return items;
  }

}
