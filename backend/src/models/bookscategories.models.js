const { DataTypes } = require('sequelize')
const db = require('../utils/database')
const Books = require('./books.models')
const Categories = require('./categories.models')

const BooksCategories = db.define('books_categories', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: true,
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
    categoriesId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'categories_id',
        references: {
            key: 'id',
            model: Categories
        }
    }
}, {
    timestamps: false
})

module.exports = BooksCategories