const Cart = require('../models/cart.models')

const getAllProducts = async (id) => {
    const data = await Cart.findAll({
        where: {
            userId: id
        }
    })
    return data
}

const createProduct = async (data) => {
    const response = await Cart.create({
        userId: data.userId,
        bookName: data.bookName,
        value: data.value,
        amount: data.amount,
        total: data.total
    })
    return response
}

const deleteProduct = async (id, userId) => {
    const data = await Cart.destroy({
        where: {
            id: id,
            userId: userId
        }
    })
    return data
}

const deleteAllProducts = async(userId)=>{
    const data = await Cart.destroy({
        where:{
            userId: userId,
        }
    })
    return data
}

module.exports = {
    getAllProducts,
    createProduct,
    deleteProduct,
    deleteAllProducts
}