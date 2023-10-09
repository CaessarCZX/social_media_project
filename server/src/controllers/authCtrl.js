const Users = require('../models/userModel')
const bycript = require('bcrypt')
const jwt = require('jsonwebtoken')
const { authErrors } = require('../utils/errors')

const authCtrl = {
  register: async (req, res) => {
    try {
      const { fullname, username, email, password, gender } = req.body

      const newUserName = username.toLowerCase().replace(/ /g, '')

      const wasUsernameCreated = await Users.findOne({ username: newUserName })
      if (wasUsernameCreated) return res.status(400).json({ msg: authErrors.existingUsername })

      const wasEmailCreated = await Users.findOne({ email })
      if (wasEmailCreated) return res.status(400).json({ msg: authErrors.existingEmail })

      if (password.length < 8) return res.status(400).json({ msg: authErrors.passwordNotEnough })

      const passwordHash = await bycript.hash(password, 13)

      const newUser = new Users({
        fullname,
        username: newUserName,
        email,
        password: passwordHash,
        gender
      })

      const accessToken = createAccessToken({ id: newUser._id })
      const refreshToken = createRefreshToken({ id: newUser._id })

      // For saving new user on MongoDb Collection
      await newUser.save()

      // Send a new Cookie to client
      res.cookie('refreshtoken', refreshToken, {
        httpOnly: true,
        path: '/api/refresh_token',
        maxAge: 24 * 30 * 60 * 60 * 1000 // 30 days
      })

      // Send JSON response ro client
      res.json({
        msg: 'registered success',
        accessToken,
        user: {
          ...newUser._doc,
          password: ''
        }
      })
    } catch (e) {
      res.status(500).json({ msg: e.message })
    }
  },
  login: async (req, res) => {
    try {
      const { email, password } = req.body

      console.log(req.body)
      // User request, whit related documents { friends:[], following:[] } with Password rejected.
      const currentUser = await Users.findOne({ email })
        .populate('friends following', '-password') // <= Load related documents with .populate by mongoose
      console.log(currentUser)
      if (!currentUser) return res.status(400).json({ msg: authErrors.userNotFound })

      const userPassword = currentUser.password
      const isMatch = await bycript.compare(password, userPassword)
      if (!isMatch) return res.status(400).json({ msg: authErrors.passwordDoesNotMatch })

      const accessToken = createAccessToken({ id: currentUser._id })
      const refreshToken = createRefreshToken({ id: currentUser._id })

      // Send a new Cookie to client
      res.cookie('refreshtoken', refreshToken, {
        httpOnly: true,
        path: '/api/refresh_token',
        maxAge: 24 * 30 * 60 * 60 * 1000 // 30 days
      })

      // Send JSON response ro client
      res.json({
        msg: 'login success',
        accessToken,
        user: {
          ...currentUser._doc,
          password: ''
        }
      })
    } catch (e) {
      res.status(500).json({ msg: e.message })
    }
  },
  logout: async (req, res) => {
    try {

    } catch (e) {
      res.status(500).json({ msg: e.message })
    }
  },
  generateAccessToken: async (req, res) => {
    try {

    } catch (e) {
      res.status(500).json({ msg: e.message })
    }
  }
}

const createAccessToken = (payload) => {
  return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1d' })
}

const createRefreshToken = (payload) => {
  return jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '30d' })
}

module.exports = authCtrl
