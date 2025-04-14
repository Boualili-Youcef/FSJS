module.exports.loginForm = (req, res, next)=>{
    res.render('pages/loginForm');
}

module.exports.login = (req, res, next)=>{
    let data = req.body;
    let error = {}
    if(!data.username || data.username === ""){
        error.username = "username manque "
    }
    if(!data.password || data.password === ""){
        error.password = "password manque "
    }

    if(error.length > 0){
        res.render("pages/loginForm", {error})
        return
    }
    if(data.username != "youcef" && data.password != "boualili"){
        error.failed = "failed to log"
        res.render('pages/loginForm', { error});
        return
    }else{
        res.render("pages/loginOK", {username: data.username})
        return

    }

} 