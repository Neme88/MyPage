// createPost.js

const express = require('express');
const router = express.Router();
const BlogPost = require('../models/blogPostSchema');

router.post('/api/posts', async (req, res) => {
  try {
    const { title, content, authorId } = req.body;
    const newPost = new BlogPost({ title, content, author: authorId });
    await newPost.save();
    res.status(201).json({ message: 'Post created successfully', post: newPost });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
