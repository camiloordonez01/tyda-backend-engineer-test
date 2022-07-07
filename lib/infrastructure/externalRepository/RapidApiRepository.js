const axios = require('axios')

const { keyRapidAPI } = require('../../../keys')
/**
 * Class responsible for communicating with the platform RapidApi
 *
 * @author camilo.ordonez
 *
 */
class RapidApiRepository {
    constructor() {
        this.key = keyRapidAPI
        this.host = process.env.HOST_RAPID_API
    }

    async getRestaurants(latitude, longitude) {
        const options = {
            method: 'GET',
            url: 'https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng',
            params: {
                latitude,
                longitude,
                limit: '30',
                currency: 'USD',
                distance: '2',
                open_now: 'false',
                lunit: 'km',
                lang: 'en_US',
            },
            headers: {
                'X-RapidAPI-Key': this.key,
                'X-RapidAPI-Host': this.host,
            },
        }

        const response = await axios.request(options)

        return response.data
    }
}

module.exports = { RapidApiRepository }
