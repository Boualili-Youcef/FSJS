const mongoose = require("mongoose");

const moviesSchema = mongoose.Schema({
    title:{type:String, required:true},
    synopsis:{type:String, default: "No synopsis available yet !"}
});

module.exports = mongoose.model("Movies", moviesSchema)