const Users = require('../models/userModel')
const jwt = require('jsonwebtoken')
// TODO: FIX JWT AUTHENTICATION TO PROTECT THE ROUTE

const auth = async (req, res, next) => {
  try {
    const token = req.header('Authorization')

    console.log('This is the token: ', token)
    if (!token) return res.status(500).json({ msg: 'No token, authorization denied' })

    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)

    console.log('The Owner has this id: ', decoded.id)
    if (!decoded) return res.status(500).json({ msg: 'Token verification failed, authorization denied' })

    // const user = await Users.findOne({ _id: decoded.id })
    const user = await Users.findById(decoded.id)
    console.log('The match user is: ', user)

    if (!user) return res.status(500).json({ msg: 'User not found, authorization denied' })

    req.user = user

    next()
  } catch (err) {
    console.error(err)
    return res.status(500).json({ msg: 'Server error' })
  }
}

module.exports = auth
