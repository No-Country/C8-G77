const { DataTypes } = require('sequelize')
const db = require('../utils/database')

const PaymentMethods = db.define('payment_methods',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true,
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    }
},{
    timestamps: false
})

module.exports = PaymentMethods