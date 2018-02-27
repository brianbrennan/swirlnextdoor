import React from 'react';
import { getBiography } from './../instafeed/instagram-manager.js';

export default class HomeTop extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            biography: ''
        };
    }

    componentWillMount() {
        getBiography()
            .then((biography) => {
                this.setState({biography});
            });
    }

    render() {
        return (
            <section className="snd-home-top">
                <h2 className="snd-site-title">
                    Swirl Next Door
                </h2>
                <p className="snd-biography">
                    {this.state.biography}
                </p>
            </section>
        );
    }
}