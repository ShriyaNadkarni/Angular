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

 
  private apiKey = environment.openweatherapi; 
  private apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}'; 

  getWeather(city: string){
    const apiUrlWithApiKey = this.apiUrl.replace('{city name}', city).replace('{API key}', this.apiKey);

    return this.http.get(apiUrlWithApiKey);
  }

  
getWeatherByLocation(latitude: number, longitude: number): Observable<any> {
  const apiUrlWithApiKey = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${this.apiKey}`;

  return this.http.get(apiUrlWithApiKey);
}


}
