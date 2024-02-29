
const express = require('express');
const mongoose = require('mongoose');
const BlogPost = require('../models/blogPostSchema');
const UserModel = require('../models/Users');

const router = express.Router();
// Route to fetch all blog post.
router.get("/", async (req, res) => {
  try {
    const response = await BlogPost.find({});
    res.json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Create post route
router.post("/", async (req, res) => {
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

// save a post
router.put("/", async (req, res) => {
    const post = await UserModel.findById(req.body.postId);
    const user = await UserModel.findById(req.body.userID);
    try {
      user.savedPosts.push(post);
      await user.save();
      res.status(201).json({ savedPosts: user.savedPosts });
    } catch (err) {
      res.status(500).json(err);
    }
  });

// Route to fetch a single blog post by its ID
router.get('/posts/singlePost:postId', async (req, res) => {
    try {
      const postId = req.params.postId;
      const post = await BlogPost.findById(postId).populate('author', 'username', 'email' );
      if (!post) {
        return res.status(404).json({ error: 'Post not found' });

    }
      res.json(post);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  });
  

// Get saved recipes
router.get("/posts/savedPosts:userId", async (req, res) => {
    try {
      const user = await UserModel.findById(req.params.userId);
      const savedPost = await UserModel.find({
        _id: { $in: user.savedRecipes },
      });
  
      console.log(savedPosts);
      res.status(201).json({ savedPosts: savedPosts});
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }

});

// deletePost.

router.delete('/posts/:id', async (req, res) => {
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