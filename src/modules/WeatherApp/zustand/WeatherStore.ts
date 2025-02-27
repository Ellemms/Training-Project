import { create } from "zustand";
import { CurrentDataInt } from "../interfaces/CurrentDataInt";
import { ForecastDateInt } from "../interfaces/ForecastDateInt";

interface WeatherStore<S, N> {
    InputValue: S,
    ForecastSwitch: S,
    WeatherCurrentData: CurrentDataInt<S,N>,
    WeatherForecastData: ForecastDateInt<S, N>,
    SetInputValue: (arg: S) => void,
    SetForecastSwitch: ( arg: S) => void,
    SetCurrentData: (arg: CurrentDataInt<S, N>) => void,
    SetForecastData: (arg: ForecastDateInt<S, N>) => void
}

const UseWeatherStore = create<WeatherStore<string ,number>>((set) => ({
    InputValue: '',
    ForecastSwitch: 'Cards',

    WeatherCurrentData: {
        name: 'Name city',
        temp: { temp: '25°C' },
        sys: { country: 'Country' },
        weather: [{ description: 'Overcast clouds', icon: '01d' }],
        date: {
            month: 'Month',
            dayOfWeek: 'Day of week',
            day: 'Day',
        },
        otherData: [
            { name: 'Hight', value: '25°C' },
            { name: 'Wind', value: '0 m/s' },
            { name: 'Sunrise', value: '03:00' },
            { name: 'Low', value: '25°C' },
            { name: 'Visibility', value: '10 km' },
            { name: 'Sunset', value: '23:00' },
        ]
    },
    
    WeatherForecastData: Array(40).fill({
        currentCityName: '',
        oldCityName: '',
        currentTemp: 0,
        oldTemp: 0,
        currentVisibility: '0 km',
        oldVisibility: '0 km',
        currentWeather: 'Overcast clouds',
        oldWeather: 'Overcast clouds',
        weatherIcon: '02d',
        time: '01:00',
        date: '01.05',
    }),
    SetInputValue: (arg) => set(() => ({InputValue: arg})),
    SetForecastSwitch: (arg) => set(() => ({ForecastSwitch: arg})),
    SetCurrentData: (arg) => set(() => ({WeatherCurrentData: arg})),
    SetForecastData: (arg) => set(() => ({WeatherForecastData: arg}))
}))

export { UseWeatherStore }