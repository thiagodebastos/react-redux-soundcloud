// @flow
import React from 'react';

type Props = {
    children: React.Element<*>
};

const App = (props: Props) => {
    const { children } = props;
    return <div>{children}</div>;
};

export default App;
