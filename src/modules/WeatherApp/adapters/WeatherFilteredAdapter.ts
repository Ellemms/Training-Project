const WeatherFilteredAdapter = (forecastData: any) => {

    const newArray: Array<any> = []

    forecastData.forEach((e: any, i: number, a: any) => {

        const dateE = new Date(e.dt * 1000).toLocaleDateString('en-EN', { day: 'numeric', month: 'long' })

        /////
        let minTemp = 0
        let maxTemp = 0

        const arr = a.filter((elem: any) => {
            const dateElem = new Date(elem.dt * 1000).toLocaleDateString('en-EN', { day: 'numeric', month: 'long' })
            return dateElem === dateE
        })

        arr.forEach((element: any) => {
            const temp = element?.main.temp - 273.15
            minTemp = temp < minTemp ? Math.min(temp) : minTemp
            maxTemp = temp > maxTemp ? Math.max(temp) : maxTemp
        })
        /////

        if (!newArray.find((el) => {
            const dateEl = new Date(el.dt * 1000).toLocaleDateString('en-EN', { day: 'numeric', month: 'long' })
            return dateE === dateEl
        })) {
            newArray.push({...e, currentAverageTemp: Math.round((maxTemp + minTemp) / 2)})
        }
    })

    return newArray
}

export { WeatherFilteredAdapter }