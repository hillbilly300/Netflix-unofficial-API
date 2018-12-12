const axios = require('axios');
const querystring = require('querystring');

class searchableAPI {
    constructor(token) {
        this.instance = axios.create({
            baseURL: 'http://api.searchablelist.com/',
            headers: { 'X-Auth-Token': token }
        });
    }

    movie({movie} = {}) {
        return this.instance.get(`/movie?${querystring.stringify({areas: movie})}`)
    }
}

module.exports = searchableAPI;