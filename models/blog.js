const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Blog structure mimics blogs from JSONPlaceholder API at
// https://jsonplaceholder.typicode.com/


const Blog = new Schema({
  userId: { type: Number, required: true },
  id: { type: Number, required: true },
  title: { type: String, required: true },
  body: { type: String, required: true }
})

module.exports = mongoose.model('blog', Blog)