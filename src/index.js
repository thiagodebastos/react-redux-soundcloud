import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const rootEl = document.getElementById('root');

ReactDOM.render(<App />, rootEl);

if (module.hot && process.NODE_ENV === 'development') {
    module.hot.accept();
    // eslint-disable-next-line global-require
    const NextApp = require('./App').default;
    ReactDOM.render(<NextApp loadMetadata={false} />, rootEl);
}
