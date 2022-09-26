const express = require('express')
const GetBlogs = require('../controller/getBlogs')
const PostBlog = require('../controller/PostBlog')

const router = express.Router()

router.get('/', (req, res) => {
    res.send("Hello World")
})

router.get("/:universalURL", (req, res) => {
    res.send("404 URL NOT FOUND");
});

router.get('/blog/:id', GetBlogs)
router.post('/blog/post', PostBlog)


module.exports = router