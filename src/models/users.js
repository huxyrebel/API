const mongoose = require("mongoose");

const jwt = require("jsonwebtoken");
const Quotes = require("./quotes");

//model for the user
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    unique: true,
    minlength: 7,
  },
  role: [
    {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
  ],
  tokens: [
    {
      type: String,
      required: true,
    },
  ],
});

//this is for the authentication and assigning roles for the user
userSchema.methods.generateAuthToken = async function () {
  const user = this;
  const token = jwt.sign({ _id: user._id.toString(), role: user.role }, "task");
  user.tokens = user.tokens.concat({ token });
  await user.save();

  return token;
};

const User = new mongoose.Model("User", userSchema);

module.exports = User;
