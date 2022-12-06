const Users = require('./users.models')
const Cart = require('./cart.models')
const Orders = require('./orders.models')
const Books = require('./books.models')
const Categories = require('./categories.models')
const Tags = require('./tags.models')

const initModels = () => {
    Users.hasOne(Cart)
    Cart.belongsTo(Users)

    Orders.belongsTo(Users)
    Users.hasMany(Orders)

    Books.belongsToMany(Categories,{through: 'book_categories'})
    Categories.belongsToMany(Books, {through: 'book_categories'})

    Books.belongsToMany(Tags, {through: 'book_tags'})
    Tags.belongsToMany(Books, {through: 'book_tags'})
}

module.exports = initModels