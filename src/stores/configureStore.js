/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

const configureStore = initialState =>
    createStoreWithMiddleware(
        rootReducer,
        initialState,
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__()
    );

export default configureStore;
