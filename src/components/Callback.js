import React, { Component } from 'react';

class Callback extends Component {
    componentDidMount() {
        console.info('test');
    }
    render() {
        return (
            <div>
                <p>This page should close soon.</p>
            </div>
        );
    }
}

export default Callback;
