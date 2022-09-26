const mongoose = require('mongoose')

mongoose
  .connect('mongodb://127.0.0.1:27017/blog', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(client => {
    console.log("Connected to Database")
  })
  .catch(e => {
    console.error('Connection error', e.message)
  })



const db = mongoose.connection

module.exports = db