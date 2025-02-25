import { UseGetData } from "../../hooks/UseGetData"
import { WeatherForecastImg,
         WeatherForecastContainer,
         WeatherForecastDate,
         WeatherForecastHours,
         WeatherForecastName,
         WeatherForecastScroll,
         WeatherForecastStep,
         WeatherForecastTemp } from "./WeatherForecastStyles"

const WeatherForecast = () => {

    const { WeatherForecastData } = UseGetData()

    return (
        <WeatherForecastContainer>
            <WeatherForecastName>Forecast</WeatherForecastName>
            <WeatherForecastScroll>
                {WeatherForecastData.list.map((e, i) => {
                    return <WeatherForecastStep key={i}>
                                <WeatherForecastDate>{e.other.day + '.' + e.other.month}</WeatherForecastDate>
                                <WeatherForecastHours>{e.other.hours + ':' + e.other.minutes}</WeatherForecastHours>
                                <WeatherForecastImg src={`http://openweathermap.org/img/wn/${e.weather[0].icon}@2x.png`}></WeatherForecastImg>
                                <WeatherForecastTemp>{e.main.temp + '°C'}</WeatherForecastTemp>
                           </WeatherForecastStep>
                })}
            </WeatherForecastScroll>
        </WeatherForecastContainer>
    )
}

export { WeatherForecast }