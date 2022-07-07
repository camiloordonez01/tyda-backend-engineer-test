const Joi = require('joi')

const messages = require('../../../messages')

const { Logger } = require('../../infrastructure/logger')
const { ErrorHandler } = require('../../infrastructure/handler')

/**
 * Validates the token
 *
 * @author camilo.ordonez
 *
 */
module.exports = async (req, res, next) => {
    try {
        // create schema object
        const schemaHeaders = Joi.object({
            authorization: Joi.string().required(),
        })

        // schema options
        const options = {
            abortEarly: false, // include all errors
            allowUnknown: true, // ignore unknown props
            stripUnknown: true, // remove unknown props
        }

        // validate request body against schema
        const { error } = schemaHeaders.validate(req.headers, options)

        const messagesError = []
        error?.details.forEach((element) => {
            if (element.context.key === 'authorization') {
                if (element.type === 'any.required') {
                    messagesError.push(messages.AUTHORIZATION_REQUIRED)
                }
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
            file: 'AuthMiddleware.ts',
            message: `${error.message}`,
            stack: error.stack,
        })
        next(error)
    }
}
