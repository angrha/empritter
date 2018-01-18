const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tweetSchema = new Schema({
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  tweet: {
    type: String,
    require: true
  },
  hastag: Array
})

const Tweet = mongoose.model('Tweet', tweetSchema);

module.exports = Tweet