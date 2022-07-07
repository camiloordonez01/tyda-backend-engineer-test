const moment = require('moment-timezone')
const { sign, verify } = require('jsonwebtoken')

const messages = require('../../../messages')

const { ErrorHandler } = require('../../infrastructure/handler')

const { keyToken } = require('../../../keys')

const { TIMEZONE } = process.env

/**
 * Generate a token
 * @param {string} uidUser user identifier
 * @returns {string} Token user for requests
 */
const generateToken = (uidUser) =>
    sign({ uidUser }, keyToken, {
        expiresIn: '1h',
    })

/**
 * Decoded user token
 * @param {string} token user token
 * @returns {string}
 */
const decodedToken = (token) => {
    try {
        return verify(token, keyToken)
    } catch (error) {
        throw new ErrorHandler(401, messages.INVALID_TOKEN)
    }
}

/**
 * Get the expiration date for the token
 *
 * @author camilo.ordonez
 * @returns {string} Date format YYYY-MM-DD HH:mm:ss
 */
const getExpirationDate = (seconds) =>
    moment(new Date().getTime())
        .tz(TIMEZONE)
        .add(seconds, 'seconds')
        .format('YYYY-MM-DD HH:mm:ss')
        .toString()

module.exports = {
    getExpirationDate,
    generateToken,
    decodedToken,
}
