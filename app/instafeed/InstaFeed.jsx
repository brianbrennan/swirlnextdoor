import React from 'react';

import { getInstaPosts, buildPostUrl } from './instagram-manager.js';

export default class InstaFeed extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            instaPosts: [],
            instaPostRefs: []
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
            return (
                <div className="instapost col-lg-4 col-xs-12"
                     key={instaPost.id}>
                    <a href={buildPostUrl(instaPost)}>
                        <img src={instaPost.thumbnail}/>
                        <div className="instapost-overlay">
                            
                        </div>
                    </a>
                </div>
            );
        });
        
        return (
            <section className="instafeed container">
                {instaPostElements}
            </section>
        );
    }
}