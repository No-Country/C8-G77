const booksCategoriesControllers = require('./booksCategories.controllers')

const getAllBooksCategories = (req, res) => {
    booksCategoriesControllers.getAllBooksCategories()
        .then(data => res.status(200).json(data))
        .catch(err => res.status(400).json({ message: err.message }))
}

const postBooksCategories = (req, res) => {
    const { bookId, categoryId } = req.body
    if (bookId && categoryId) {
        booksCategoriesControllers.createBooksCategories()
            .then(data => { res.status(200).json(data) })
            .catch(err => { res.status(400).json({ message: err.message }) })
    } else {
        res.status(400).json({
            message: 'All fields must be completed',
            fields: {
                bookId: 'string',
                categoryId: 'string',
            }
        })
    }
}

const deleteBooksCategories = (req, res) => {
    const { bookId, categoryId } = req.body
    booksCategoriesControllers.deleteBooksCategory(bookId, categoryId)
        .then(data => {
            if (data) {
                res.status(204).json()
            } else {
                res.status(400).json({ message: 'Invalid Ids' })
            }
        })
        .catch(err => res.status(400).json({ message: err.message }))
}

module.exports = {
    getAllBooksCategories,
    postBooksCategories,
    deleteBooksCategories
}