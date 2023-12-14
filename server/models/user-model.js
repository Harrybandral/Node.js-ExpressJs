const mongoose = require("mongoose");

const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
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
  console.log("pre method", this);

  const user = this;

  if (!user.isModified("Password")) {
    next();
  }

  // try {
  //   const saltRound = await bcrypt.genSalt(10);
  //   hash_password = await bcrypt.hash(user.password, saltRound);
  // } catch (error) {
  //   next(error);
  // }
});

// Compare the password
userSchema.methods.comparePassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

//json web token

userSchema.methods.generateToken = async function () {
  try {
    return jwt.sign(
      {
        userId: this._id.toString(),
        email: this.email,
        isAdmin: this.isAdmin,
      },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "30d",
      }
    );
  } catch (error) {
    console.error(error);
  }
};

//define the model or the collection name
const User = new mongoose.model("User", userSchema);

module.exports = User;
