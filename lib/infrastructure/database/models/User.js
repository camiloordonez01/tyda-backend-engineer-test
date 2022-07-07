const { DataTypes } = require('sequelize')
const { sequelize } = require('../../../infrastructure/database')
const {
    modelColumnDefault,
    columnIdDefault,
} = require('../../../objects/models')

const User = sequelize.define(
    'User',
    {
        idUser: columnIdDefault('id_user'),
        uidUser: {
            type: DataTypes.STRING(100),
            field: 'uid_user',
            unique: true,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING(100),
            field: 'email',
            unique: true,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING(100),
            field: 'password',
            allowNull: false,
        },
        ...modelColumnDefault,
    },
    {
        sequelize,
        tableName: 'tbl_users',
        timestamps: false,
    }
)

module.exports = { User }
