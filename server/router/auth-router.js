const express = require("express");
const router = express.Router();
const authcontrollers = require("../controllers/auth-controller");

// router.get("/", (req, res) => {
//   res.status(200).send("Welcome to  harry using router");
// });

router.route("/").get(authcontrollers.home);

// Now the registration part

router.route("/register").post(authcontrollers.register);

router.route("/login").post(authcontrollers.login);

// now exports

module.exports = router;
