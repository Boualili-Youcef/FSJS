const express = require("express");
const app = express();

// dossier public (pour le css, etc.)
const path = require("path");
app.use(express.static(path.join(__dirname, "public")));

// définition du view engine
app.set("view engine", "ejs"); // npm install --save ejs
app.set("views", path.join(__dirname, "views"));

// layout
const expressLayouts = require("express-ejs-layouts"); //npm install express-ejs-layouts
app.use(expressLayouts);
app.set("layout", "../views/layouts/layout"); // définit le layout par défaut

// Routage
const homeRouter = require("./routes/homeRouter");
app.use("/", homeRouter);

const reasearchRouter = require("./routes/reasearchRouter");
app.use("/reasearch", reasearchRouter);

const teachingRouter = require('./routes/teachingRouter');
app.use("/teaching", teachingRouter);

module.exports = app;
