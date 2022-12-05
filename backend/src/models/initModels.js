const Users = require('./users.models')
const Cart = require('./cart.models')
const Orders = require('./orders.models')
const Books = require('./books.models')
const Categories = require('./categories.models')
const Tags = require('./tags.models')
const BooksCategories = require('./bookscategories.models')
const BooksTags = require('./bookstags.models')

const initModels = () => {
    Users.hasOne(Cart)
    Cart.belongsTo(Users)

    Orders.belongsTo(Users)
    Users.hasMany(Orders)

    BooksCategories.belongsTo(Books)
    Books.hasMany(BooksCategories)

    BooksCategories.belongsTo(Categories)
    Categories.hasMany(BooksCategories)

    BooksTags.belongsTo(Books)
    Books.hasMany(BooksTags)

    BooksTags.belongsTo(Tags)
    Tags.hasMany(BooksTags)
}

module.exports = initModels