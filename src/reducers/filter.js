import * as actionTypes from '../constants/actionTypes';

const initialState = '';

export default function reducer(state = initialState, action) {
    switch (action.type) {
    case actionTypes.FILTER:
        return action.filter;
    default:
        return state;
    }
}
