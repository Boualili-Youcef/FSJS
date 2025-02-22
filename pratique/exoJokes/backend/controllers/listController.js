const fs = require("fs").promises;

module.exports.list = async function list(req, res) {
  try {
    const data = await fs.readFile("./data/jokes.json", "utf-8");
    const jokes = JSON.parse(data);
    res.render("pages/list", { title: "List", jokes });
  } catch (err) {
    console.error("Error reading jokes.json:", err);
    res.status(500).send("Server Error");
  }
};
