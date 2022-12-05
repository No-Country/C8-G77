const express = require('express')
const db = require('./utils/database')
const initModels = require('./models/initModels')
const { port } = require('./config')
const useRouter = require('./users/users.router')
const authRouter = require('./auth/auth.router')
const cartRouter = require('./cart/cart.router')
const categoriesRouter = require('./categories/categories.router')

const app = express()
app.use(express.json())

db.authenticate()
    .then(() => console.log('DB autentication successfully'))
    .catch((err) => console.log(err))

db.sync()
    .then(() => console.log('DB synced'))
    .catch((err) => console.log(err))

initModels()

app.get('/', (req, res) => {
    res.status(200).json({
        message: 'OK',
        users: `localhost:${port}/api/v1/users`
    })
})

app.use('/api/v1/users', useRouter)
app.use('/api/v1/auth', authRouter)
app.use('/api/v1/cart', cartRouter)
app.use('/api/v1/categories', categoriesRouter)

app.listen(port, () => console.log('Success 😺😺😺 ' + port)) 