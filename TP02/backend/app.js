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

const routerAcceuil = require("./router/routerAcceuil");
app.use("/", routerAcceuil);

const routerAbout = require("./router/routerAbout");
app.use("/about", routerAbout);

// Ajoutez ceci à la fin de vos routes existantes
app.use((req, res, next) => {
  res.status(404).render("pages/404", { page: "404" });
});

module.exports = app;
