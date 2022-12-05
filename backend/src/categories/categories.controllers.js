const Categories = require('../models/categories.models')

const getAllCategories = async () => {
    const data = await Categories.findAll()
    return data
}

const getCategorieById = async (id) => {
    const data = await Categories.findOne({
        where: {
            id: id
        }
    })
    return data
}

const createCategory = async (data) => {
    const response = await Categories.create({
        name: data.name
    })
    return response
}

const updateCategory = async (id, data) => {
    const response = await Categories.update(data, {
        where: {
            id: id
        }
    })
    return response
}

const deleteCategory = async (id) => {
    const data = await Categories.destroy({
        where: {
            id: id
        }
    })
    return data
}

module.exports = {
    getAllCategories,
    getCategorieById,
    createCategory,
    updateCategory,
    deleteCategory
}