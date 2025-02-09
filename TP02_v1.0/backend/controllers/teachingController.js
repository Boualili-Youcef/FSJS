module.exports.teaching = (req, res) => {
    res.render("teaching/index", { title: 'Enseignement' });
}

module.exports.javascript = (req, res) => { 
    res.render("teaching/javascript", { title: 'JavaScript' });
}

module.exports.php = (req, res) => {
    res.render("teaching/php", { title: 'PHP' });
}

module.exports.node = (req, res) => {
    res.render("teaching/node/node", { title: 'Node.js' });
}

module.exports.express = (req, res) => {
    res.render("teaching/node/express", { title: 'Express' });
}