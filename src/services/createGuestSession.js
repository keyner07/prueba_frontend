import {API_KEY, API_URL} from './settings';

export default async function createGuestSession() {
    return fetch(`${API_URL}/authentication/guest_session/new?api_key=${API_KEY}`)
    .then(res => res.json())
    .then(res => {
        const { guest_session_id } = res;
        return guest_session_id;
    })
}