const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Comment = new Schema({
  postid: {type: String, required: true},
  id: String,
  name: String,
  body: String
})

module.exports = mongoose.model('comment', Comment)