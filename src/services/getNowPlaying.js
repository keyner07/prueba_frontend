import {API_KEY, API_URL} from './settings'
import { fromApiResponseToMovies } from 'services/utils';

export default async function getNowPlaying() {
  const apiURL = `${API_URL}/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`

  return fetch(apiURL)
    .then((res) => res.json())
    .then(fromApiResponseToMovies)
}