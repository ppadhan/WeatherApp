import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { WeatherItem } from "../data/forecast";
//import { WEATHER_ITEMS } from "../data/city";
import { Observable ,throwError } from "rxjs";
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  readonly APPID = 'c51223c219d6aec8cb8c5210449bd859';
  WEATHER_ITEMS: WeatherItem[] = [];
  constructor(private _http: HttpClient) {}
  getCities(): Array<WeatherItem> {
    return this.WEATHER_ITEMS;
  }
  
  getForecast(city: string): Observable<any> {
    let url = 'https://api.openweathermap.org/data/2.5/forecast?q='+city+'&appid='+this.APPID+'&units=metric';
    return this._http.get(url)
  }
  
  clearWeatherItems() {
    this.WEATHER_ITEMS.splice(0);
  }

  deleteWeatherItem(item: WeatherItem) {
    this.WEATHER_ITEMS.splice(this.WEATHER_ITEMS.indexOf(item), 1);
  }

  getIcons(id:string){
    let url = `http://openweathermap.org/img/wn/${id}@2x.png`;
    return this._http.get(url);
  }

  isExistWeatherItem(item: WeatherItem): any {
      return this.WEATHER_ITEMS.some(elem => (elem.cityName == item.cityName));
  }

  addWeatherItem(item: WeatherItem) {
    if(!this.isExistWeatherItem(item)){
      if(this.WEATHER_ITEMS.length<8){
        this.WEATHER_ITEMS.unshift(item);
      }
      else{
        this.WEATHER_ITEMS.splice(7,1);
        this.WEATHER_ITEMS.unshift(item);
      }
    }
  }

  searchWeatherInfo(city: string): Observable<any> {
      let url = 'http://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+this.APPID+'&units=metric';
      return this._http.get(url);
  }
}
