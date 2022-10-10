const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Comment structure mimics comments from JSONPlaceholder API at
// https://jsonplaceholder.typicode.com/

const Comment = new Schema({
  postId: { type: Number, required: true},
  id: { type: Number, required: true },
  name: { type: String, required: true },
  body: { type: String, required: true }
})

module.exports = mongoose.model('comment', Comment)