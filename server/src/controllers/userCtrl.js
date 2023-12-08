const Users = require('../models/userModel')

const userCtrl = {
  searchUsers: async (req, res) => {
    try {
      const regex = new RegExp(req.query.username, 'i')

      const users = await Users.find({
        $or: [
          { username: regex },
          { firstname: regex },
          { lastname: regex }
        ]
      }).limit(10).select('firstname lastname username avatar')

      res.json({ users })
    } catch (err) {
      return res.status(500).json({ msg: err.message })
    }
  },
  getUser: async (req, res) => {
    try {
      const user = await Users.findOne({ _id: req.params.id }).select('-password')
        .populate('friends following', '-password')

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
        avatar,
        phone,
        story
      } = req.body

      if (!firstname) return res.status(500).json({ msg: 'Tienes que ingresar al menos un nombre' })
      if (!lastname) return res.status(500).json({ msg: 'Tienes que ingresar al menos un apellido' })

      const existingUser = await Users.findById(req.body._id)
      if (!existingUser) {
        return res.status(500).json({ msg: 'Usuario no encontrado' })
      }

      // !IMPORTANT: When middleware is availabe
      // TODO:
      // Change how to use ._id when token is fine, from (req.body._id) to (req.user._id) instead
      await Users.findOneAndUpdate({ _id: req.body._id }, {
        firstname,
        lastname,
        address,
        website,
        gender,
        avatar,
        phone,
        story
      })

      res.json({ msg: 'Datos actualizados con exito' })
    } catch (err) {
      console.error(err)
      return res.status(500).json({ msg: err.message })
    }
  },
  follow: async (req, res) => {
    try {
      // Chech if already followed this user
      const user = await Users.find({ _id: req.params.id, friends: req.body._id })
      if (user.length > 0) return res.status(400).json({ msg: 'Ya estas siguiendo a este usuario' })

      const followedUser = req.body.followedUser

      // Update data of the current user
      await Users.findOneAndUpdate({ _id: req.params.id }, {
        $push: { friends: req.body._id }
      }, { new: true })

      // // Update data of the followed user
      await Users.findOneAndUpdate({ _id: req.body._id }, {
        $push: { following: req.params.id }
      }, { new: true })

      res.json({ msg: `Has seguido a ${followedUser.username}` })
    } catch (err) {
      console.error(err)
      return res.status(500).json({ msg: err.message })
    }
  },
  unfollow: async (req, res) => {
    try {
      const unfollowUser = req.body.followedUser

      // Update data of the current user
      await Users.findOneAndUpdate({ _id: req.params.id }, {
        $pull: { friends: req.body._id }
      }, { new: true })

      // Update data of the followed user
      await Users.findOneAndUpdate({ _id: req.body._id }, {
        $pull: { following: req.params.id }
      }, { new: true })

      res.json({ msg: `Has dejado de seguir a ${unfollowUser.username}` })
    } catch (err) {
      console.error(err)
      return res.status(500).json({ msg: err.message })
    }
  }
}

module.exports = userCtrl
