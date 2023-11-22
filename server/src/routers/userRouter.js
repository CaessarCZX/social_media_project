const router = require('express').Router()
// const auth = require('../middlewares/auth')
const userCtrl = require('../controllers/userCtrl')

// router.get('/search', auth, userCtrl.searchUsers) //With middleware active
// router.get('/user/:id', auth, userCtrl.getUser) //With middleware active

router.get('/search', userCtrl.searchUsers)
router.get('/user/:id', userCtrl.getUser)

module.exports = router
