import { ForecastDateInt } from "../interfaces/ForecastDateInt"


const WeatherForecastAdapter = (geo: any, forecastData: any, WeatherForecastData: ForecastDateInt<string, number>): ForecastDateInt<string, number> => {
    return forecastData.data.list.map((e: any, i: number) => ({
                currentCityName: geo.data[0].name,
                oldCityName: WeatherForecastData[i].currentCityName,
                currentTemp: Math.round(e.main.temp - 273.15),
                oldTemp: WeatherForecastData[i].currentTemp,
                currentVisibility: Number((e.visibility/1000).toFixed(1)) + ' km',
                oldVisibility: WeatherForecastData[i].currentVisibility,
                currentWeather: e.weather[0].description,
                oldWeather: WeatherForecastData[i].currentWeather,
                weatherIcon: e.weather[0].icon,
                time: String(new Date (e.dt * 1000).getHours()).padStart(2, '0') + ':' + String(new Date(e.dt * 1000).getMinutes()).padStart(2, '0'),
                date: String(new Date (e.dt * 1000).getDate()).padStart(2, '0') + '.' + String(new Date (e.dt * 1000).getMonth() + 1).padStart(2, '0'),
    }))
}

export { WeatherForecastAdapter }