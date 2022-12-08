const Users = require('./users.models')
const Cart = require('./cart.models')
const Orders = require('./orders.models')
const Books = require('./books.models')
const Categories = require('./categories.models')
const Tags = require('./tags.models')
const BooksCategories = require('./booksCategories.models')
const BookTags = require('./bookTags.model')
const ItemsCarts = require('../models/itemsCart.models')
const PaymentMethods = require('../models/paymentMethods.models')
const DetailOrders = require('../models/detailOrders.model')

const initModels = () => {
    Users.hasOne(Cart)
    Cart.belongsTo(Users)

    Orders.belongsTo(Users)
    Users.hasMany(Orders)

    ItemsCarts.belongsTo(Cart)
    Cart.hasMany(ItemsCarts) 

   /*  Orders.hasOne(PaymentMethods)
    PaymentMethods.belongsTo(Orders) */

    DetailOrders.belongsTo(Orders)
    Orders.hasMany(DetailOrders)

    Books.belongsToMany(Categories, { through: BooksCategories })
    Categories.belongsToMany(Books, { through: BooksCategories })
    BooksCategories.belongsTo(Books)
    Books.hasMany(BooksCategories)
    BooksCategories.belongsTo(Categories)
    Categories.hasMany(BooksCategories)

    Books.belongsToMany(Tags, { through: BookTags })
    Tags.belongsToMany(Books, { through: BookTags })
    BookTags.belongsTo(Books)
    Books.hasMany(BookTags)
    BookTags.belongsTo(Tags)
    Tags.hasMany(BookTags)
}

module.exports = initModels