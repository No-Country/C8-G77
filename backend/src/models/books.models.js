const { DataTypes } = require('sequelize')
const db = require('../utils/database')

const Books = db.define('books', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    publisherDate: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    qualification: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    pages: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    lenguage: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    urlDetails: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    urlDownload: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    cover: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    thumbnail: {
        type: DataTypes.STRING,
        allowNull: false,
    },
})

module.exports = Books