import { UseGetData } from "../../hooks/UseGetData"
import { WeatherSearchContainer, WeatherSearchButton, WeatherSearchinput } from "./WeatherSearchStyles"

const WeatherSearch = () => {

    const { InputValue, SetInputValue, GetNewData } = UseGetData()

    return (
        <WeatherSearchContainer>
            <WeatherSearchButton onClick={() => GetNewData()}/>
            <WeatherSearchinput placeholder="City name"
                                value={InputValue}
                                onChange={(e) => SetInputValue(e.currentTarget.value)}
                                onKeyUp={(e) => {e.key === 'Enter' ? GetNewData() : null}}/>
        </WeatherSearchContainer>
    )
}

export { WeatherSearch }