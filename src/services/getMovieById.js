import {API_KEY, API_URL} from './settings';

const fromApiResponseToMovie = movie => {
    const {title: name, original_language: language, release_date: date, poster_path: image, vote_average: vote, id, genres, overview: description} = movie;
    return { name, id, language, date, image, vote, genres, description }
  }
  
export default async function getMovie({ id }) {
    return fetch(`${API_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`)
    .then(res => res.json())
    .then(fromApiResponseToMovie)
}