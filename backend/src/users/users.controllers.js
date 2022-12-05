const uuid = require('uuid')
const Users = require('../models/users.models')
const { hashPassword } = require('../utils/crypto')

const getAllUsers = async () => {
    const data = await Users.findAll({
        where: {
            status: 'active'
        }
    })
    return data
}

const getUsersById = async (id) => {
    const data = await Users.findOne({
        where: {
            id: id,
            status: 'active'
        }
    })
    return data
}

const createUser = async (data) => {
    const newUser = await Users.create({
        id: uuid.v4(),
        firstName: data.firstName,
        lastName: data.lastName,
        age: data.age,
        email: data.email,
        birthday: data.birthday,
        phone: data.phone,
        genre: data.genre,
        bookPreference: data.bookPreference,
        password: hashPassword(data.password),
        country: data.country
    })
    return newUser
}

const updateUser = async (id, data) => {
    const result = await Users.update(data, {
        where: {
            id: id
        }
    })
    return result
}

const deleteUser = async (id) => {
    const data = await Users.destroy({
        where: {
            id: id
        }
    })
    return data
}

const getUserByEmail = async (email) => {
    const data = await Users.findOne({
        where: {
            email: email,
            status: 'active'
        }
    })
    return data
}

module.exports = {
    getAllUsers,
    getUsersById,
    createUser,
    updateUser,
    deleteUser,
    getUserByEmail
}