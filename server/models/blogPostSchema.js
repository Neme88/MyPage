const mongoose = require('mongoose');

const blogPostSchema = new mongoose.Schema({
  title: String,
  content: String,
  author: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'users', // Reference to the User model
    required: true,
  }, 
  createdAt: { type: Date, default: Date.now } // Time when the post was created
}, { collection: 'BlogPosts' }); // Specify the collection name here

const BlogPost = mongoose.model('BlogPost', blogPostSchema);

module.exports = BlogPost;

