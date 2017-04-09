import axios from 'axios'
const API_KEY = '207d43a4c02a08c195bca097b3894530'
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}&format=imperial&q=`

const fetchWeather = (term) => {
  return axios.get(`${ROOT_URL}${term},us`).then(req => req.data)
}

export default {
  fetchWeather
}
