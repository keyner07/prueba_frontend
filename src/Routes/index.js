import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import Home from 'pages/Home';
import NowPlaying from 'pages/NowPlaying';
import DetailMovie from 'pages/DetailMovie';

export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/now-playing' component={NowPlaying} />
                <Route exact path='/movie/:id' component={DetailMovie} />
                <Route path="*" component={<h1>Pagina no encontrada</h1>} />
            </Switch>
        </Router>
    )
}