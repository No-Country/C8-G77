const router = require('express').Router()
const categoriesServices = require('./categories.services')
const { getBooksByCategory } = require('../booksCategories/booksCategories.services')

router.route('/')
    .get(categoriesServices.getAllCategories)
    .post(categoriesServices.postCategory)

router.route('/:id')
    .get(categoriesServices.getCategorieById)
    .patch(categoriesServices.patchCategory)
    .delete(categoriesServices.deleteCategory)

router.get('/:id/books', getBooksByCategory)

module.exports = router