const cartControllers = require('./cart.controller')

const getCart = (req, res) => {
    const id = req.user.id
    cartControllers.getAllProducts(id)
        .then(data => res.status(200).json(data))
        .catch(err => res.status(400).json({ message: err.message }))
}

const postCart = (req, res) => {
    const userId = req.user.id
    const { amount } = req.body
    const total = value * amount

    if (bookName && value && amount) {
        cartControllers.createProduct({ userId, bookName, value, amount, total })
            .then(data => { res.status(200).json(data) })
            .catch(err => { res.status(400).json({ message: err.message }) })
    } else {
        res.status(400).json({
            message: 'All fields must be completed',
            fields: {
                bookName: 'string',
                value: 'decimal',
                amount: 'integer',
            }
        })
    }
}

const deleteProduct = (req, res) => {
    const userId = req.user.id
    const id = req.params.id
    cartControllers.deleteProduct(id, userId)
        .then(data => {
            if (data) {
                res.status(204).json()
            } else {
                res.status(400).json({ message: 'Invalid ID' })
            }
        })
        .catch(err => res.status(400).json({ message: err.message }))
}

const deleteAllProducts = (req, res) => {
    const userId = req.user.id
    cartControllers.deleteAllProducts(userId)

        .then(data => {
            if (data) {
                res.status(204).json()
            } else {
                res.status(400).json({ message: 'Invalid User' })
            }
        })
        .catch(err => res.status(400).json({ message: err.message }))
}

module.exports = {
    getCart,
    postCart,
    deleteProduct,
    deleteAllProducts
}