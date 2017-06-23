import * as actionTypes from '../constants/actionTypes';

// eslint-disable-next-line import/prefer-default-export
export function setTracks(tracks) {
    return {
        type: actionTypes.TRACKS_SET,
        tracks
    };
}
