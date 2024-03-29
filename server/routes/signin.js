// signin.js

const router = require('express').Router();
const bcrypt = require('bcrypt');
const BlogPost = require('../models/blogPostSchema');
const UserModel = require('../models/Users');

router.post('/', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Check if user exists
    const user = await UserModel.findOne({ username });
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials. Please try again.' });
    }

    // Compare passwords
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid credentials. Please try again.' });
    }

    // Password is correct, generate JWT token
    const token = user.generateAuthToken({id: user.id}, "secret" );
    res.json({ token, userID: user._id, message: 'Login successful.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});


module.exports = router;
