import {API_KEY, API_URL} from './settings';

const fromApiResponseToGifs = movie => {
    const {title, original_language: language, release_date: date, poster_path: url, vote_average: vote, id, genres, overview: description} = movie;
    return { title, id, language, date, url, vote, genres, description }
  }

export default async function getMovie({ id }) {
    return fetch(`${API_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`)
    .then(res => res.json())
    .then(fromApiResponseToGifs)
}