module.exports.form = (req, res, next) => {
  if (req.method === "POST") {
    let data = req.body;
    res.render("pages/form", { data });
  } else {
    res.render("pages/form");
  }
};
