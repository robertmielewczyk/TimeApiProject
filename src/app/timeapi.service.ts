import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

import {  throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimeapiService {
  constructor(
    private http: HttpClient
  ) { }

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  getCurrentTime(timezone: string){
    return this.http.get(`http://worldtimeapi.org/api/timezone/${timezone}`)
    .pipe(
      catchError(this.handleError)
    );
  }
}
