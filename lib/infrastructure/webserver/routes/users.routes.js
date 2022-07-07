const express = require('express')

const UsersRouter = express.Router()

const {
    SignUpMiddleware,
    SignInMiddleware,
    AuthMiddleware,
    RestaurantsMiddleware,
} = require('../../../interfaces/middleware')

const {
    signUp,
    signIn,
    getRestaurantsByLatLng,
} = require('../../../interfaces/controllers/UsersController')

UsersRouter.post('/signup', SignUpMiddleware, signUp)

UsersRouter.post('/signin', SignInMiddleware, signIn)

UsersRouter.post(
    '/restaurants',
    AuthMiddleware,
    RestaurantsMiddleware,
    getRestaurantsByLatLng
)

module.exports = { UsersRouter }
