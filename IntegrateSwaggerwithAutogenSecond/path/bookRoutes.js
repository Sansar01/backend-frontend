const express = require("express");
const app = express();

app.get("/book", (req, res) => {
  res.send("This is book route");
});

app.get("/books", (req, res) => {
  res.send("This is second book route");
});

module.exports = app;
