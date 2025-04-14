const express = require("express");
const app = express();

const path = require("path");

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "views"))

const expressLayout = require("express-ejs-layouts");
app.use(expressLayout);

app.set('layout', '../views/layouts/layout');

const moviesRouter = require('./routes/moviesRouter');
app.use('/', moviesRouter);


module.exports = app;