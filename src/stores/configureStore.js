/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware } from 'redux';
// import { routerMiddleWare } from 'react-router-redux';
import rootReducer from '../reducers';

// const router = routerMiddleWare(history);

const createStoreWithMiddleware = applyMiddleware(/* router */)(createStore);

const configureStore = initialState =>
    createStoreWithMiddleware(
        rootReducer,
        initialState,
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__()
    );

export default configureStore;
