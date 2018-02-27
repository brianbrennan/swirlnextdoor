import React from 'react';

import { getInstaPosts } from './instagram-manager.js';

export default class InstaFeed extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            instaPosts: []
        }
    }

    componentWillMount() {
        getInstaPosts()
            .then((instaPosts) => {
                this.setState({instaPosts: instaPosts});
            });
    }

    render() {
        let instaPostElements = this.state.instaPosts.map((instaPost) => {
            console.log(instaPost);
            return (
                <div className="instapost" key={instaPost.id}>
                    <img src={instaPost.thumbnail} alt=""/>
                </div>
            );
        });
        
        return (
            <section className="instafeed">
                {instaPostElements}
            </section>
        );
    }
}