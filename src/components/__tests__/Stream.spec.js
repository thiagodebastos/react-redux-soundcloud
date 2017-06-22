import React from 'react';
import { shallow } from 'enzyme';
import Stream from '../Stream';

describe('Stream', () => {
    const props = {
        tracks: [{ title: 'x' }, { title: 'y' }]
    };
    it('renders without error', () => {
        shallow(<Stream />);
    });
    it('given two tracks, shows two elements', () => {
        const element = shallow(<Stream {...props} />);
        expect(element.find('.track')).toHaveLength(2);
    });
});
