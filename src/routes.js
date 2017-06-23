import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Callback from './components/Callback';

export default (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={Callback} />
    </Switch>
);
