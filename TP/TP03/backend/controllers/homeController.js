module.exports.home = (req, res, next) => {
    let message ;
    let state = 'failed';
    if (req.method === "POST") {
        let data = req.body;
        if (!data.username) {
            message = "USERNAME IS EMPTY";
        } else if (!data.password) {
            message = "PASSWORD IS EMPTY";
        } else if (data.username !== "walter" || data.password !== "white") {
            message = "Authetication Failed";
        }else {
            message = "WELCOME " + data.username;
            state = 'success';
        }
        res.render("pages/home", { message, state });
    } else {
        res.render("pages/home", { message, state });
    }
};

module.exports.logout = (req, res, next) => {
    res.redirect('/');
}