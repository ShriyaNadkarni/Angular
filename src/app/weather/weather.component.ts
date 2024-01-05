import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/service/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent implements OnInit {
  public weatherData: any;
  public weatherIconUrl: string ='';

  constructor(private weatherService: WeatherService) {}


  ngOnInit(): void {
   this.getWeatherByLocation();
  }

  getWeatherByLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;

          this.weatherService.getWeatherByLocation(latitude, longitude)
            .subscribe(data => {
              this.weatherData = data;
              this.weatherIconUrl = `http://openweathermap.org/img/wn/${this.weatherData.weather[0].icon}.png`;
            });
        },
        (error) => {
          console.error('Error getting location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }
}
