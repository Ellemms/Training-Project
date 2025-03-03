interface CurrentDataInt<S, N> {
    name: S,
    temp: N | S,
    country: S,
    weatherDescription: S,
    weatherIcon: S,
    month: S,
    dayOfWeek: S,
    day: S,
    otherData: Array<{name: S, value: S | N}>
}

export type { CurrentDataInt }