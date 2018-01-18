const Tweet = require('../controllers/tweetController')
const router = require('express').Router()
const isLogin = require('../helper/authentication')
const isAdmin = require('../helper/authorization')

router.get('/', Tweet.findAll)
router.post('/', isLogin, Tweet.addNewTweet)
router.delete('/:id', isLogin, Tweet.deleteTweet)

module.exports = router