import { CurrentDataInt } from "../interfaces/CurrentDataInt"


const WeatherCurrentAdapter = (geo: any, currentData: any): CurrentDataInt<string, number> => {
    return ({
        name: geo.data[0].name,
        temp: { temp: Math.round(currentData.data.main.temp - 273.15) + '°C'},
        sys: { country: currentData.data.sys.country },
        weather: [{ description: currentData.data.weather[0].description, icon: currentData.data.weather.icon }],
        date: {
            month: new Date(currentData.data.dt * 1000).toLocaleDateString('en-EN', { month: 'long' }),
            dayOfWeek: new Date(currentData.data.dt * 1000).toLocaleDateString('en-EN', { weekday: 'long' }),
            day: new Date(currentData.data.dt * 1000).toLocaleDateString('en-EN', { day: 'numeric' }),
        },
        otherData: [
            { name: 'Hight', value: Math.round(currentData.data.main.temp_max - 273.15) + '°C' },
            { name: 'Wind', value: currentData.data.wind.speed + ' m/s'},
            { name: 'Sunrise', value: new Date(currentData.data.sys.sunrise * 1000)
                                            .toLocaleTimeString('en-EN', { hour: 'numeric', minute: 'numeric', hour12: false }) },
            { name: 'Low', value: Math.round(currentData.data.main.temp_min - 273.15) + '°C' },
            { name: 'Visibility', value: Number((currentData.data.visibility/1000).toFixed(1)) + ' km' },
            { name: 'Sunset', value: new Date(currentData.data.sys.sunset * 1000)
                                            .toLocaleTimeString('en-EN', { hour: 'numeric', minute: 'numeric', hour12: false }) },
        ]
    })
}

export { WeatherCurrentAdapter }