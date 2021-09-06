import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';
import { WEATHER_ITEMS } from 'src/app/data/city';
import { WeatherItem } from 'src/app/data/forecast';

@Component({
  selector: 'app-city-search',
  templateUrl: './city-search.component.html',
  styleUrls: ['./city-search.component.scss']
})
export class CitySearchComponent implements OnInit {

  constructor(private _weatherService : WeatherService) { }

  ngOnInit(): void {
  }
  addLocation(loc:any){
    try{
      this._weatherService.searchWeatherInfo(loc).subscribe(response =>
        {
          if(response.name){
            this.addCity(response)
          }
          else{
            alert("Please Enter Valid City Name");
          }
        },
      ( err: any) => {
        console.log(err);
      })
  }
  catch(e){
    console.log(e);
  }
  }

  addCity(res:any){
    let cityName: string = res.name;
    let temperature: number = res.main.temp;
    let conditions: string = res.weather[0].description;
    let windSpeed: number = res.wind.speed;
    let windDir: string =res.wind.deg;
    let pressure: number = res.main.pressure;
    let icon: string = res.weather[0].icon;

    const newCity = new WeatherItem(cityName,conditions,temperature,windSpeed,windDir,pressure,icon);
    if (cityName) {
      this._weatherService.addWeatherItem(newCity);
  }
  }

}
