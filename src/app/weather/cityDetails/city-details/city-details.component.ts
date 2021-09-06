import { Component, ElementRef, OnInit, Output } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';
import { WEATHER_ITEMS } from 'src/app/data/city';
import { WeatherItem } from 'src/app/data/forecast';
import { ViewChild } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-city-details',
  templateUrl: './city-details.component.html',
  styleUrls: ['./city-details.component.scss']
})
export class CityDetailsComponent implements OnInit {

  currentCity: string | undefined;
  @ViewChild('cityName')
  cityName!: ElementRef;
  constructor(private _weatherService : WeatherService) { }
  RECENT_LOCATION_LBL = 'Recent Locations';
  cities: WeatherItem[] = [];
  faPlus = faPlus;
  faSync = faSyncAlt;
  faTimes = faTimes;
  ngOnInit() {

    this.cities = this._weatherService.getCities();
  }
  addLocation(event: any,loc:any){
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
        alert('Please Enter Valid City Name');
      })
  }
  catch(e){
    console.log(e);
  }
  if(event){
    event.preventDefault();
  }
  this.cityName.nativeElement.value = null;
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

  choosenCity(i:number){
    this.currentCity = this.cities[i].cityName;
  }

  removeCity(event:any,i:number){
    this._weatherService.deleteWeatherItem(this.cities[i]);
    if(event){
      event.preventDefault();
    }
  }

  clearData(){
    this._weatherService.clearWeatherItems();
  }

  refreshCity(i:number){
    this._weatherService.searchWeatherInfo(this.cities[i].cityName).subscribe(response =>
      {
        if(response.name){
          this.updateCity(response,i)
        }
        else{
          alert("Please Enter Valid City Name");
        }
      },
    ( err: any) => {
      alert('Please Enter Valid City Name');
    })
  }

  updateCity(res:any, i:number){
    let cityName: string = res.name;
    let temperature: number = res.main.temp;
    let conditions: string = res.weather[0].description;
    let windSpeed: number = res.wind.speed;
    let windDir: string =res.wind.deg;
    let pressure: number = res.main.pressure;
    let icon: string = res.weather[0].icon;

    const newCity = new WeatherItem(cityName,conditions,temperature,windSpeed,windDir,pressure,icon);
    this._weatherService.WEATHER_ITEMS[i] = newCity;
  }


}
