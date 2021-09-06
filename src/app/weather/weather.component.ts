import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  currentCity:string | undefined;
  constructor() { }

  ngOnInit(): void {
  }

  getCity(city: any){
    this.currentCity =  city;
    console.log(this.currentCity);
  }

}
