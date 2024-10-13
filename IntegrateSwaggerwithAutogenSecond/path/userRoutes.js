const express = require("express");
const app = express();

app.get("/user", (req, res) => {
  res.send("This is user route");
});

app.get("/users", (req, res) => {
  res.send("This is second user route");
});

module.exports = app;
