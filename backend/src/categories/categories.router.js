const router = require('express').Router()
const categoriesServices = require('./categories.services')

router.route('/')
    .get(categoriesServices.getAllCategories)
    .post(categoriesServices.postCategory)

router.route('/:id')
    .get(categoriesServices.getCategorieById)
    .patch(categoriesServices.patchCategory)
    .delete(categoriesServices.deleteCategory)

module.exports = router