// readPosts.js

const express = require('express');
const router = express.Router();
const BlogPost = require('../models/blogPostSchema');

router.get('/api/posts', async (req, res) => {
  try {
    const posts = await BlogPost.find();
    res.json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});
// postByIdRoute

// Route to fetch a single blog post by its ID
router.get('/api/posts/:postId', async (req, res) => {
  try {
    const postId = req.params.postId;
    const post = await BlogPost.findById(postId).populate('author', 'username email' );
    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }
    res.json(post);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
