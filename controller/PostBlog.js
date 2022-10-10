const Blog = require('../models/blog')

// Creates a blog with a given body
postBlog = (req, res) => {
  const body = req.body

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a blog"
    })
  }

  const blog = new Blog(body)
  
  blog.save().then(() => {
    return res.status(201).json({
      success: true,
      data: body,
      message: "Blog created."
    })
  }).catch(err => {
    return res.status(400).json({
      success: false,
      err,
      message: "Blog not created."
    })
  })
}

module.exports = postBlog 