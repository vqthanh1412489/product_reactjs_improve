import React from 'react';
import './App.scss';

import ProducsPage from './pages/ProducsPage/index';

class App extends React.Component {

    render() {
        return (
            <div className="App">
                <h1 className="thanh">Thanh</h1>
                <ProducsPage/>
            </div>
        );
    }
}

export default App;
