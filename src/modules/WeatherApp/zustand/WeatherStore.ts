import { create } from "zustand";
import { CurrentDataInt } from "../interfaces/CurrentDataInt";
import { ForecastDateInt } from "../interfaces/ForecastDateInt";

interface WeatherStore<S, N> {
    InputValue: S,
    WeatherCurrentData: CurrentDataInt<S,N>,
    WeatherForecastData: ForecastDateInt<S, N>,
    SetInputValue: (arg: S) => void,
    SetCurrentData: (arg: CurrentDataInt<S, N>) => void,
    SetForecastData: (arg: ForecastDateInt<S, N>) => void
}

const UseWeatherStore = create<WeatherStore<string ,number>>((set) => ({
    InputValue: '',

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
    
    WeatherForecastData: {
        list: Array(40).fill({
            dt: 0,
            main: { temp: '25°C' },
            weather: [{ icon: '02d' }],
            other: {
                minutes: '00',
                hours: '00',
                day: '01',
                month: '01',
            },
        }),

    },
    SetInputValue: (arg) => set(() => ({InputValue: arg})),
    SetCurrentData: (arg) => set(() => ({WeatherCurrentData: arg})),
    SetForecastData: (arg) => set(() => ({WeatherForecastData: arg}))
}))

export { UseWeatherStore }