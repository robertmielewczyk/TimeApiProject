import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimeapiService {
  constructor(
    private http: HttpClient
  ) { }

  getCurrentTime(timezone: string){
    return this.http.get(`http://worldtimeapi.org/api/timezone/${timezone}`);
  }

  getTest(){
    return this.http.get(`http://worldtimeapi.org/api/timezone/Europe`);
  }
}
