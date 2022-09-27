const Blog = require('../models/blog')

postBlog = (req, res) => {
  const body = req.body

  if(!body) {
    return res.status(400).json({
      status: false,
      error: "Blog object must not be empty"
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
      error: err
    })
  })
}

module.exports = postBlog 