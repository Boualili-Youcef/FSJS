const express = require("express");
const app = express();

const path = require("path");

// Require the database connection
//require("./controllers/database");

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "views"));

const expressLayout = require("express-ejs-layouts");
app.use(expressLayout);

app.set("layout", "../views/layouts/layout");


// TODO : modify the router
const moviesRouter = require("./routes/moviesRouter");
app.use("/", moviesRouter);

module.exports = app;
