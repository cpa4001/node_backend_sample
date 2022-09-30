const Comment = require('../models/comment')

postComment = (req, res) => {
  const body = req.body

  /*unncecessary error handlers
  console.log(!body)

  if (!body) {
    return res.status(400).json({
      success: false,
      error: 'Comment body must not be empty',
    })
  }

  const comment = new Comment(body)

  if (!comment) {
    return res.status(400).json({ success: false, error: err })
  }
  */

  const comment = new Comment(body)

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