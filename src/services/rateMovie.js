import {API_KEY, API_URL} from './settings';

export default function rateMovie({ id, sessionId, value }) {
  return fetch(`${API_URL}/movie/${id}/rating?api_key=${API_KEY}&guest_session_id=${sessionId}`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json;charset=utf-8"
    },
    body: JSON.stringify(value)
  }).then(res => {
    return res.json().success
  })
}