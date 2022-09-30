const Comment = require('../models/comment')

getComment = async (req, res) => {
  await Comment.find({postId: req.params.id}, (err, comment) => {
    if (err) {
      return res.status(400).json({ 
        success: false, 
        error: err 
      })
    }
    if (!comment.length) {
      return res
        .status(404).json({ 
          success: false, 
          error: "No comments found with this post id" 
        })
    }
    return res.status(200).json({ success: true, data: comment })
  }).catch(err => console.log(err))
}


module.exports = getComment 