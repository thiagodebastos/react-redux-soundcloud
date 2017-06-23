import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import configureStore from './stores/configureStore';
import * as actions from './actions';
import Stream from './components/Stream';

const rootEl = document.getElementById('root');

const tracks = [
    { id: 124, title: 'Tavanti' },
    { id: 15124, title: 'Walking in India' }
];

const store = configureStore();

store.dispatch(actions.setTracks(tracks));

ReactDOM.render(
    <AppContainer>
        <Provider store={store}>
            <Stream />
        </Provider>
    </AppContainer>,
    rootEl
);

if (module.hot) {
    module.hot.accept();
    // eslint-disable-next-line global-require
    const NextApp = require('./components/Stream').default;
    ReactDOM.render(<NextApp store={store} />, rootEl);
}
