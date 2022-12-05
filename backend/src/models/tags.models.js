const { DataTypes, Model } = require('sequelize')
const db = require('../utils/database')

const Tags = db.define('tags', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
})

module.exports = Tags