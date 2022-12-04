const { DataTypes } = require('sequelize')
const db = require('../utils/database')
const Users = require('./users.models')

const Orders = db.define('orders', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
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
    },
    dateOrder: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        field: 'date_order'
    }
})

module.exports = Orders