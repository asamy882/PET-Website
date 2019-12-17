import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { SearchProduct } from '../model/search.product.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private service: HttpService) {

   }

   getOurProducts(criteria: SearchProduct): Observable<any> {
    const url = 'Product/GetOurProducts';
    console.log('GetOurProducts', url, 'criteria', criteria);
    return this.service.post(url, criteria);
  }

  getYourProduct(criteria: SearchProduct): Observable<any> {
    const url = 'Product/GetYourProduct';
    console.log('GetYourProduct', url, 'criteria', criteria);
    return this.service.post(url, criteria);
  }

}
