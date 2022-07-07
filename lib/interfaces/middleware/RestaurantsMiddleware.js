const Joi = require('joi')

const messages = require('../../../messages')

const { Logger } = require('../../infrastructure/logger')
const { ErrorHandler } = require('../../infrastructure/handler')

/**
 * Validate the information when signIn
 *
 * @author camilo.ordonez
 *
 */
module.exports = async (req, res, next) => {
    try {
        // create schema object
        const schemaBody = Joi.object({
            latitud: Joi.string().required(),
            longitud: Joi.string().required(),
        })

        // schema options
        const options = {
            abortEarly: false, // include all errors
            allowUnknown: true, // ignore unknown props
            stripUnknown: true, // remove unknown props
        }

        // validate request body against schema
        const { error } = schemaBody.validate(req.body, options)

        const messagesError = []
        error?.details.forEach((element) => {
            switch (element.context.key) {
                case 'latitud':
                    if (element.type === 'any.required') {
                        messagesError.push(messages.LATITUD_REQUIRED)
                    }
                    break
                case 'longitud':
                    if (element.type === 'any.required') {
                        messagesError.push(messages.LONGITUDE_REQUIRED)
                    }
                    break
            }
        })

        if (messagesError.length > 0) {
            // on fail return comma separated errors
            throw new ErrorHandler(400, messagesError)
        }
        next()
    } catch (error) {
        Logger.crit({
            level: 'crit',
            file: 'RestaurantsMiddleware.js',
            message: `${error.message}`,
            stack: error.stack,
        })
        next(error)
    }
}
