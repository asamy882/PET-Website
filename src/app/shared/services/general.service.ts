import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { ContactUsMessage } from '../model/contact.us.message.model';
import { LoginRequest } from '../model/login.request.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor(private service: HttpService) {

   }

   getStatisticsOnHomePage(): Observable<any> {
    const url = 'General/GetStatisticsOnHomePage';
    return this.service.get(url);
  }

  sendContactUsMessage(contactUsMessage: ContactUsMessage): Observable<any> {
    const url = 'General/SaveContactUsMessage';
    console.log('SaveContactUsMessage', url, 'contactUsMessage', contactUsMessage);
    return this.service.post(url, contactUsMessage);
  }

  login(loginRequest: LoginRequest): Observable<any> {
    const url = 'Authentication/Login?username=' + loginRequest.username + '&password=' + loginRequest.password;
    console.log(url);
    return this.service.post(url, null);
  }

}
