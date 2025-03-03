interface ForecastDateInt<S, N> {
   currentCityName: S,
   oldCityName: S,
   currentTemp: N,
   oldTemp: N,
   currentAverageTemp: N,
   oldAverageTemp: N,
   currentVisibility: N | S;
   oldVisibility: N | S;
   currentWeather: S;
   oldWeather: S;
   weatherIcon: S;
   time: S;
   date: S;
};

export type { ForecastDateInt }