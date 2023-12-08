const Posts = require('../models/postModel')
// !IMPORTANT: When middleware is availabe
// TODO:
// Change how to use ._id when token is fine, from (req.body._id) to (req.user._id) instead
const postCtrl = {
  createPost: async (req, res) => {
    try {
      console.log(req)
      const { content, images, user } = req.body

      if (!content) {
        return res.status(400).json({ msg: 'Post no valido.' })
      }

      const newPost = new Posts({
        content,
        images,
        user: user._id
      })
      // await newPost.save()

      res.json({
        msg: 'Has creado un post!',
        newPost: {
          ...newPost._doc,
          user
        }
      })
    } catch (err) {
      return res.status(500).json({ msg: err.message })
    }
  }

}

module.exports = postCtrl
