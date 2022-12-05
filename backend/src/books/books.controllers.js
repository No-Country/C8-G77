const uuid = require('uuid')
const Books = require('../models/books.models')

const getAllBooks = async () => {
    const data = await Books.findAll()
    return data
}

const getBooksById = async (id) => {
    const data = await Books.findOne({
        where: {
            id: id
        }
    })
    return data
}

const createBook = async (data) => {
    const response = await Books.create({
        id: uuid.v4(),
        title: data.title,
        author: data.author,
        content: data.content,
        publisherDate: data.publisherDate,
        qualification: data.qualification,
        pages: data.pages,
        lenguage: data.lenguage,
        cover: data.cover,
        thumbnail: data.thumbnail,
    })
    return response
}

const updateBook = async (id, data) => {
    const response = await Books.update(data, {
        where: {
            id: id
        }
    })
    return response
}

const deleteBook = async (id) => {
    const data = await Books.destroy({
        where: {
            id: id
        }
    })
    return data
}

module.exports = {
    getAllBooks,
    getBooksById,
    createBook,
    updateBook,
    deleteBook
}