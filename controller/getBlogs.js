const Blog = require('../models/blog')

// Gets a blog with a given id
getBlogs = async (req, res) => {
  await Blog.find({id: req.params.id}, (err, blog) => {
    if (err) {
      return res.status(400).json({ 
        success: false, 
        error: err
      })
    }
    if (!blog.length) {
      return res.status(404).json({ 
        success: false, 
        data: "No blogs found with this id"
      })
    }
    return res.status(200).json({ success: true, data: blog})
  }).catch(err => console.log(err))
}

module.exports = getBlogs 