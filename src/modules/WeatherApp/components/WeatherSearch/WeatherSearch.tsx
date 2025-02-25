import { UseGetData } from "../../hooks/UseGetData"
import { WeatherSearchContainer, WeatherSearchButton, WeatherSearchinput } from "./WeatherSearchStyles"

const WeatherSearch = () => {

    const { InputValue, SetInputValue, GetNewData } = UseGetData()

    return (
        <WeatherSearchContainer>
            <WeatherSearchButton onClick={() => GetNewData()}/>
            <WeatherSearchinput placeholder="City name" value={InputValue} onChange={(e) => SetInputValue(e.currentTarget.value)}/>
        </WeatherSearchContainer>
    )
}

export { WeatherSearch }