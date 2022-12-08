const { DataTypes } = require('sequelize')
const db = require('../utils/database')
const Users = require('./users.models')
const PaymenthMethods = require('./paymentMethods.models')

const Orders = db.define('orders', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        unique: true,
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
    paymenthMethodId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'paymenth_method_id',
        references: {
            key: 'id',
            model: PaymenthMethods
        }
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