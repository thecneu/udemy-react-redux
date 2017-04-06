import axios from 'axios'
const ROOT_URL = 'https://www.googleapis.com/youtube/v3/search'
const API_KEY = 'AIzaSyDNh2WEvrUJYGPAl-795S1yGM--UJWkkkA'

const YTSearch = (term) => {
  const params = {
    part: 'snippet',
    key: API_KEY,
    q: term,
    type: 'video'
  }

  return axios.get(ROOT_URL, {params})
    .then(response => response.data.items)
    .catch((error) => console.error(error))
}

export default YTSearch