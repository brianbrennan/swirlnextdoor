import React from 'react';
import ReactDOM from 'react-dom';

import InstaFeed from './../instafeed/InstaFeed.jsx'

class App extends React.Component {
    render() {
        return (
            <div className="app-container">
                <h2>Swirl Next Door</h2>
                <InstaFeed>

                </InstaFeed>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));