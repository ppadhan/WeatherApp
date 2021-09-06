// export interface Forecast {
//     temperature: number;
//     conditions: string;
//     wind: {
//       speed: number;
//       direction: string;
//     };
//     pressure: number;
//    }
export class WeatherItem {
    public cityName: string;
    public temperature: number;
    public conditions: string;
    public windSpeed: number;
    public windDir: string;
    public pressure: number;
    public main:string;

    constructor(cityName: string, conditions: string, temperature: number, windSpeed:number,windDir:string, pressure:number, main:string ) {
        this.cityName = cityName;
        this.conditions = conditions;
        this.temperature = temperature;
        this.windSpeed = windSpeed;
        this.windDir = windDir;
        this.pressure = pressure;
        this.main =  main;
    }
}

export class ForecastItem {
    public day: string;
    public temperature: number;
    public main:string;

    constructor(day:string, main:string, temperature: number) {
        this.day = day;
        this.main =  main;
        this.temperature = temperature;
    }
}