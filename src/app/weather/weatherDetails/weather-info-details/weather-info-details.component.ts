import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { WeatherItem } from 'src/app/data/forecast';
import { ForecastItem } from 'src/app/data/forecast';
import { WeatherService } from 'src/app/services/weather.service';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';
import { faCloud } from '@fortawesome/free-solid-svg-icons';
import { faCloudRain } from '@fortawesome/free-solid-svg-icons';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { faCloudSun } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-weather-info-details',
  templateUrl: './weather-info-details.component.html',
  styleUrls: ['./weather-info-details.component.scss']
})
export class WeatherInfoDetailsComponent implements OnInit, OnChanges {
  @Input() currentCity: any;
  forecasts:any=[];
  currentWeather:any=[];
  weatherIcon: any;
  constructor(private _weatherService:WeatherService) { }
  faSync= faSyncAlt;
  faCloud=faCloud;
  faCloudRain=faCloudRain;
  faSun=faSun;
  faCloudSun=faCloudSun;

  ngOnChanges() {
   this.getDataFromAPI();
  }
  ngOnInit(): void {
    this.forecasts= [];
  }

  getDataFromAPI(){
    try{
      this._weatherService.getForecast(this.currentCity).subscribe(response =>
        {
          if(response){
            this.formatData(response);
            this.getForecast(response);
          }
          else{
            alert("Please Enter Valid City Name");
          }
        },
      ( err: any) => {
        alert(err);
      })
  }
  catch(e){
    alert(e);
  }
  }

  formatData(res:any){
    let cityName: string = res.city.name;
    let temperature: number = res.list[0].main.temp;
    let conditions: string = res.list[0].weather[0].description;
    let windSpeed: number = res.list[0].wind.speed;
    let windDir: string =res.list[0].wind.deg;
    let pressure: number = res.list[0].main.pressure;
    let main: string = res.list[0].weather[0].main;
    const newCity = new WeatherItem(cityName,conditions,temperature,windSpeed,windDir,pressure,main);
    this.currentWeather = newCity;
  }

  getForecast(res:any){
    let forecast= [];
      for(let i=0; i<40 ;){
        let iconImg;
        let day : string = res.list[i].dt_txt;
        let main: string = res.list[i].weather[0].main;
        let temperature: number = res.list[i].main.temp;
        const newForecast = new ForecastItem(day, main, temperature);
        forecast.push(newForecast);
        i= i+8;
      }
      this.forecasts = forecast;
  }

  getIcon(forecast: any){
    switch (forecast){
      case 'Clouds':
        return faCloud;
      case 'Rain':
        return faCloudRain;
      case 'Clear':
        return faSun;
      default:
        return faSun;
    }
  }

  refreshCurrentCity(){
    this.getDataFromAPI();
  }
}
