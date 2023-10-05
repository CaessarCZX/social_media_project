require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
// const bcrypt = require('bcrypt')
const cookieparser = require('cookie-parser')

// Initialize app
const app = express()

app.use(express.json()) // for body parsing
app.use(cors())
app.use(cookieparser())

const port = process.env.PORT || 5000
const URL = process.env.MONGO_URI

// Connect with MongoDB through Mongoose
mongoose.connect(
  URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
)

// Manage mistakes or network issues
const db = mongoose.connection

db.on('error', (err) => {
  console.error('Wrong conection', err)
})

db.once('open', () => {
  console.log('Conection Success')
})

// Manage request and responses from App
app.get('/', (req, res) => {
  res.status(500).send('Hello world')
})

app.listen(port, () => {
  console.log(`App is runnig on ${port}`)
})
