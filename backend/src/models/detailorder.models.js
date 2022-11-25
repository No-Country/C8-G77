const { DataTypes } = require('sequelize')
const db = require('../utils/database')
const Orders = require('./orders.models')

const DetailOrders = db.define('detail_orders', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    idOrder: {
        type: DataTypes.UUID,
        allowNull: false,
        field: 'idOrder',
        references: {
            key: 'id',
            model: Orders
        }
    },
    bookName: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'book_name'
    },
    value: {
        type: DataTypes.DECIMAL(3, 2),
        allowNull: false
    },
    amount: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    total: {
        type: DataTypes.DECIMAL(6, 2),
        allowNull: false
    }
}, {
    timestamps: false
})

module.exports = DetailOrders