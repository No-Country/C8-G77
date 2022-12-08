const { DataTypes } = require('sequelize')
const db = require('../utils/database')
const Orders = require('../models/orders.models')
const Books = require('../models/books.models')

const DetailOrders = db.define('detail_orders', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        unique: true
    },
    orderId:{
        type: DataTypes.UUID,
        allowNull: false,
        field: 'order_id',
        references: {
            key: 'id',
            model: Orders
        }
    },
    bookId: {
        type: DataTypes.UUID,
        allowNull: false,
        field: 'book_id',
        references: {
            key: 'id',
            model: Books
        }
    }, 
    amount: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    tottal: {
        type: DataTypes.DECIMAL,
        allowNull: false
    }
})

module.exports = DetailOrders