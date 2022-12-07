const { DataTypes } = require("sequelize");
const db = require('../utils/database')
const Books = require('./books.models')
const Categories = require('./categories.models')

const Books_Categories = db.define('books_categories', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
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
    categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'category_id',
        references: {
            key: 'id',
            model: Categories
        }
    }
}, {
    timestamps: false
})

module.exports = Books_Categories