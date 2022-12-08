const { DataTypes } = require("sequelize");
const db = require('../utils/database')

const Books_Cart = db.define('books_cart', {
    selfGranted: DataTypes.BOOLEAN
}, {
    timestamps: false
})

module.exports = Books_Cart