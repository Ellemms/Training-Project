const CustomTooltip = ({ active, payload }: any) => {
    
    if (active && payload && payload.length) {
        return (
            <div className='custom-tooltip' style={{color: 'var(--text-color)'}}>
                <p className='CurrentCityTemp'>{`${payload[0].payload.currentCityName}: ${payload[0].payload.currentTemp}°C`}</p>
                {payload[0].payload.oldCityName !== ''
                    ? <p className='OldCityTemp'>{`${payload[0].payload.oldCityName}: ${payload[0].payload.oldTemp}°C`}</p>
                    : null}
                <p className='Time'>{`Time: ${payload[0].payload.time}`}</p>
                <p className='Date'>{`Date: ${payload[0].payload.date}`}</p>
            </div>
        );
    }
  
    return null;
  };

export { CustomTooltip }