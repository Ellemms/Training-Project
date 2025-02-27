import { useEffect } from "react"
import { WeatherCity } from "./components/WeatherCity/WeatherCity"
import { WeatherCurrentData } from "./components/WeatherCurrentData/WeatherCurrentData"
import { WeatherForecast } from "./components/WeatherForecast/WeatherForecast"
import { WeatherHeader } from "./components/WeatherHeader/WeatherHeader"
import { WeatherSearch } from "./components/WeatherSearch/WeatherSearch"
import { UseGetData } from "./hooks/UseGetData"
import { WeatherMainContainer } from "./WeatherStyles"

export const WeatherApp = () => {

    const { GetNewData } = UseGetData()

    useEffect(() => GetNewData('Samara'), [])

    return (
        <WeatherMainContainer>
            <WeatherHeader/>
            <WeatherSearch/>
            <WeatherCity/>
            <WeatherCurrentData/>
            <WeatherForecast/>
        </WeatherMainContainer>
    )
}