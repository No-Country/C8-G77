const express = require('express')

const app = express()

app.use(express.json())

app.get('/', (req, res)=>{
    res.status(200).json({message: 'start server'})
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log('Success 😺😺😺 ' + PORT)) 