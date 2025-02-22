const express = require("express");
const app = express();

const path = require("path");

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "views"));

const expressLayout = require("express-ejs-layouts");
app.use(expressLayout);

app.set("layout", "../views/layouts/layout");

const randomRouter = require("./routes/randomRouter")
app.use("/jokes", randomRouter);

const listRouter = require("./routes/listRouter")
app.use("/jokes", listRouter);

module.exports = app;
