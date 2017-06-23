import React from 'react';

import createHistory from 'history/createBrowserHistory';
import { Route } from 'react-router';

import { ConnectedRouter } from 'react-router-redux';

import App from './components/App';
import Callback from './components/Callback';

// Create a history of your choosing
// (we're using a browser history in this case)
const history = createHistory();

// Now you can dispatch navigation actions from anywhere!
// store.dispatch(push('/foo'));

const Routes = () =>
    <ConnectedRouter history={history}>
        <div>
            <Route exact path="/" component={App} />
            <Route path="/callback" component={Callback} />
        </div>
    </ConnectedRouter>;

export default Routes;
