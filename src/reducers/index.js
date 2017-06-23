import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import track from './track';
import filter from './filter';

const rootReducer = combineReducers({
    filter,
    routing,
    track
});

export default rootReducer;
