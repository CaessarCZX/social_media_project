require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const cookieparser = require('cookie-parser')
const authRouter = require('./src/routers/authRouter')

// Initialize app
const app = express()

/*
  Just for develop
  Configuration credentials XMLHttp request by GeekNetwork in development
  !IMPORTAN: Don't forget set the configuration for origin request.
*/
const corsOptions = {
  origin: 'http://localhost:5173',
  credentials: true
}

app.use(express.json()) // for body parsing
app.use(cors(corsOptions)) // for cors config
app.use(cookieparser())

// Routes
app.use('/api', authRouter)

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
app.listen(port, () => {
  console.log(`App is runnig on ${port}`)
})
