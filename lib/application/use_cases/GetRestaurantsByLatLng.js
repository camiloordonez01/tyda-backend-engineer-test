const { Logger } = require('../../infrastructure/logger')

const {
    RapidApiRepository,
} = require('../../infrastructure/externalRepository')

const rapidApiRepository = new RapidApiRepository()
/**
 * Execute the business rules to get restaurants
 *
 * @author camilo.ordonez
 *
 */
module.exports = async (latitude, longitude) => {
    try {
        const result = await rapidApiRepository.getRestaurants(
            latitude,
            longitude
        )

        return result.data
    } catch (error) {
        Logger.crit({
            level: 'crit',
            file: 'GetRestaurantsByCity.js',
            message: `${error.message}`,
            stack: error.stack,
        })
        return Promise.reject(error)
    }
}
