class UserRepository {
    constructor(repository) {
        this.repository = repository
    }

    getUserByEmail(email) {
        return this.repository.getUserByEmail(email)
    }

    createUser(user) {
        return this.repository.createUser(user)
    }
}

module.exports = { UserRepository }
