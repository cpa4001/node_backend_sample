const express = require('express')
const GetBlogs = require('../controller/getBlogs')
const PostBlog = require('../controller/PostBlog')
const GetComment = require('../controller/getComment')
const PostComment = require('../controller/PostComment')

const router = express.Router()

router.get('/', (req, res) => {
    res.send("Root Page")
})

// Handles get requests to urls that are not defined
router.get("/:universalURL", (req, res) => {
    res.send("URL NOT FOUND");
});

router.get('/blog/:id', GetBlogs)
router.get('/blog/post/:id/comment', GetComment)

// Handles post requests to urls that are not defined
router.post("/:universalURL", (req, res) => {
    res.send("URL NOT FOUND");
});

router.post('/blog/post/', PostBlog)
router.post('/blog/post/:id/comment', PostComment)


module.exports = router