const fs = require("fs/promises");

let cards = undefined;
let path = __dirname + "/../data/cards.json";

readCards = async () => {
  data = await fs.readFile(path);
  cards = JSON.parse(data);
};

module.exports.browse = async (req, res, next) => {
  if (cards === undefined) {
    await readCards();
  }

  res.render("pages/browse", { cards: Object.values(cards) });
};

module.exports.loginForm = (req, res, next) => {
  res.render("pages/login");
};

module.exports.login = (req, res, next) => {
  let error = {};
  let data = req.body;
  if (!data.username || data.username == "") {
    error = "User name should not be empty";
  } else if (!data.password || data.password == "") {
    error = "Password should not be empty";
  }

  if (Object.keys(error).length > 0) {
    res.render("pages/login", { error });
    return;
  }

  if (data.username === "youcef" && data.password === "boualili") {
    res.render("pages/home", { username: data.username });
    return;
  } else {
    error = "Bad credantials!!!";
    res.render("pages/login", { error });
  }
};
