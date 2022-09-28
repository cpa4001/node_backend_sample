const Comment = require('../models/comment')

postComment = (req, res) => {
  const body = req.body

  // Ensure that postId is the same as route parameter

  if (!body) {
    return res.status(400).json({
      success: false,
      error: 'You must provide a body for the comment',
    })
  }

  const comment = new Comment(body)

  if (!comment) {
    return res.status(400).json({ success: false, error: err })
  }

  comment
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        data: body,
        message: 'Comment created!',
      })
    })
    .catch(err => {
      return res.status(400).json({
        error: err,
        message: 'Comment not created!',
      })
    })
}

module.exports = postComment 