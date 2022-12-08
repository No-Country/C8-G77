const { DataTypes } = require("sequelize");
const db = require('../utils/database')

const Books_Categories = db.define('books_categories', {
    selfGranted: DataTypes.BOOLEAN
}, {
    timestamps: false
})

module.exports = Books_Categories