const express = require("express"); // C'est pour inclure le module

const app = express(); // C'est pour créer une application Express

const path = require("path"); // C'est pour inclure le module path de Node.js

// Ajoute un middleware qui retourne les documents statiques situés sous le dossier /public.
// NB : il faut le mettre avant tout autres use qui modifie res 
// pour que le cas des fichiers static soit bien traité en 1er dans la chaine des middlewares.
app.use(express.static(path.join(__dirname,'public')));

app.set('view engine', 'ejs'); // Définition du moteur de rendu 
app.set('views', path.join(__dirname, 'views')); // Déclaration du dossier contenant les vues

// Middleware global pour gérer toutes les requêtes
app.use((req, res, next) => {
  res.render('pages/home', {nickname: "White", sex: "male"} );
});

// app.use((req, res, next) => {
//   res.sendFile(path.join(__dirname, "public/pages/index.html"));
// });

// Exportation de l'application Express
module.exports = app;
