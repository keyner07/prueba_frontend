import { createStore, combineReducers, applyMiddleware } from "redux";
import { actionMovies, actionsUser } from "./actions";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

export function moviesReducer(movies = [], action) {
  switch (action.type) {
    case actionMovies.addFavourites:
      movies = movies.concat([action.payload]);
      return movies;
    case actionMovies.deleteFavourites:
      const { id } = action.payload;
      movies = movies.filter((movie) => movie.id !== id);
      return movies;
    default:
      return movies;
  }
}

export function userReducer(user = "", action) {
  switch (action.type) {
    case actionsUser.login:
      user = action.payload.key;
      return user;
    case actionsUser.logout:
      user = "";
      return user;
    default:
      return user;
  }
}

export const store = createStore(
  combineReducers({
    movies: moviesReducer,
    user: userReducer,
  }),
  composeWithDevTools(applyMiddleware(thunk))
);
