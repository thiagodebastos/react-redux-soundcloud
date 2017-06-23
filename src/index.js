import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import configureStore from './stores/configureStore';
import * as actions from './actions';
import App from './components/App';

// import { CLIENT_ID, REDIRECT_URL } from './constants/auth';

const rootEl = document.getElementById('root');

const tracks = [
    { id: 124, title: 'Tavanti' },
    { id: 15124, title: 'Walking in India' }
];

const store = configureStore();

store.dispatch(actions.setTracks(tracks));

const render = Component => {
    ReactDOM.render(
        <AppContainer>
            <Provider store={store}>
                <Component />
            </Provider>
        </AppContainer>,
        rootEl
    );
};

render(App);

//  https://github.com/gaearon/react-hot-loader/tree/master/docs#webpack-2
if (module.hot) {
    module.hot.accept('./components/App', () => {
        render(App);
    });
}
