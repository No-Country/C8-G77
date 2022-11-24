const {DataTypes} = require('sequelize')
const db = require('../utils/database')
const Users = require('./users.models')

const Orders = db.define('orders', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
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
    },
    totalOrder: {
        type: DataTypes.DECIMAL(6,2),
        allowNull: false,
        field: 'total_order'
    },
    dateOrder: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        field: 'date_order'
    }
})

module.exports = Orders