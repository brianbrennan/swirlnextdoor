import React from 'react';
import ReactDOM from 'react-dom';

import './../../node_modules/bootstrap-sass/assets/stylesheets/_bootstrap.scss';
import './../globals/scss/styles.scss';

import HomeTop from './../home-top/HomeTop.jsx';
import InstaFeed from './../instafeed/InstaFeed.jsx';
import Footer from './../footer/Footer.jsx';

class App extends React.Component {
    render() {
        return (
            <div className="app-container swirl-next-door">
                <HomeTop />
                <InstaFeed />
                <Footer />
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));