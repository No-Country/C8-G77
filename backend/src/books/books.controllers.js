const uuid = require('uuid')
const Books = require('../models/books.models')
const Categories = require('../models/categories.models')
const Tags = require('../models/tags.models')
const BookTags = require('../models/bookTags.model')

const getAllBooks = async () => {
    const data = await Books.findAll({
        include: [
            {
                model: Categories,
                attributes: {
                    exclude: ['createdAt', 'updatedAt']
                }
            }
        ],
        attributes: {
            exclude: ['createdAt', 'updatedAt']
        }
    })
    return data
}

const getBooksById = async (id) => {
    const data = await Books.findOne({
        where: {
            id: id
        },
        include: [
            {
                model: Categories,
                attributes: {
                    exclude: ['createdAt', 'updatedAt']
                }
            }
        ]
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
        tags: data.tags
    })
    const tagsId = response.tags.map(tag => {
        return {
            bookId: response.id,
            tagId: tag.id
        }
    })
    await BookTags.bulkCreate(tagsId)

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

const getBooksByCategory = async (categoryId) => {
    const data = await Books.findAll({
        where: {
            category: [
                {
                    id: categoryId
                }
            ]
            
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
    getBooksByCategory
}