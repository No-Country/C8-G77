const express = require('express')

const db = require('./utils/database')
const initModels = require('./models/initModels')

const app = express()

db.authenticate()
    .then(() => console.log('DB autentication successfully'))
    .catch((err) => console.log(err))

db.sync()
    .then(() => console.log('DB synced'))
    .catch((err) => console.log(err))

initModels()

app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json({ message: 'start server' })
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log('Success 😺😺😺 ' + PORT)) 