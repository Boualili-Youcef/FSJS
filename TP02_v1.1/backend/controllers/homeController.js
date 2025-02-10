module.exports.home = (req, res, next) => {  
    const id_value = req.params.id || null; 
    const query = req.query;  

    res.render('pages/home', { id_value, query });
};
