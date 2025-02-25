import axios from "axios"
import { UseWeatherStore } from "../zustand/WeatherStore"
import { WeatherCurrentAdapter } from "../adapters/WeatherCurrentAdapter"
import { WeatherForecastAdapter } from "../adapters/WeatherForecastAdapter"

const UseGetData = () => {

    const { InputValue, WeatherCurrentData, WeatherForecastData, SetInputValue, SetCurrentData, SetForecastData } = UseWeatherStore()

    const GetNewData = (arg: string = InputValue) => {
      if (arg !== '') {
        const APIkey = import.meta.env.VITE_API_KEY
        axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${arg},643&limit=10&appid=${APIkey}`)
              .then((geo) => {

                axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${geo.data[0].lat}&lon=${geo.data[0].lon}&appid=${APIkey}`)
                      .then((currentData) => {
                        SetCurrentData(WeatherCurrentAdapter(geo, currentData))
                      })
                      .catch((error) => console.log(error))

                axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${geo.data[0].lat}&lon=${geo.data[0].lon}&appid=${APIkey}`)
                      .then((forecastData) => {
                        SetForecastData(WeatherForecastAdapter(forecastData))
                      })
                      .catch((error) => console.error(error))
                      
              })
              .catch(() => console.error('Вы ввели невалидные данные!'))
      }
    }

    return { InputValue, WeatherCurrentData, WeatherForecastData, SetInputValue, GetNewData }
}

export { UseGetData }