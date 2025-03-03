import { UseGetData } from "../../hooks/UseGetData"
import { SwitchBtn, WeatherForecastHeader, WeatherForecastName, WeatherForecastSwitch } from "./ForecastHeadStyle"


const WeatherForecastHead = () => {

    const { ForecastSwitch, FilteredSwitch, SetForecastSwitch, SetFilteredSwitch } = UseGetData()

    return (
        <WeatherForecastHeader>
            <WeatherForecastName>Forecast</WeatherForecastName>
            <WeatherForecastSwitch>
                <SwitchBtn style={{ 'backgroundColor': `${ForecastSwitch === 'Cards'
                                        ? 'var(--weather-switch-btn-active)'
                                        : 'var(--weather-switch-btn-notActive)'}`}}
                           onClick={(e) => {SetForecastSwitch(e.currentTarget.innerText)}}>Cards</SwitchBtn>
                <SwitchBtn style={{ 'backgroundColor': `${ForecastSwitch === 'Charts'
                                        ? 'var(--weather-switch-btn-active)'
                                        : 'var(--weather-switch-btn-notActive)'}`}}
                           onClick={(e) => {SetForecastSwitch(e.currentTarget.innerText)}}>Charts</SwitchBtn>
                <SwitchBtn style={{ 'backgroundColor': `${FilteredSwitch === 'Hours'
                                        ? 'var(--weather-switch-btn-active)'
                                        : 'var(--weather-switch-btn-notActive)'}`}}
                           onClick={(e) => {SetFilteredSwitch(e.currentTarget.innerText)}}>Hours</SwitchBtn>
                <SwitchBtn style={{ 'backgroundColor': `${FilteredSwitch === 'Days'
                                        ? 'var(--weather-switch-btn-active)'
                                        : 'var(--weather-switch-btn-notActive)'}`}}
                           onClick={(e) => {SetFilteredSwitch(e.currentTarget.innerText)}}>Days</SwitchBtn>
            </WeatherForecastSwitch>
        </WeatherForecastHeader>
    )
}

export { WeatherForecastHead }