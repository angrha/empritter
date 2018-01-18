const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tweetSchema = new Schema({
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  tweets: {
    type: String,
    require: true
  },
  hastag: Array
})

const Tweet = mongoose.model('Tweet', postSchema);

module.exports = Tweet