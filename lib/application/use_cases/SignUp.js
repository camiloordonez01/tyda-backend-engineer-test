const { v4: uuidv4 } = require('uuid')
const md5 = require('md5')

const messages = require('../../../messages')

const { Logger } = require('../../infrastructure/logger')
const { ErrorHandler } = require('../../infrastructure/handler')

const { UserEntity } = require('../../domain/entities')

const { UserRepository } = require('../../domain/repositories')
const { UserStorage } = require('../../interfaces/storage')

const userRepository = new UserRepository(new UserStorage())

/**
 * Execute the business rules to Sign Up
 *
 * @author camilo.ordonez
 *
 */
module.exports = async (data) => {
    try {
        // User search by email
        const foundUser = await userRepository.getUserByEmail(data.email)

        // Validate the existence of the user
        if (foundUser) {
            throw new ErrorHandler(400, messages.USER_EXISTING)
        }

        const uidUser = uuidv4()
        const user = new UserEntity({
            uidUser,
            email: data.email,
            password: md5(data.password),
        })

        // Create the user in the database
        const createUserDb = await userRepository.createUser(user)

        if (!createUserDb.status) {
            throw new ErrorHandler(400, createUserDb.value)
        }

        Logger.info({
            level: 'info',
            file: 'SignUp.js',
            message: `${messages.SUCCESS_SIGN_UP}`,
        })

        return true
    } catch (error) {
        Logger.crit({
            level: 'crit',
            file: 'SignUp.js',
            message: `${error.message}`,
            stack: error.stack,
        })
        return Promise.reject(error)
    }
}
