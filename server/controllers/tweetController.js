const Tweet = require('../models/tweetModel')

class TweetController {
  static findAll(req, res) {
    Tweet.find()
    .populate('userId')
    .then(Tweets => {
      res.status(200).json({
        message: 'list all Tweet',
        Tweets: Tweets
      })
    })
    .catch(err => {
      console.log(err)
      res.status(500).send(err)
    })
  }
  
  //middleware off
  static addNewTweet(req, res) {
   console.log('ini req boy', req.body.tweet.length)
    if (req.body.tweet.length > 140) {
      res.status(400).json({
        message: '140 karakter aja mas mba'
      })
      return
    }

    let getHastag = req.body.tweet.split(' ').filter(x => {
      return x[0] === '#'
    })

    let newTweet = new Tweet({
      tweet: req.body.tweet,
      hastag: getHastag,
      // author: req.decoded.id
    })
    newTweet.save()
    .then(userTweet => {
      res.status(200).json({
        message: 'add new tweet success',
        tweet: userTweet
      })
    })
    .catch(err => {
      console.log(err)
      res.status(500).send(err)
    })
  }

  static updateTweet(req, res) {
    Tweet.findOne
  }
}

module.exports = TweetController