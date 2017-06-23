import * as actionTypes from '../constants/actionTypes';

const initialState = [{ id: 0, title: 'Travata' }, { id: 1, title: 'Test' }];

function setTracks(state, action) {
    return [...state, ...action.tracks];
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
    case actionTypes.TRACKS_SET:
        return setTracks(state, action);
    default:
        return state;
    }
}
