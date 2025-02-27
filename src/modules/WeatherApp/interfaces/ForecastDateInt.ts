type ForecastDateInt<S, N> = Array<{
                                currentCityName: S,
                                oldCityName: S,
                                currentTemp: N,
                                oldTemp: N,
                                weatherIcon: S;
                                time: S;
                                date: S;
                             }>;

export type { ForecastDateInt }