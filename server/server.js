require('dotenv').config()
const express = require('express')
// const mongoose = require('mongoose')
const cors = require('cors')
// const bcrypt = require('bcrypt')
const cookieparser = require('cookie-parser')

const app = express()

app.use(express.json()) // for body parsing
app.use(cors())
app.use(cookieparser())

const port = process.env.PORT || 5000

app.get('/', (req, res) => {
  res.status(500).send('Hello world')
})

app.listen(port, () => {
  console.log(`App is runnig on ${port}`)
})
