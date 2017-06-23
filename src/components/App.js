import React from 'react';
import { Link } from 'react-router-dom';
import Routes from '../routes';

const App = () =>
    <div>
        <h1>Header</h1>
        {Routes}
        <footer>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </footer>
    </div>;

export default App;
