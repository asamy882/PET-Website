import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { GetArticlesRequest } from '../model/get.articals.request.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MediaService {

  constructor(private service: HttpService) {

   }

   getLatestArticles(): Observable<any> {
    const url = 'Media/GetLatestArticles';
    return this.service.get(url);
  }

  getArticles(criteria: GetArticlesRequest): Observable<any> {
    const url = 'Media/GetArticles?dateFrom=' + criteria.dateFrom + '&dateTo=' + criteria.dateTo;
    console.log('GetYourProduct', url, 'criteria', criteria);
    return this.service.get(url);
  }

  public getServerUrl(): string {
    return this.service.getServerUrl();
  }

}
