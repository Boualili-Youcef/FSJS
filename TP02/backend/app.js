const express = require("express");
const app = express();

app.use((req, res, next) => {
  const date = new Date().toDateString();
  console.log(`${date} une requête ${req.method} reçue !`);
  next();
});

app.get("/", (req, res) => {
  res.send("<h1>Bienvenue sue la HOME PAGE</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>I'm jacking it</h1>");
});

app.get("*", (req, res) => {
  //res.send("<h1>Nothing to see here.... NO it's finne finning it</h1>");
  res.redirect("/");
});

module.exports = app;
