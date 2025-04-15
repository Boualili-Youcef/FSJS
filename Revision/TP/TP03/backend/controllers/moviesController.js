const Movie = require("../models/Movies");

// Multer
const PUBLIC_DIR = "./public";
const UPLOAD_DIR = "/data/uploads/";
const multer = require("multer");
const fs = require("fs");

// OPTIONNEL : on peut définir une technique de storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const dest = PUBLIC_DIR + UPLOAD_DIR;
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    cb(null, dest);
  },
  filename: (req, file, cb) => {
    const fileName = file.originalname.toLowerCase().split(" ").join("_");
    cb(null, fileName);
  },
});

// OPTIONNEL : on peut définir un filtre de vérification des fichiers
const filter = (req, file, cb) => {
  if (
    file.mimetype == "image/png" ||
    file.mimetype == "image/jpg" ||
    file.mimetype == "image/jpeg"
  ) {
    cb(null, true);
  } else {
    cb(new Error("Only .png, .jpg and .jpeg format allowed!"), false);
  }
};

// Configuration de l'uploader
const uploader = multer({
  // dest: UPLOAD_DIR, // <- à mettre si on ne définit pas de storage
  storage: storage,
  fileFilter: filter,
  limits: {
    fileSize: 700_000,
  },
});

module.exports.list = (req, res, next) => {
  Movie.find()
    .sort({ title: 1 })
    .then((movies) => {
      res.render("pages/movies", { movies: movies });
    })
    .catch((error) => res.status(400).send(error));
};

module.exports.info = (req, res, next) => {
  let id = req.params.id;
  Movie.findById(id)
    .then((movie) => {
      res.render("pages/moviesInfo", { movie: movie });
    })
    .catch((error) => res.status(400).send(error));
};

module.exports.updateForm = (req, res, next) => {
  let id = req.params.id;
  Movie.findById(id)
    .then((movie) => {
      res.render("pages/moviesForm", { movie: movie });
    })
    .catch((error) => res.status(400).send(error));
};

module.exports.update = (req, res, next) => {
  // Utilisation de multer : ici on précise qu'il n'y a qu'un fichier (single)
  // -> on n'oublie pas de donner la propriété name de l'input (ici : name="fileInput")
  uploader.single("image")(req, res, (err) => {
    if (err instanceof multer.MulterError) {
      // une erreur de multer
      console.log("MulterError");
      res.send(err);
      return;
    } else if (err) {
      // une erreur inconnue
      res.send(err.message);
      return;
    }

    let id = req.params.id;
    let info = req.body;
    if (req.file) {
      info.image = UPLOAD_DIR + req.file.filename;
    }
    Movie.findByIdAndUpdate(id, info, { new: true })
      .then(() => {
        res.redirect("/movies/" + id);
      })
      .catch((error) => res.status(400).send(error));
  });
};

module.exports.createForm = (req, res, next) => {
  res.render("pages/createForm");
};

module.exports.create = (req, res, next) => {
  uploader.single("image")(req, res, (err) => {
    if (err instanceof multer.MulterError) {
      // une erreur de multer
      console.log("MulterError");
      res.send(err);
      return;
    } else if (err) {
      // une erreur inconnue
      res.send(err.message);
      return;
    }

    // Pas d'erreur..
    // les infos du fichier uploadés sont dans req.file
    console.log(req.file);
    let info = req.body;
    const movie = new Movie(info);
    if (req.file) {
      movie.image = UPLOAD_DIR + req.file.filename;
    }

    // ATTENTION : il faudrait vérifier que le formulaire a bien été rempli !
    movie
      .save() // sauvegarde dans la BD
      .then((m) => {
        // si tout s'est bien passé, on réaffiche la liste
        res.redirect("/movies/" + m._id);
      })
      .catch((error) => res.status(400).send(error));
  });
};
