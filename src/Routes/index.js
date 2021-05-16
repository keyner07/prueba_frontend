import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import { UserContextProvider } from 'context/UserContext';

import Home from 'pages/Home';
import NowPlaying from 'pages/NowPlaying';
import DetailMovie from 'pages/DetailMovie';
import MoviesSimilar from 'pages/MoviesSimilar'; 

export default function Routes() {
    return (
        <Router>
            <UserContextProvider>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/now-playing' component={NowPlaying} />
                    <Route exact path='/movies/:id' component={DetailMovie} />
                    <Route exact path='/movies/:id/similar' component={MoviesSimilar} />
                    {/* <Route path="*" component={<h1>Pagina no encontrada</h1>} /> */}
                </Switch>
            </UserContextProvider>
        </Router>
    )
}