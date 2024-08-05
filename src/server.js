// src/server.js
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const router = require("./routes/index");

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(router);

// Export the app as a function to handle requests
module.exports = (req, res) => {
  app(req, res);
};
