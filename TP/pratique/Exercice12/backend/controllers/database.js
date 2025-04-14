const mongoose = require("mongoose");

const host = "127.0.0.1";
const port = "27017";
const db_name = "movies_db";
const mongoDB = `mongodb://${host}:${port}/${db_name}?retryWrites=true&w=majority`;

mongoose.connect(mongoDB, {useUnifiedTopology:true})
    .then(()=>console.log("MongoDB OK !"))
    .catch(()=>console.log("MogoDB ERREUR !"));

const db = mongoose.connection;

db.on("error", console.error.bind(console,"MangoDB connection error:"));