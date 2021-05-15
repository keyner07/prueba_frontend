import {API_KEY, API_URL} from './settings';

export default function rateMovie({ id, sessionId, value }) {
  return fetch(`${API_URL}/movie/${id}/rating?api_key=${API_KEY}&guest_session_id=${sessionId}`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({value})
  }).then(res => {
    if (!res.ok) throw new Error('Response is NOT ok')
    return res.json().success
  })
}