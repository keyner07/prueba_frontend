import {API_KEY, API_URL} from './settings'

const fromApiResponseToMovies = apiResponse => {
  const {results} = apiResponse;
  if (Array.isArray(results)) {
    const movies = results.map(movie => {
      const {title, original_language, release_date, poster_path, vote_average, id, rating} = movie;
      return { title, id, original_language, release_date, poster_path, vote_average, rating }
    })
    return movies
  }
  return []
}

export default async function getNowPlaying({ sessionId }) {
  const apiURL = `${API_URL}/guest_session/${sessionId}/rated/movies?api_key=${API_KEY}&language=en-US&sort_by=created_at.asc`

  return fetch(apiURL)
    .then((res) => res.json())
    .then(fromApiResponseToMovies)
    .catch(err => console.error(err))
}