const md5 = require('md5')

const messages = require('../../../messages')
const { getExpirationDate, generateToken } = require('../common/Utils')

const { Logger } = require('../../infrastructure/logger')
const { ErrorHandler } = require('../../infrastructure/handler')

const { UserRepository } = require('../../domain/repositories')
const { UserStorage } = require('../../interfaces/storage')

const userRepository = new UserRepository(new UserStorage())
/**
 * Execute the business rules to Sign In
 *
 * @author camilo.ordonez
 *
 */
module.exports = async (email, password) => {
    try {
        // User search by email
        const foundUser = await userRepository.getUserByEmail(email)

        // Validates the existence and if the key is correct
        if (foundUser === null || md5(password) !== foundUser.password) {
            throw new ErrorHandler(401, messages.LOGIN_INVALID)
        }

        return {
            AccessToken: generateToken(foundUser.uid),
            Expiration: getExpirationDate(3600),
        }
    } catch (error) {
        Logger.crit({
            level: 'crit',
            file: 'SignIn.js',
            message: `${error.message}`,
            stack: error.stack,
        })
        return Promise.reject(error)
    }
}
