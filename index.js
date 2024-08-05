// index.js
const app = require("./src/server");
const dbConfig = require("./src/config/dbConfig");

module.exports = async (req, res) => {
  try {
    await dbConfig();
    app(req, res);
  } catch (err) {
    res.status(500).send("Error en la conexión: " + err.message);
  }
};
