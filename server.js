const express = require('express')
const db = require('./database/connect')
const app = express()

var bodyParser = require("body-parser");
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const userRouter= require('./router/userRouter')

app.use('/user', userRouter)

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(3000, () => console.log('http://127.0.0.1:3000'))