const Users = require('./users.models')
const Cart = require('./cart.models')
const Orders = require('./orders.models')

const initModels = () => {
    Users.hasOne(Cart)
    Cart.belongsTo(Users)

    Orders.belongsTo(Users)
    Users.hasMany(Orders)
}

module.exports = initModels