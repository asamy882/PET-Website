import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient, private router: Router) { }

  private serverUrl = 'http://localhost:9999';//'http://localhost:9999';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  /////////////////////////////////
  private baseURl = this.serverUrl + '/api/';
  ////////////////////////////////
  public getServerUrl(): string {
    return this.serverUrl;
  }

  public getHeaders() {
   const userToken =  localStorage.getItem('token');
    if (userToken !== null && userToken.length > 0) {
     const headers = {
        'Content-Type': 'application/json',
        'UserToken': userToken,
        'Accept': 'application/json'
      };
      return headers;
    } else {
      this.router.navigate(['/pages/home']);
    }
  }
  ////////////////////////////////
  public post<T>(path: string, data: any, httpOptions: any = this.httpOptions): Observable<any> {
    return this.http.post<T>(`${this.baseURl}${path}`, data, httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  public get<T>(path: string, httpOptions: any = this.httpOptions): Observable<any> {
    // tslint:disable-next-line:no-debugger
   // debugger;
   console.log(`${this.baseURl}${path}`);
    return this.http.get<T>(`${this.baseURl}${path}`, httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {

    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error( `Backend returned code `, error);
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }

  saveObjectOnLocalStorage(key: string, value: any) {
    localStorage.setItem(key, value);
  }

  loadObjectFromLocalStorage(key: string): any {
    return localStorage.getItem(key);
  }

  removeObjectFromLocalStorage(key: string) {
    localStorage.removeItem(key);
  }

  clearLocalStorage() {
    localStorage.clear();
  }

  saveAttachment(file): Observable<any> {
    // debugger;
     const _url = '/Administration/UploadFile';
     const headers = this.getHeaders();
     const formData: FormData = new FormData();
     formData.append('file1', file, file.name);
     return this.post(_url, formData, headers);
   }

}
