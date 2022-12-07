const { DataTypes } = require("sequelize");
const db = require('../utils/database')

const Books_Categories = db.define('book_tags', {
    selfGranted: DataTypes.BOOLEAN
}, {
    timestamps: false
})

module.exports = Books_Categories