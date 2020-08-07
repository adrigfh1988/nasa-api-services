import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Techportmodel } from './../../model/techportmodel';

@Injectable({
  providedIn: 'root'
})
export class TechportService {

constructor(private http: HttpClient) { }

  getTechPortData(idParameter: number): Observable<Techportmodel> {
      return this.http.get<Techportmodel>(`https://api.nasa.gov/techport/api/projects/${idParameter}?api_key=DEMO_KEY`);
  }

}
