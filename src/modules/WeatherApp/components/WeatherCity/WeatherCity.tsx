import { UseGetData } from "../../hooks/UseGetData"
import { CityName, WeatherCityContainer, CurrentDate } from "./WeatherCityStyles"

const WeatherCity = () => {
    
    const { WeatherCurrentData } = UseGetData()

    return (
        <WeatherCityContainer>
            <CityName>{WeatherCurrentData.name + ', ' + WeatherCurrentData.country}</CityName>
            <CurrentDate>{WeatherCurrentData.dayOfWeek + ', ' + WeatherCurrentData.day + ' ' + WeatherCurrentData.month}</CurrentDate>
        </WeatherCityContainer>
    )
}

export { WeatherCity }