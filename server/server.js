const express = require("express");
const app = express();
const router = require("./router/auth-router");

// This is an REST api

app.use("/api/auth", router);

// Creating a route (think like a server)

// app.get("/", (req, res) => {
//   res.status(200).send("Welcome to  harry");
// });

// app.get("/register", (req, res) => {
//   res.status(200).send("Welcome to registration page");
// });

// to start a server

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running at port:${PORT}`);
});
