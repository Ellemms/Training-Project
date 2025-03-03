import { AreaChart, XAxis, YAxis, Tooltip, Area, ResponsiveContainer } from 'recharts';
import { UseGetData } from '../../hooks/UseGetData';
import { CustomTooltip } from './RechartsTooltip';

const WeatherRecharts = () => {

    const { FilteredSwitch, WeatherForecastData, WeatherFilteredData } = UseGetData()

    return (
        <ResponsiveContainer width="100%" height="75%">
            <AreaChart data={FilteredSwitch === 'Hours' ? WeatherForecastData : WeatherFilteredData}
                    margin={{ top: 30, right: 30, left: 0, bottom: 0 }}>
                <defs>
                    <linearGradient id="bgCurrentTemp" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="10%" stopColor="#8884d8" stopOpacity={0.8}/>
                        <stop offset="90%" stopColor="#8884d8" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="bgOldTemp" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="10%" stopColor="#82ca9d" stopOpacity={0.8}/>
                        <stop offset="90%" stopColor="#82ca9d" stopOpacity={0}/>
                    </linearGradient>
                </defs>
                <XAxis dataKey="date" tick={{fill: 'var(--text-color)'}}/>
                <YAxis tick={{fill: 'var(--text-color)'}}/>
                <Tooltip content={<CustomTooltip />}/>
                <Area type="monotone" dataKey='currentTemp' stroke="#8884d8" fillOpacity={1} fill="url(#bgCurrentTemp)" />
                <Area type="monotone" dataKey='oldTemp' stroke="#82ca9d" fillOpacity={1} fill="url(#bgOldTemp)" />
            </AreaChart>
        </ResponsiveContainer>
    )
}

export { WeatherRecharts }