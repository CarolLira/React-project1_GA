import axios from 'axios';

export const jokeURL = axios.create({
    baseURL: 'https://api.chucknorris.io/jokes/',
});

export const webhook = axios.create({
    baseURL: 'https://webhook.site/44fff23c-d756-4cc9-a2c4-551bed301a8b',
});