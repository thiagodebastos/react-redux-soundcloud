// @flow
import React from 'react';

type Track = {
    id: number,
    title: string
};

type Props = {
    tracks: Array<Track>
};

const Stream = ({ tracks = [] }: Props) =>
    <div>
        {tracks.map(track =>
            <div className="track" key={track.id}>{track.title}</div>
        )}
    </div>;

export default Stream;
