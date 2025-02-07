const express = require("express"); // C'est pour inclure le module

const app = express(); // C'est pour créer une application Express

const path = require("path"); // C'est pour inclure le module path de Node.js

// Ajoute un middleware qui retourne les documents statiques situés sous le dossier /public.
// NB : il faut le mettre avant tout autres use qui modifie res 
// pour que le cas des fichiers static soit bien traité en 1er dans la chaine des middlewares.
app.use(express.static(path.join(__dirname,'public')));


// Middleware global pour gérer toutes les requêtes
app.use((req, res, next) => {
  const now = new Date().toDateString();
  console.log(`${now} : une requeste ${req.method} est arrivée !`);
  next();
});

// app.use((req, res, next) => {
//   res.sendFile(path.join(__dirname, "public/pages/index.html"));
// });

// Exportation de l'application Express
module.exports = app;
