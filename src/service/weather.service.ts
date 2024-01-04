// weather.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  private apiKey = environment.weatherapikey; 
  private apiUrl = 'http://api.weatherstack.com/current'; 

  getWeather(city: string): Observable<any> {
    const url = `${this.apiUrl}?access_key=${this.apiKey}&query=${city}`;
    return this.http.get(url);
  }
}
