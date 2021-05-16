import {API_KEY, API_URL} from './settings';

export default async function rateMovie({ id, sessionId, value }) {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify({ value: value*2});

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  return fetch(`${API_URL}/movie/${id}/rating?api_key=${API_KEY}&guest_session_id=${sessionId}`, requestOptions)
    .then(response => response.json())
    .catch(error => console.log('error', error));
}