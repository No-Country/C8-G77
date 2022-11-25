const Users = require('./users.models')
const Cart = require('./cart.models')
const Orders = require('./orders.models')
const DetailOrder = require('./detailorder.models')


const initModels = () => {
    Users.hasOne(Cart)
    Cart.belongsTo(Users)

    Orders.belongsTo(Users)
    Users.hasMany(Orders)

    DetailOrder.belongsTo(Orders)
    Orders.hasMany(DetailOrder)
}

module.exports = initModels