const express = require('express'); // inclusion d'express
const app = express();

const path = require("path");

require("./config/database");

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const expressLayout = require("express-ejs-layouts");
app.use(expressLayout);

app.set("layout", "../views/layouts/layout");
app.use(express.urlencoded({ extended: true }));


const moviesRouter = require("./routes/moviesRouter");
app.use("/", moviesRouter);

const listRouter = require("./routes/listRouter");
app.use("/movies", listRouter);

// Exportation de notre application express
module.exports = app;