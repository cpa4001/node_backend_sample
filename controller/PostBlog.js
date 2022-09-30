const Blog = require('../models/blog')


postBlog = (req, res) => {
  const body = req.body

  /* unnecessary error handling since empty body does not 
  make !body true
  console.log(!body)

  if(!body) {
    return res.status(400).json({
      status: false,
      error: "Blog body must not be empty"
    })
  } 

  if (!blog) {
    return res.status(400).json({ success: false, error: err })
  }
 */

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
      error: err,
      message: "Blog not created."
    })
  })
}

module.exports = postBlog 