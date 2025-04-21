const Food = require("../models/Food");

const PUBLIC_DIR = "./public" ;
const UPLOAD_DIR = '/data/uploads/' ;
const multer  = require('multer') ;
const fs = require('fs') ;

// OPTIONNEL : on peut définir une technique de storage
const storage = multer.diskStorage({
    destination: (req, file, cb) =>{
        const dest = PUBLIC_DIR + UPLOAD_DIR ;
        if (!fs.existsSync(dest)){
            fs.mkdirSync(dest, { recursive: true });
        }
        cb(null, dest) ;
    },
    filename: (req, file, cb)=>{
        const fileName = file.originalname.toLowerCase().split(' ').join('_');
        cb(null, fileName)
    }
})

// OPTIONNEL : on peut définir un filtre de vérification des fichiers
const filter = (req, file, cb)=>{
    if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
        cb(null, true);
    } else {
        cb(new Error('Only .png, .jpg and .jpeg format allowed!'), false);
    }
}

// Configuration de l'uploader
const uploader = multer({
    // dest: UPLOAD_DIR, // <- à mettre si on ne définit pas de storage
    storage: storage,
    fileFilter: filter,
    limits:{
        fileSize: 700_000
    }
}) ;



module.exports.menu = (req, res, next) => {
  Food.find()
    .sort("name : 1")
    .then((foods) => {
      res.render("./pages/Menu", { foods });
    })
    .catch((error) => res.status(400).send(error));
};


module.exports.loginForm = (req, res, next)=>{
    res.render('pages/login');
}

module.exports.login = (req, res, next) => {
  // récupération des données du POST
  let data = req.body;

  let error = {};
  if (!data.username || data.username === "") {
    error.username = "User name should not be empty";
  }
  if (!data.password || data.password === "") {
    error.password = "Password should not be empty";
  }

  if (Object.keys(error).length > 0) {
    res.render("pages/login", { error, username: data.username });
    return;
  }

  if ((data.username == "youcef") & (data.password == "boualili")) {
    res.render("pages/addForm", { nick: data.username });
    return;
  } else {
    error.bad = "Bad credentials";
    res.render("pages/login", { error, username: data.username });
  }
};


module.exports.createForm = (req, res, next)=>{
    res.render('pages/addForm');
}


module.exports.create = (req, res, next)=>{

    // Utilisation de multer : ici on précise qu'il n'y a qu'un fichier (single)
    // -> on n'oublie pas de donner la propriété name de l'input (ici : name="fileInput")
    uploader.single('image')(req, res, (err)=>{

        if(err instanceof multer.MulterError){
            // une erreur de multer
            console.log('MulterError')
            res.send(err)
            return;
        }else if(err){
            // une erreur inconnue
            res.send(err.message);
            return;
        }

        // Pas d'erreur..
        // les infos du fichier uploadés sont dans req.file
        // console.log(req.file)
        const food = new Food({
            ...req.body,
        })
        if (req.file){
            food.image =  UPLOAD_DIR + req.file.filename ;
        }

        // ATTENTION : il faudrait vérifier que le formulaire a bien été rempli !
        food.save() // sauvegarde dans la BD
            .then((m)=>{
                // si tout s'est bien passé, on réaffiche la liste
                res.redirect('/Menu/'+m._id)
            })
            .catch(error => res.status(400).send(error))

    }) ;

}



module.exports.updateForm = (req, res, next)=> {
    const id = req.params.id ;
    Food.findById(id)
        .then((food)=>{
            res.render('./pages/modifForm', { food })
        })
        .catch(error => res.status(400).send(error))
}

module.exports.update = (req, res, next)=> {

    // Utilisation de multer : ici on précise qu'il n'y a qu'un fichier (single)
    // -> on n'oublie pas de donner la propriété name de l'input (ici : name="fileInput")
    uploader.single('image')(req, res, (err)=> {

        if (err instanceof multer.MulterError) {
            // une erreur de multer
            console.log('MulterError')
            res.send(err)
            return;
        } else if (err) {
            // une erreur inconnue
            res.send(err.message);
            return;
        }

        // Pas d'erreur..
        // les infos du fichier uploadés sont dans req.file
        console.log(req.file)
        const id = req.params.id;
        const foodData = {
            ...req.body
        };
        if (req.file) {
            foodData.image = UPLOAD_DIR + req.file.filename;
        }
        const updatedFood = Food.findByIdAndUpdate(
            id,
            foodData,
            {new: true} // pour que le return soit le movie modifié
        ).then(() => {
            res.redirect("/menu/" + id);
        })
            .catch(error => res.status(400).send(error))
    });
}

module.exports.delete = async (req, res, next)=> { // async + await : une autre manière de gérer les Promise
    const id = req.params.id ;
    try{
        const id = req.params.id ;
        await Food.findByIdAndDelete(id) ; // bloquant et génère une exception en cas de pb
        res.redirect('/menu') ;
    } catch (error) { res.status(400).send(error) }

}
