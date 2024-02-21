const express = require("express");
const app = express();
const mongoose = require("mongoose");
const registerRoute = require('./routes/register');
const signinRoute = require('./routes/signin');
const UserModel = require("./models/Users");
const cors = require('cors');
app.use(express.json());
app.use(cors())


mongoose.connect( "mongodb+srv://ccnwaka1988:YN8Hg6PhDme4HQI6@mypagedb0.arn4ch4.mongodb.net/newmypagedb?retryWrites=true&w=majority");

app.use('/signin',signinRoute);
app.use('/register', registerRoute);

app.listen(3002, () => {
  console.log("SERVER RUNS PERFECTLY!");
});
