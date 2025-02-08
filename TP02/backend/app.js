const express = require("express");
const app = express();

const path = require("path");
app.use(express.static(path.join(__dirname, "public")));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const expressLayouts = require("express-ejs-layouts");
app.use(expressLayouts);

app.set("layout", "layouts/layout");

app.use((req, res, next) => {
  const date = new Date().toDateString();
  console.log(`${date} une requête ${req.method} reçue !`);
  next();
});

app.get("/", (req, res) => {
  res.render("pages/home");
});

app.get("/about", (req, res) => {
  res.render("pages/about");
});

app.get("*", (req, res) => {
  //res.send("<h1>Nothing to see here.... NO it's finne finning it</h1>");
  res.redirect("/");
});

module.exports = app;
