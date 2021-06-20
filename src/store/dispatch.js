import { store } from './index';
import { actionMovies, actionsUser } from './actions';
import createGuestSession from '../services/createGuestSession';

export const addFavourites = ({ name, date, vote, image, id}) => {
    store.dispatch({
        type: actionMovies.addFavourites,
        payload: { name, date, vote, image, id}
    })
}

export const deleteFavourites = ({ id }) => {
    store.dispatch({
        type: actionMovies.deleteFavourites,
        payload: {
            id
        }
    })
}

export const login = () => {
    return async (dispatch) => {
        const sessionId = localStorage.getItem('sessionId')
        const key =  sessionId ? sessionId : await createGuestSession();
        dispatch({
            type: actionsUser.login,
            payload: {
                key
            }
        })
    }
}

export const logout = () => {
    store.dispatch({
        type: actionsUser.logout,
        payload: {}
    })
}