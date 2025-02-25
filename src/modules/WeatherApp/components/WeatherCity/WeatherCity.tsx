import { UseGetData } from "../../hooks/UseGetData"
import { CityName, WeatherCityContainer, CurrentDate } from "./WeatherCityStyles"

const WeatherCity = () => {
    
    const { WeatherCurrentData } = UseGetData()

    return (
        <WeatherCityContainer>
            <CityName>{WeatherCurrentData.name + ', ' + WeatherCurrentData.sys.country}</CityName>
            <CurrentDate>{WeatherCurrentData.date.dayOfWeek + ', ' + WeatherCurrentData.date.day + ' ' + WeatherCurrentData.date.month}</CurrentDate>
        </WeatherCityContainer>
    )
}

export { WeatherCity }