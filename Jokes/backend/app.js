const express = require('express');
const app = express();

const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const expressLayouts = require('express-ejs-layouts');  
app.use(expressLayouts);
app.set("layout","layouts/layout");

const allRouter = require('./routes/allRouter');
app.use('/', allRouter);

module.exports = app;