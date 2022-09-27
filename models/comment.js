const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Comment = new Schema({
  postid: {type: Number, required: true},
  id: Number,
  name: String,
  body: String
})

module.exports = mongoose.model('comment', Comment)