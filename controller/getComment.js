const Comment = require('../models/comment')

// Gets comment(s) for a blog given a postId
getComment = async (req, res) => {
  const  post_Id = req.params.id

  if (!Number(post_Id)) {
    return res.status(500).json({
      success: false,
      error: "Invalid ID" 
    })
  }

  await Comment.find({ postId: post_Id }, (err, comment) => {
    if (err) {
      return res.status(400).json({ 
        success: false, 
        error: err 
      })
    }
    if (!comment.length) {
      return res.status(404).json({ 
          success: false, 
          error: "No comments found with this post id" 
        })
    }
    return res.status(200).json({ success: true, data: comment })
  }).catch(err => console.log(err))
}

module.exports = getComment 