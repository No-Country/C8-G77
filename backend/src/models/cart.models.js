const { DataTypes } = require('sequelize')
const db = require('../utils/database')
const Users = require('./users.models')
const Books = require('../models/books.models')

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
    amount: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    total: {
        type: DataTypes.DECIMAL
    }
})

module.exports = Cart