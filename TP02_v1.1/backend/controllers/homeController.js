module.exports.home = (req, res) => {  
    res.render('pages/home', {id_value : req.params.id});
};