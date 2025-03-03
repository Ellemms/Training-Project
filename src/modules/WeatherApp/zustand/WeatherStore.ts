import { create } from "zustand";
import { CurrentDataInt } from "../interfaces/CurrentDataInt";
import { ForecastDateInt } from "../interfaces/ForecastDateInt";
import { ForecastInitialData } from "./ForecastInitialData";
import { CurrentInitialData } from "./CurrentInitialData";

interface WeatherStore<S, N> {
    InputValue: S,
    ForecastSwitch: S,
    FilteredSwitch: S,
    WeatherCurrentData: CurrentDataInt<S,N>,
    WeatherForecastData: Array<ForecastDateInt<S, N>>,
    WeatherFilteredData: Array<ForecastDateInt<S, N>>,
    SetInputValue: (arg: S) => void,
    SetForecastSwitch: ( arg: S) => void,
    SetFilteredSwitch: ( arg: S ) => void,
    SetCurrentData: (arg: CurrentDataInt<S, N>) => void,
    SetForecastData: (arg: Array<ForecastDateInt<S, N>>) => void,
    SetFilteredData: (arg: Array<ForecastDateInt<S, N>>) => void
}

const UseWeatherStore = create<WeatherStore<string ,number>>((set) => ({
    InputValue: '',
    ForecastSwitch: 'Cards',
    FilteredSwitch: 'Hours',
    WeatherCurrentData: CurrentInitialData,
    WeatherForecastData: Array(40).fill(ForecastInitialData),
    WeatherFilteredData: Array(6).fill(ForecastInitialData),

    SetInputValue: (arg) => set(() => ({InputValue: arg})),
    SetForecastSwitch: (arg) => set(() => ({ForecastSwitch: arg})),
    SetFilteredSwitch: (arg) => set(() => ({FilteredSwitch: arg})),
    SetCurrentData: (arg) => set(() => ({WeatherCurrentData: arg})),
    SetForecastData: (arg) => set(() => ({WeatherForecastData: arg})),
    SetFilteredData: (arg) => set(() => ({WeatherFilteredData: arg}))
}))

export { UseWeatherStore }