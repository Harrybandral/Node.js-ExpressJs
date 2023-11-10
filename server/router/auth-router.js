const express = require("express");
const router = express.Router();
const authcontrollers = require("../controllers/auth-controller");

// router.get("/", (req, res) => {
//   res.status(200).send("Welcome to  harry using router");
// });

router.route("/").get(authcontrollers.home);

// Now the registration part

router.route("/register").get(authcontrollers.register);

// now exports

module.exports = router;
