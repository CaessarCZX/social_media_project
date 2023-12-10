const Posts = require('../models/postModel')
// !IMPORTANT: When middleware is availabe
// TODO:
// Change how to use ._id when token is fine, from (req.body._id) to (req.user._id) instead
const postCtrl = {
  createPost: async (req, res) => {
    try {
      const { content, images, user } = req.body

      if (!content) {
        return res.status(400).json({ msg: 'Post no valido.' })
      }

      const newPost = new Posts({
        content,
        images,
        user: user._id
      })

      await newPost.save()

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
  },
  getPosts: async (req, res) => {
    try {
      const { user } = req.body

      const posts = await Posts.find({ user: [...user.following, user._id] }).sort('-createdAt')
        .populate('user likes', 'avatar username firstname lastname friends')
      if (!posts) return res.status(500).json({ msg: 'No se encontraron posts' })

      res.json({
        msg: 'Post encontrados',
        result: posts.length,
        posts
      })
    } catch (err) {
      return res.status(500).json({ msg: err.message })
    }
  },
  updatePost: async (req, res) => {
    try {
      const { content, images } = req.body
      console.log({ content, images })

      const post = await Posts.findOneAndUpdate({ _id: req.params.id }, {
        content,
        images
      }).populate('user likes', 'avatar username firstname lastname friends')
      // .populate({
      //   path: 'comments',
      //   populate: {
      //     path: 'user likes',
      //     select: '-password'
      //   }
      // })

      res.json({
        msg: 'Actualizaste el post!',
        newPost: {
          ...post._doc,
          content,
          images
        }
      })
    } catch (err) {
      return res.status(500).json({ msg: err.message })
    }
  }

}

module.exports = postCtrl
