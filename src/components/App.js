import React from 'react';
import { Link } from 'react-router-dom';
import Routes from '../routes';

const App = () =>
    <div>
        <h1>Filter table</h1>
        {Routes}
        <footer>
            <Link to="/">Home</Link>
            <Link to="/callback">API callback</Link>
        </footer>
    </div>;

export default App;
