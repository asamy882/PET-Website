import { HttpService } from './http.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpService) {
  }
  searchForCustomer(searchObject): Observable<any> {
    return this.http.post('Administration/FindCustomer', searchObject);
  }
}
