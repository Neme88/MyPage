const express = require("express");
const mongoose = require("mongoose");
const UserModel = require("./models/Users");
const BlogPost = require("./models/blogPostSchema");
const cors = require('cors');

const app = express();


// Middleware configuration
app.use(express.json());
app.use(cors())

// MongoDB Connection 
mongoose.connect( "mongodb+srv://ccnwaka1988:YN8Hg6PhDme4HQI6@mypagedb0.arn4ch4.mongodb.net/newmypagedb?retryWrites=true&w=majority");
 

// Import endpoints

 const signinRoute = require('./routes/signin');
 const registerRoute = require('./routes/register');
 const createPostRouter = require('./routes/createPost');
 const readPostsRouter = require('./routes/readPosts');
 const postByIdRoute = require('./routes/readPosts');
 const updatePostRouter = require('./routes/updatePost');
 const deletePostRouter = require('./routes/deletePost');
 
 
 // Use endpoints

app.use('/signin', signinRoute);
app.use('/register', registerRoute);
app.use('/createPost', createPostRouter);
app.use('/readPosts', readPostsRouter);
app.use('/readPosts', postByIdRoute);
app.use('/updatePost', updatePostRouter);
app.use('/deletePost', deletePostRouter);

app.listen(3002, () => {
  console.log("SERVER RUNS PERFECTLY!");
});
