import axios from 'axios';
import crypto from 'crypto';

import store from '../store';
import { getMarvelsSuccess, getMarvelSuccess } from '../actions/actions';

function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
* Create Hash with Crypto
* return url parametrs
*/

function getEncryption() {
    
    /* Generate random Key*/
    let randomInt = getRandomInt (0, 2017);
    let ts = Math.floor(Date.now() / 1000) * randomInt;
    
    const api_public = 'public key'
    const api_private = 'private key'
    
    /* Create Hash with Crypto */
    const hash = crypto.createHash('md5').update(ts + api_private + api_public).digest('hex');
    
    return {'hash': hash, 'api_public': api_public, 'ts': ts};
}

/**
 * Get Marvels
 */

export function getMarvels() {

    const parameters = getEncryption();
    let urlBase = "http://gateway.marvel.com/v1/public/characters";
    const url = urlBase + "?limit=9&apikey="+parameters.api_public+"&ts="+parameters.ts+"&hash="+parameters.hash;    
    return axios.get(url)
        .then(response => {
            store.dispatch(getMarvelsSuccess(response.data.data.results));          
            return response;
        });
}

/**
 * Get Marvel
 */

export function getMarvel(marvelId) {
    const parameters = getEncryption();
    
    let urlBase = "http://gateway.marvel.com/v1/public/characters/"+marvelId;
    const url = urlBase +"?apikey="+parameters.api_public+"&ts="+parameters.ts+"&hash="+parameters.hash;
    
    return axios.get(url)
        .then(response => {
            store.dispatch(getMarvelSuccess(response.data.data.results[0]));
        })
}