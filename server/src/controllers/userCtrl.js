const Users = require('../models/userModel')

const userCtrl = {
  searchUsers: async (req, res) => {
    try {
      const users = await Users.find({ username: { $regex: req.query.username } }).limit(10)
        .select('firstname lastname username avatar')

      res.json({ users })
    } catch (err) {
      return res.status(500).json({ msg: err.message })
    }
  },
  getUser: async (req, res) => {
    try {
      const user = await Users.findOne({ _id: req.params.id })
        .select('-password')

      if (!user) return res.status(400).json({ msg: 'No user exists' })

      res.json({ user })
    } catch (err) {
      return res.status(500).json({ msg: err.message })
    }
  },
  updateUser: async (req, res) => {
    try {
      const {
        firstname,
        lastname,
        address,
        website,
        gender,
        phone,
        story
      } = req.body

      if (!firstname) return res.status(500).json({ msg: 'Tienes que ingresar al menos un nombre' })
      if (!lastname) return res.status(500).json({ msg: 'Tienes que ingresar al menos un apellido' })

      await Users.findOneAndUpdate({ _id: req.user_id }, {
        firstname,
        lastname,
        address,
        website,
        gender,
        phone,
        story
      })

      res.json({ msg: 'Datos actualizados con exito' })
    } catch (err) {
      return res.status(500).json({ msg: err.message })
    }
  }
}

module.exports = userCtrl
