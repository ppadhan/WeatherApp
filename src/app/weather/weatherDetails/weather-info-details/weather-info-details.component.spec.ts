import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherInfoDetailsComponent } from './weather-info-details.component';

describe('WeatherInfoDetailsComponent', () => {
  let component: WeatherInfoDetailsComponent;
  let fixture: ComponentFixture<WeatherInfoDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherInfoDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherInfoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
