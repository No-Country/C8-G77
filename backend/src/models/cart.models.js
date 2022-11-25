const { DataTypes } = require('sequelize')
const db = require('../utils/database')
const Users = require('./users.models')

const Cart = db.define('cart', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false
    },
    bookName:{
        type: DataTypes.STRING,
        allowNull: false,
        field: 'book_name'
    },
    value:{
        type: DataTypes.DECIMAL(4, 2),
        allowNull: false
    },
    amount: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    total: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    idUser: {
        type: DataTypes.UUID,
        allowNull: false,
        field: 'id_user',
        references:{
            key: 'id',
            model: Users
        }
    }
})

module.exports = Cart