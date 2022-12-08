const Books = require('../models/books.models')
const BooksCategory = require('../models/booksCategories.models')
const Categories = require('../models/categories.models')
const getBooksByCategory = async (categoryId) => {
    const data = await BooksCategory.findAll({
        where: {
            categoryId: categoryId
        },
        include: [
            {
                model: Books
            },
            {
                model: Categories
            }
        ]
    })
    return data
}
module.exports = {
    getBooksByCategory
}