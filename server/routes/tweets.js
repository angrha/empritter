const Tweet = require('../controllers/tweetController')
const router = require('express').Router()
const isLogin = require('../helper/authentication')
const isAdmin = require('../helper/authorization')

router.get('/', Tweet.findAll)


module.exports = router