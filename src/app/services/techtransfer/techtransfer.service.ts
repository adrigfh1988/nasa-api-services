import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Techtransfer } from './../../model/techtransfer';

@Injectable({
  providedIn: 'root'
})
export class TechtransferService {

  constructor(private http: HttpClient) { }

  getTechtrasnferData(): Observable<Techtransfer> {
    return this.http.get<Techtransfer>('https://api.nasa.gov/techtransfer/patent/?engine&api_key=DEMO_KEY');
  }


}
