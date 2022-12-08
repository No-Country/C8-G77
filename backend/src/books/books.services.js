const booksControllers = require('./books.controllers')

const getAllBooks = (req, res) => {
    booksControllers.getAllBooks()
        .then(data => res.status(200).json(data))
        .catch(err => res.status(400).json({ message: err.message }))
}

const getBookById = (req, res) => {
    const id = req.params.id
    booksControllers.getBooksById(id)
        .then(data => res.status(200).json(data))
        .catch(err => res.status(404).json({ message: err.message }))
}

const postBook = (req, res) => {
    const { title, author, content, publisherDate, qualification, pages, lenguage, cover, thumbnail, price, tags } = req.body
    if (title && author && content && publisherDate && qualification && pages && lenguage && cover && thumbnail && price) {
        booksControllers.createBook({ title, author, content, publisherDate, qualification, pages, lenguage, cover, thumbnail, price, tags })
            .then(data => { res.status(200).json(data) })
            .catch(err => { res.status(400).json({ message: err.message }) })
    } else {
        res.status(400).json({
            message: 'All fields must be completed',
            fields: {
                title: 'string',
                author: 'string',
                content: 'text',
                publisherDate: 'string',
                qualification: 'decimal',
                pages: 'integer',
                lenguage: 'string',
                cover: 'string',
                thumbnail: 'string',
                price: 'decimal'
            }
        })
    }
}

const patchBook = (req, res) => {
    const id = req.params.id
    const { title, author, content, publisherDate, qualification, pages, lenguage, cover, thumbnail, price } = req.body
    booksControllers.updateBook(id, { title, author, content, publisherDate, qualification, pages, lenguage, cover, thumbnail, price })
        .then(data => {
            if (data[0]) {
                res.status(200).json({ message: `Book with id: ${id}, edited successfully` })
            } else {
                res.status(400).json({ message: 'Invalid ID' })
            }
        })
        .catch(err => res.status(404).json({ message: err.message }))
}

const deleteBook = (req, res) => {
    const id = req.params.id
    booksControllers.deleteBook(id)
        .then(data => {
            if (data) {
                res.status(204).json()
            } else {
                res.status(400).json({ message: 'Invalid ID' })
            }
        })
        .catch(err => res.status(400).json({ message: err.message }))
}

const getBooksByCategory = (req, res) => {
    const categoryId = req.params.id
    booksControllers.getBooksByCategory(categoryId)
        .then(data => res.status(200).json(data))
        .catch(err => res.status(400).json({ message: err.message }))
}


module.exports = {
    getAllBooks,
    getBookById,
    postBook,
    patchBook,
    deleteBook,
    getBooksByCategory
}