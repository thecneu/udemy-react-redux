import api from '../api'
export const FETCH_WEATHER = 'FETCH_WEATHER'

export const fetchWeather = (term) => ({
  type: FETCH_WEATHER,
  payload: api.fetchWeather(term)
})
