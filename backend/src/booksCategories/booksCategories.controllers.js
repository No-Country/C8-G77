const BooksCategories = require('../models/booksCategories.models')

const getAllBooksCategories = async () => {
    const data = await BooksCategories.findAll()
    return data
}

const createBooksCategories = async (data) => {
    const response = await BooksCategories.create({
        bookId: data.bookId,
        categoryId: data.categoryId,
    })
    return response
}

const deleteBooksCategory = async (bookId, categoryId) => {
    const data = await BooksCategories.destroy({
        where: {
            bookId: bookId,
            categoryId: categoryId
        }
    })
}

module.exports = {
    getAllBooksCategories,
    createBooksCategories,
    deleteBooksCategory
}