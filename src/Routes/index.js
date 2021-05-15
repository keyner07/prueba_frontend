import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import Home from 'pages/Home';

export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path="*" component={<h1>Pagina no encontrada</h1>} />
            </Switch>
        </Router>
    )
}