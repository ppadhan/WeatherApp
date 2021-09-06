import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherInfoDetailsComponent } from './weather/weatherDetails/weather-info-details/weather-info-details.component';

const routes: Routes = [{
  path:'forecastDetails', component: WeatherInfoDetailsComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
