const express = require('express')
const GetBlogs = require('../controller/getBlogs')
const PostBlog = require('../controller/PostBlog')
const GetComment = require('../controller/getComment')
const PostComment = require('../controller/PostComment')

const router = express.Router()

router.get('/', (req, res) => {
    res.send("Root Page")
})

router.get("/:universalURL", (req, res) => {
    res.send("404 URL NOT FOUND");
});

router.get('/blog/:id', GetBlogs)
router.get('/blog/post/:id/comment', GetComment)

router.post('/blog/post/', PostBlog)
router.post('/blog/post/:id/comment', PostComment)


module.exports = router