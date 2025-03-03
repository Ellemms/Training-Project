import { UseGetData } from "../../hooks/UseGetData";

const CustomTooltip = ({ active, payload }: any) => {

    const { FilteredSwitch } = UseGetData()
    
    if (active && payload && payload.length) {
        return (
            <div className='custom-tooltip' style={{color: 'var(--text-color)'}}>

                {FilteredSwitch === 'Hours'
                    ?   <p className='CurrentCityTemp'>{`${payload[0].payload.currentCityName}(temp): ${payload[0].payload.currentTemp}°C`}</p>
                    :   <p className='CurrentCityAverageTemp'>{`${payload[0].payload.currentCityName}(average temp): ${payload[0].payload.currentAverageTemp}°C`}</p>
                }

                {payload[0].payload.oldCityName !== ''
                    ?   (FilteredSwitch === 'Hours'
                            ? <p className='OldCityTemp'>{`${payload[0].payload.oldCityName}(temp): ${payload[0].payload.oldTemp}°C`}</p>
                            : <p className='OldCityAverageTemp'>{`${payload[0].payload.oldCityName}(average temp): ${payload[0].payload.oldAverageTemp}°C`}</p>)
                    : null}
                
                <p className='CurrentVisibility'>{`${payload[0].payload.currentCityName}(vis): ${payload[0].payload.currentVisibility}`}</p>

                {payload[0].payload.oldCityName !== ''
                    ? <p className='OldVisibility'>{`${payload[0].payload.oldCityName}(vis): ${payload[0].payload.oldVisibility}`}</p>
                    : null}

                <p className='CurrentVisibility'>{`${payload[0].payload.currentCityName}(weather): ${payload[0].payload.currentWeather}`}</p>
                
                {payload[0].payload.oldCityName !== ''
                    ? <p className='OldVisibility'>{`${payload[0].payload.oldCityName}(weather): ${payload[0].payload.oldWeather}`}</p>
                    : null}

                {FilteredSwitch === 'Hours'
                    ? <p className='Time'>{`Time: ${payload[0].payload.time}`}</p>
                    : null
                }
                
                <p className='Date'>{`Date: ${payload[0].payload.date}`}</p>
            </div>
        );
    }
  
    return null;
  };

export { CustomTooltip }