// updatePost.js

const express = require('express');
const router = express.Router();
const BlogPost = require('../models/blogPostSchema');

router.put('/api/posts/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;
    const updatedPost = await BlogPost.findByIdAndUpdate(id, { title, content }, { new: true });
    res.json(updatedPost);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
