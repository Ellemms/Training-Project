import { UseGetData } from "../../hooks/UseGetData"
import { WeatherForecastImg,
         WeatherForecastDate,
         WeatherForecastHours,
         WeatherForecastScrollView,
         WeatherForecastStep,
         WeatherForecastTemp } from "./WeatherForecastScrollStyles"

const WeatherForecastScroll = () => {

    const { WeatherForecastData } = UseGetData()

    return (
        <WeatherForecastScrollView>
            {WeatherForecastData.map((e, i) => {
                return <WeatherForecastStep key={i}>
                            <WeatherForecastDate>{e.date + '°C'}</WeatherForecastDate>
                            <WeatherForecastHours>{e.time}</WeatherForecastHours>
                            <WeatherForecastImg src={`http://openweathermap.org/img/wn/${e.weatherIcon}@2x.png`}></WeatherForecastImg>
                            <WeatherForecastTemp>{e.currentTemp}</WeatherForecastTemp>
                        </WeatherForecastStep>
            })}
        </WeatherForecastScrollView>
    )
}

export { WeatherForecastScroll }