// register.js

const router = require('express').Router();
const bcrypt = require('bcrypt');
const UserModel = require('../models/Users');

router.post('/', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Check if user already exists
    const existingUser = await UserModel.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ error: 'Username already exists. Please choose a different username.' });
    }

    // Create new user
    const newUser = new UserModel({ username, email, password });
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully. Please sign in.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
