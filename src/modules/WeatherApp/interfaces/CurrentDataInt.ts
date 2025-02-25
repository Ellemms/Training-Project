interface CurrentDataInt<S, N> {
    name: S,
    temp: { temp: N | S },
    sys: { country: string },
    weather: Array<{
        description: S,
        icon: S
    }>,
    date: {
        month: S,
        dayOfWeek: S,
        day: S | N,
    },
    otherData: Array<{name: S, value: S|N}>
}

export type { CurrentDataInt }