import { UseGetData } from "../../hooks/UseGetData"
import { WeatherForecastHead } from "../WeatherForecastHead/WeatherForecastHead"
import { WeatherForecastScroll } from "../WeatherForecastScroll/WeatherForecastScroll"
import { WeatherRecharts } from "../WeatherRecharts/WeatherRecharts"
import { WeatherForecastContainer } from "./WeatherForecastStyles"

const WeatherForecast = () => {

    const { ForecastSwitch } = UseGetData()

    return (
        <WeatherForecastContainer>
            <WeatherForecastHead/>
            {ForecastSwitch === 'Cards' ? <WeatherForecastScroll/> : <WeatherRecharts/>}
        </WeatherForecastContainer>
    )
}

export { WeatherForecast }