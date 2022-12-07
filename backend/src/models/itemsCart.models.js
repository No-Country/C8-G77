const { DataTypes } = require('sequelize')
const db = require('../utils/database')
const Books = require('../models/books.models')

const ItemsCart = db.define('items_carts', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
        allowNull: false,
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
    total: {
        type: DataTypes.DECIMAL,
        allowNull: false
    }
})

module.exports = ItemsCart