const router = require('express').Router()
const booksCategoriesServices = require('./booksCategories.services')

router.route('/')
    .get(booksCategoriesServices.getAllBooksCategories)
    .post(booksCategoriesServices.postBooksCategories)
    .delete(booksCategoriesServices.deleteBooksCategories)

module.exports = router