const express = require("express");
const app = express();
const mongoose = require("mongoose");
const UserModel = require("./models/Users");
const cors = require('cors');
app.use(express.json());


mongoose.connect( "mongodb+srv://ccnwaka1988:YN8Hg6PhDme4HQI6@mypagedb0.arn4ch4.mongodb.net/newmypagedb?retryWrites=true&w=majority");

app.get("/getUsers", async (req, res) => {
  try {
    const result = await UserModel.find({});
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post("/createUser", async (req, res) => {
  const user = req.body;
  const newUser = new UserModel(user);
  await newUser.save();

  res.json(user);
});

app.listen(3000, () => {
  console.log("SERVER RUNS PERFECTLY!");
});
