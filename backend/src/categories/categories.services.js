const categoriesControllers = require('./categories.controllers')

const getAllCategories = (req, res) => {
    categoriesControllers.getAllCategories()
        .then(data => res.status(200).json(data))
        .catch(err => res.status(400).json({ message: err.message }))
}

const getCategorieById = (req, res) => {
    const id = req.params.id
    categoriesControllers.getCategorieById(id)
        .then(data => res.status(200).json(data))
        .catch(err => res.status(404).json({ message: err.message }))
}

const postCategory = (req, res) => {
    const { name } = req.body
    if (name) {
        categoriesControllers.createCategory({ name })
            .then(data => { res.status(200).json(data) })
            .catch(err => { res.status(400).json({ message: err.message }) })
    } else {
        res.status(400).json({
            message: 'All fields must be completed',
            fields: {
                name: 'string',
            }
        })
    }
}

const patchCategory = (req, res) => {
    const id = req.params.id
    const { name } = req.body
    categoriesControllers.updateCategory(id, { name })
        .then(data => {
            if (data[0]) {
                res.status(200).json({ message: `Category with id: ${id}, edited successfully` })
            } else {
                res.status(400).json({ message: 'Invalid ID' })
            }
        })
        .catch(err => res.status(404).json({ message: err.message }))
}

const deleteCategory = (req, res) => {
    const id = req.params.id
    categoriesControllers.deleteCategory(id)
        .then(data => {
            if (data) {
                res.status(204).json()
            } else {
                res.status(400).json({ message: 'Invalid ID' })
            }
        })
        .catch(err => res.status(400).json({ message: err.message }))
}

module.exports = {
    getAllCategories,
    getCategorieById,
    postCategory,
    patchCategory,
    deleteCategory
}