import {API_KEY, API_URL} from './settings';

const fromApiResponseToActors = apiResponse => {
    const {cast} = apiResponse;
    if (Array.isArray(cast)) {
      const actors = cast.map(actor => {
        const {id, gender, name, character} = actor;
        return {id, gender, name, character}
      })
      return actors
    }
    return []
  }

export default async function getActors({ id }) {
    return fetch(`${API_URL}/movie/${id}/credits?api_key=${API_KEY}&language=en-US`)
    .then(res => res.json())
    .then(fromApiResponseToActors)
}