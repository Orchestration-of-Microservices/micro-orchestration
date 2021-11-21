const axios = require('axios')

class HttpClientHelper {
    constructor() {
        this.httpClient = axios
    }

    async load(url) {

        try {
            const responses = await this.httpClient.get(url);

            return responses.data;
        } catch (error) {
            console.log(`Error occured while loading at ${url}`);

            throw error;
        }
    }
}

module.exports = new HttpClientHelper()


