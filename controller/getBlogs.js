const Blog = require('../models/blog')

// Gets a blog with a given id
getBlogs = async (req, res) => {
  const  id_ = req.params.id

  if (!Number(id_)) {
    return res.status(500).json({
      success: false,
      error: "Invalid ID" 
    })
  }
  
  await Blog.find({ id: id_ } , (err, blog) => {
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