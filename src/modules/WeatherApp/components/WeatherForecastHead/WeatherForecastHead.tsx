import { UseGetData } from "../../hooks/UseGetData"
import { SwitchBtn, WeatherForecastHeader, WeatherForecastName, WeatherForecastSwitch } from "./ForecastHeadStyle"


const WeatherForecastHead = () => {

    const { ForecastSwitch, SetForecastSwitch } = UseGetData()

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
            </WeatherForecastSwitch>
        </WeatherForecastHeader>
    )
}

export { WeatherForecastHead }