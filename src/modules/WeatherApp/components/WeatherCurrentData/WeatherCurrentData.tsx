import { UseGetData } from "../../hooks/UseGetData"
import { CloudCover, CurrentDataContainer, OtherDataBlock, OtherDataContainer, OtherDataName, OtherDataValue, TempCloudsContainer, Temperature } from "./WeatherCurrentDataStyles"

const WeatherCurrentData = () => {

    const { WeatherCurrentData } = UseGetData()

    return (
        <CurrentDataContainer>
            <TempCloudsContainer>
                <Temperature>{WeatherCurrentData.temp}</Temperature>
                <CloudCover>{WeatherCurrentData.weatherDescription}</CloudCover>
            </TempCloudsContainer>
            <OtherDataContainer>
                {WeatherCurrentData.otherData.map((e, i) => {
                    return <OtherDataBlock key={i}>
                               <OtherDataValue>{e.value} </OtherDataValue>
                               <OtherDataName>{e.name}</OtherDataName>
                           </OtherDataBlock>
                })}
            </OtherDataContainer>
        </CurrentDataContainer>
    )
}

export { WeatherCurrentData }