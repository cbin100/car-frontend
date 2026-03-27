// src/app/core/services/car.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private apiUrl = 'https://car-backend-fjjq.onrender.com/api/cars';

  constructor(private http: HttpClient) {}

  getCars(filters: any): Observable<any> {
    let params = new HttpParams();

    Object.keys(filters).forEach(key => {
      if (filters[key]) {
        params = params.set(key, filters[key]);
      }
    });

    return this.http.get(this.apiUrl, { params });
  }
}