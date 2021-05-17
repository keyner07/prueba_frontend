import {API_KEY, API_URL} from './settings'

const fromApiResponseToMovies = apiResponse => {
  const {results} = apiResponse;
  if (Array.isArray(results)) {
    const movies = results.map(movie => {
      const {title: name, original_language: language, release_date: date, poster_path: image, vote_average: vote, id, rating} = movie;
      return { name, id, language, date, image, vote, rating }
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