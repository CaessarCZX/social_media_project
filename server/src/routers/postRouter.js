const router = require('express').Router()
const postCtrl = require('../controllers/postCtrl')
// const auth = require('../middlewares/auth')

router.route('/post')
  .post(postCtrl.createPost)

router.route('/posts')
  .post(postCtrl.getPosts)

router.route('/post/:id')
  .patch(postCtrl.updatePost)

module.exports = router
