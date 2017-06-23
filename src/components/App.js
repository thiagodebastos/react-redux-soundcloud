// @flow
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Stream from './Stream';
import Callback from './Callback';

function App() {
    return (
        <BrowserRouter>
            <div>
                <Route exact path="/" component={Stream} />
                <Route path="/callback" component={Callback} />
            </div>
        </BrowserRouter>
    );
}

export default App;
