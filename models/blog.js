const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Blog = new Schema({
  userId: { type: Number, required: true },
  id: { type: Number, required: true },
  title: { type: String, required: true },
  body: String
})

module.exports = mongoose.model('blog', Blog)