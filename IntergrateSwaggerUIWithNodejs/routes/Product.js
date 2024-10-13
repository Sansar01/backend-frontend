const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("This is product route");
});

app.get("/product", (req, res) => {
  res.send("This is second product route");
});

module.exports = app;
