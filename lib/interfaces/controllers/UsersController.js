const { decodedToken } = require('../../application/common/Utils')
const { ResponseHandler } = require('../../infrastructure/handler')

const {
    SignUp,
    SignIn,
    GetRestaurantsByLatLng,
} = require('../../application/use_cases')

module.exports = {
    async signUp(req, _, next) {
        try {
            next(new ResponseHandler(201, await SignUp(req.body)))
        } catch (error) {
            next(error)
        }
    },
    async signIn(req, _, next) {
        try {
            const { email, password } = req.body
            next(new ResponseHandler(200, await SignIn(email, password)))
        } catch (error) {
            next(error)
        }
    },
    async getRestaurantsByLatLng(req, _, next) {
        try {
            const { authorization } = req.headers
            const { latitud, longitud } = req.body

            decodedToken(authorization)
            next(
                new ResponseHandler(
                    200,
                    await GetRestaurantsByLatLng(latitud, longitud)
                )
            )
        } catch (error) {
            next(error)
        }
    },
}
