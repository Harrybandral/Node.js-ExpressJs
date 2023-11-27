const mongoose = require("mongoose");

const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  // username: {
  //   type: String,
  //   require: true,
  // },
  // Password: {
  //   type: String,
  //   require: true,
  // },
  // email: {
  //   type: String,
  //   require: true,
  // },
  // Phone: {
  //   type: String,
  //   require: true,
  // },
  // isAdmin: {
  //   type: Boolean,
  //   default: false,
  // },
  username: { type: String },
  password: { type: String },
  email: { type: String },
  phone: { type: String },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

// secure the password with the bcrypt
//use for middleware
userSchema.pre("save", async function (next) {
  // console.log("pre method", this);
  const user = this;

  if (!user.isModified("Password")) {
    next();
  }

  try {
    const saltRound = await bcrypt.genSalt(10);
    hash_password = await bcrypt.hash(user.password, saltRound);
    user.password = hash_password;
  } catch (error) {
    next(error);
  }
});

//define the model or the collection name
const User = new mongoose.model("User", userSchema);

module.exports = User;
