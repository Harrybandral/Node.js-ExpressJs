const User = require("../models/user-model");

const home = async (req, res) => {
  try {
    res.status(200).send("Welcome to  harry using Controller");
  } catch (error) {
    console.log(error);
  }
};

const register = async (req, res) => {
  try {
    console.log(req.body);
    const { username, email, phone, password } = req.body;

    const userExist = await User.findOne({ email });

    if (userExist) {
      return res.status(400).json({ msg: "Already exist" });
    }

    const userCreated = await User.create({ username, email, phone, password });

    res.status(200).send({ msg: userCreated });
  } catch (error) {
    res.send(400).send({ msg: "page not found" });
  }
};

module.exports = { home, register };
