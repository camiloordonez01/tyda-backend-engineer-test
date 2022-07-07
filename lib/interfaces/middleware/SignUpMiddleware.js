const Joi = require('joi')

const messages = require('../../../messages')
const regexs = require('../../regexs')

const { Logger } = require('../../infrastructure/logger')
const { ErrorHandler } = require('../../infrastructure/handler')

/**
 * Validate the information when signUp
 *
 * @author camilo.ordonez
 *
 */
module.exports = async (req, res, next) => {
    try {
        // create schema object
        const schemaBody = Joi.object({
            email: Joi.string().email().required(),
            password: Joi.string().pattern(regexs.REGEX_PASSWORD).required(),
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
                case 'email':
                    if (element.type === 'any.required') {
                        messagesError.push(messages.EMAIL_REQUIRED)
                    } else if (element.type === 'string.email') {
                        messagesError.push(messages.EMAIL_INVALID)
                    }
                    break
                case 'password':
                    if (element.type === 'any.required') {
                        messagesError.push(messages.PASSWORD_REQUIRED)
                    } else if (element.type === 'string.pattern.base') {
                        messagesError.push(messages.PASSWORD_INVALID)
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
            file: 'SignUpMiddleware.js',
            message: `${error.message}`,
            stack: error.stack,
        })
        next(error)
    }
}
