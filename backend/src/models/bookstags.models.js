const { DataTypes } = require('sequelize')
const db = require('../utils/database')
const Books = require('./books.models')
const Tags = require('./tags.models')

const BooksTags = db.define('books_tags', {
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
        },
    },
    tagId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'tag_id',
        references: {
            key: 'id',
            model: Tags
        }
    },
}, {
    timestamps: false
})

module.exports = BooksTags