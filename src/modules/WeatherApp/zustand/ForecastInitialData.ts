import { ForecastDateInt } from "../interfaces/ForecastDateInt"

const ForecastInitialData: ForecastDateInt<string, number> = {
    currentCityName: '',
    oldCityName: '',
    currentTemp: 0,
    oldTemp: 0,
    currentAverageTemp: 0,
    oldAverageTemp: 0,
    currentVisibility: '0 km',
    oldVisibility: '0 km',
    currentWeather: 'Overcast clouds',
    oldWeather: 'Overcast clouds',
    weatherIcon: '02d',
    time: '01:00',
    date: '01.05',
}

export { ForecastInitialData }