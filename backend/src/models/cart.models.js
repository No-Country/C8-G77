const { DataTypes } = require('sequelize')
const db = require('../utils/database')
const Users = require('./users.models')

const Cart = db.define('cart', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false
    },
    userId: {
        type: DataTypes.UUID,
        allowNull: false,
        field: 'user_id',
        references: {
            key: 'id',
            model: Users
        }
    },
    bookName: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'book_name'
    },
    value: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    amount: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    total: {
        type: DataTypes.DECIMAL,
        allowNull: false
    }
})

module.exports = Cart