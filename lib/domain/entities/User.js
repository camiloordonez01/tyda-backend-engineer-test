class UserEntity {
    constructor({
        idUser,
        uidUser,
        email,
        password,
        activeRow,
        createdAt,
        updatedAt,
    }) {
        this.idUser = idUser
        this.uidUser = uidUser
        this.email = email
        this.password = password
        this.activeRow = activeRow
        this.createdAt = createdAt
        this.updatedAt = updatedAt
    }
}

module.exports = { UserEntity }
