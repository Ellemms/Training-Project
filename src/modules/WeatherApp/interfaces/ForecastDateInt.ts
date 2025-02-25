interface ForecastDateInt<S, N> {
    list: Array<{
        dt: N;
        main: {
            temp: N | 'Temp';
        };
        weather: Array<{
            icon: S;
        }>;
        other: {
            minutes: S,
            hours: S,
            day: S,
            month: S,
        }
    }>;
}

export type { ForecastDateInt }