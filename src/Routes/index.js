import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import Home from "pages/Home";
import NowPlaying from "pages/NowPlaying";
import DetailMovie from "pages/DetailMovie";
import FavMovies from "pages/FavPage";
import RatedMovies from "pages/RatedMovies";
import NotFound from "pages/NotFound";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/now-playing" component={NowPlaying} />
        <Route exact path="/favs" component={FavMovies} />
        <Route exact path="/rate-movies" component={RatedMovies} />
        <Route exact path="/movies/:id" component={DetailMovie} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}
