const router = require('express').Router()
const booksServices = require('./books.services')

router.route('/')
    .get(booksServices.getAllBooks)
    .post(booksServices.postBook)

router.route('/:id')
    .get(booksServices.getBookById)
    .patch(booksServices.patchBook)
    .delete(booksServices.deleteBook)

module.exports = router