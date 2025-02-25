import { ForecastDateInt } from "../interfaces/ForecastDateInt"


const WeatherForecastAdapter = (forecastData: any): ForecastDateInt<string, number> => {
    return ({
        list: forecastData.data.list.map((e: any) => ({
            dt: e.dt,
            main: {
                temp: Math.round(e.main.temp - 273.15),
            },
            weather: [{
                icon: e.weather[0].icon,
            }],
            other: {
                minutes: String(new Date(e.dt * 1000).getMinutes()).padStart(2, '0'),
                hours: String(new Date (e.dt * 1000).getHours()).padStart(2, '0'),
                day: String(new Date (e.dt * 1000).getDate()).padStart(2, '0'),
                month: String(new Date (e.dt * 1000).getMonth() + 1).padStart(2, '0'),
            }
        })),
    })
}

export { WeatherForecastAdapter }