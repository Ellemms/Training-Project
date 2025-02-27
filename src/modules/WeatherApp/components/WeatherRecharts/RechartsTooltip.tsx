const CustomTooltip = ({ active, payload }: any) => {
    
    if (active && payload && payload.length) {
        return (
            <div className='custom-tooltip' style={{color: 'var(--text-color)'}}>
                <p className='CurrentCityTemp'>{`${payload[0].payload.currentCityName}(temp): ${payload[0].payload.currentTemp}°C`}</p>
                {payload[0].payload.oldCityName !== ''
                    ? <p className='OldCityTemp'>{`${payload[0].payload.oldCityName}(temp): ${payload[0].payload.oldTemp}°C`}</p>
                    : null}

                <p className='CurrentVisibility'>{`${payload[0].payload.currentCityName}(vis): ${payload[0].payload.currentVisibility}`}</p>
                {payload[0].payload.oldCityName !== ''
                    ? <p className='OldVisibility'>{`${payload[0].payload.oldCityName}(vis): ${payload[0].payload.oldVisibility}`}</p>
                    : null}

                <p className='CurrentVisibility'>{`${payload[0].payload.currentCityName}(weather): ${payload[0].payload.currentWeather}`}</p>
                {payload[0].payload.oldCityName !== ''
                    ? <p className='OldVisibility'>{`${payload[0].payload.oldCityName}(weather): ${payload[0].payload.oldWeather}`}</p>
                    : null}

                <p className='Time'>{`Time: ${payload[0].payload.time}`}</p>
                <p className='Date'>{`Date: ${payload[0].payload.date}`}</p>
            </div>
        );
    }
  
    return null;
  };

export { CustomTooltip }