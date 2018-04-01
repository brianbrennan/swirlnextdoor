import axios from 'axios';
import objectPath from 'object-path';
import Q from 'q';

export function loadInstagramData() {
    let hasProperData;

    return axios.get('https://www.instagram.com/swirlnextdoor/?__a=1')
        .then(function (response) {
            hasProperData = objectPath.has(response, 'data.graphql.user');

            console.log(response);
            if(hasProperData) {
                localStorage.setItem('instafeed', JSON.stringify(objectPath.get(response, 'data.graphql.user')));
                return objectPath.get(response, 'data.user');
            } else {
                throw new Error('Something Went Wrong!');
            }
        });
}

export function getInstagramData() {
    if(localStorage.getItem('instafeed') === null) {
        return loadInstagramData();
    } else {
        return Q.resolve(JSON.parse(localStorage.getItem('instafeed')));
    }
}

export function getInstaPosts() {
    let instaPosts = [];

    return getInstagramData()
        .then(function(instaData) {
            let currentInstaPost;

            instaData.media.nodes.forEach(function(instaPost) {
                currentInstaPost = {
                    id: instaPost.id,
                    thumbnail: instaPost.thumbnail_src,
                    code: instaPost.code
                };
                instaPosts.push(currentInstaPost);
            });

            return instaPosts;
        });
}

export function getBiography() {
    return getInstagramData()
        .then(function(instaData) {
            return instaData.biography; 
        });
}

export function buildPostUrl(instaPost) {
    let code = instaPost.code;

    return 'https://instagram.com/p/' + code;
}