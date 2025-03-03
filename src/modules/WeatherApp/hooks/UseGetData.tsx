import axios from "axios"
import { UseWeatherStore } from "../zustand/WeatherStore"
import { WeatherCurrentAdapter } from "../adapters/WeatherCurrentAdapter"
import { WeatherForecastAdapter } from "../adapters/WeatherForecastAdapter"
import { WeatherFilteredAdapter } from "../adapters/WeatherFilteredAdapter"

const UseGetData = () => {

    const { InputValue,
            ForecastSwitch,
            FilteredSwitch,
            WeatherCurrentData,
            WeatherForecastData,
            WeatherFilteredData,
            SetInputValue,
            SetForecastSwitch,
            SetFilteredSwitch,
            SetCurrentData,
            SetForecastData,
            SetFilteredData } = UseWeatherStore()

    const GetNewData = (arg: string = InputValue) => {
      if (arg !== '') {
        const APIkey = import.meta.env.VITE_API_KEY
        axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${arg},643&limit=10&appid=${APIkey}`)
              .then((geo) => {

                axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${geo.data[0].lat}&lon=${geo.data[0].lon}&appid=${APIkey}`)
                      .then((currentData) => {
                        SetCurrentData(WeatherCurrentAdapter(geo, currentData))
                      })
                      .catch((error) => console.error('Ошибка при получении данных о текущей погоде:', error.message))

                axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${geo.data[0].lat}&lon=${geo.data[0].lon}&appid=${APIkey}`)
                      .then((forecastData) => {
                        SetForecastData(WeatherForecastAdapter(geo, forecastData.data.list, WeatherForecastData)),
                        SetFilteredData(WeatherForecastAdapter(geo, WeatherFilteredAdapter(forecastData.data.list), WeatherFilteredData))
                      })
                      .catch((error) => console.error('Ошибка при получении данных о прогнозе погоды:', error.message))
                      
              })
              .catch((error) => {
                console.error('Ошибка при получении геолокации:', error.message)
              })
      }
    }

    return { InputValue,
             ForecastSwitch,
             FilteredSwitch,
             WeatherCurrentData,
             WeatherForecastData,
             WeatherFilteredData,
             SetInputValue,
             SetForecastSwitch,
             SetFilteredSwitch,
             GetNewData }
}

export { UseGetData }