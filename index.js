const express = require('express')
const app = express()

require('dotenv').config()

app.get('/', (req, res) => {
    res.send('Hello Kao Dien')
})

app.get('/login', (req, res) => {
    res.send("login page")
})

app.listen(process.env.port, () => {
    console.log(`Example app listening on port ${port}`)
})