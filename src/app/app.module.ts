import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { CityDetailsComponent } from './weather/cityDetails/city-details/city-details.component';
import { WeatherInfoDetailsComponent } from './weather/weatherDetails/weather-info-details/weather-info-details.component';
import { WeatherService } from './services/weather.service';
import {  HttpClientModule } from '@angular/common/http';
import { CitySearchComponent } from './weather/citySearch/city-search/city-search.component';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    CityDetailsComponent,
    WeatherInfoDetailsComponent,
    CitySearchComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
