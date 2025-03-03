import { CurrentDataInt } from "../interfaces/CurrentDataInt";

const CurrentInitialData: CurrentDataInt<string, number> = {
    name: 'Name city',
    temp: '25°C',
    country: 'Country' ,
    weatherDescription: 'Overcast clouds',
    weatherIcon: '01d',
    month: 'Month',
    dayOfWeek: 'Day of week',
    day: 'Day',
    otherData: [
        { name: 'Hight', value: '25°C' },
        { name: 'Wind', value: '0 m/s' },
        { name: 'Sunrise', value: '03:00' },
        { name: 'Low', value: '25°C' },
        { name: 'Visibility', value: '10 km' },
        { name: 'Sunset', value: '23:00' },
    ]
}

export { CurrentInitialData }