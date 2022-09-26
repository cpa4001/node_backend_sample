const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Comment = new Schema({
  postid: { type: String, required: true },
  id: {type: String, required: true},
  name: {type: String, required: true},
  body: {type: String, required: true}
})

module.exports = mongoose.model('comment', Comment)