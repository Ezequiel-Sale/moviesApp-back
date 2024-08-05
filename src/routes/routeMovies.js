const { Router } = require("express");
const moviesController = require("../controllers/moviesController");
const postMovieController = require("../controllers/postMovieController");
const validateMovie = require("../middlewares/validations");

const routeMovies = Router();

routeMovies.get("/", moviesController.getMovies);

routeMovies.post("/", validateMovie, postMovieController.createMovie);

module.exports = routeMovies;
