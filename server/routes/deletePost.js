// deletePost.js

const express = require('express');
const router = express.Router();
const BlogPost = require('../models/blogPostSchema');

router.delete('/api/posts/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await BlogPost.findByIdAndDelete(id);
    res.json({ message: 'Post deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
