const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Comment = new Schema({
  postId: { type: Number, required: true},
  id: { type: Number, required: true },
  name: { type: String, required: true }
  body: String
})

module.exports = mongoose.model('comment', Comment)