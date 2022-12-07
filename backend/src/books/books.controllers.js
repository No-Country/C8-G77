const uuid = require('uuid')
const Books = require('../models/books.models')
const BooksCategories = require('../models/categories.models')
const Tags = require('../models/tags.models')
const BookTags = require('../models/bookTags.model')

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
        price: data.price,
        tags: data/* data.tags.map(tag=>{
            return( {
                name: tag.name,
                BookTags: {
                    selfGranted: false
                }
            })
        }) */
        /* addTag(data.tags.map(tag =>{
            return{
                bookId: data.id,
                categoryId: 
            }
        })) */
    }, {
        include: Tags
    })

    return { response }
}

const updateBook = async (id, data) => {
    const response = await Books.update(data, {
        where: {
            id: id
        }
    })

    return { response }
}

const deleteBook = async (id) => {
    const data = await Books.destroy({
        where: {
            id: id
        }
    })
    return data
}

const addTag = async (data) => {
    await BookTags.bulkCreate(data)
}

module.exports = {
    getAllBooks,
    getBooksById,
    createBook,
    updateBook,
    deleteBook,
}