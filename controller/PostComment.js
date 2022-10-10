const Comment = require('../models/comment')

// Creates a comment for a blog of a given id, with a given body
postComment = (req, res) => {
  const body = req.body

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a comment"
    })
  }
 
  const comment = new Comment(body)

  comment.save().then(() => {
      return res.status(201).json({
        success: true,
        data: body,
        message: 'Comment created!',
      })
    })
    .catch(err => {
      return res.status(400).json({
        err,
        message: 'Comment not created!',
      })
    })
}

module.exports = postComment 