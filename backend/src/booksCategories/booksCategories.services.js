const booksCategoriesControllers = require('./booksCategories.controllers')

const getBooksByCategory = (req, res)=>{
    const categoryId = req.params.id
    booksCategoriesControllers.getBooksByCategory(categoryId)
        .then(data => res.status(200).json(data))
        .catch(err => res.status(400).json({ message: err.message }))
}

module.exports = {
    getBooksByCategory
}