const { Router } = require("express");
const routeMovies = require("./routeMovies");

const router = Router();

router.use("/movies", routeMovies);

module.exports = router;
