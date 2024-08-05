const Movies = require("../utils/classMovies");
const MovieModel = require("../models/Movie");

const getMoviesService = async () => {
  try {
    let moviesData = await MovieModel.find();
    let movies = moviesData.map((movie) => new Movies(movie));
    return movies;
  } catch (error) {
    throw error.message;
  }
};

const createMovieService = async (movie) => {
  try {
    const newMovie = await MovieModel.create(movie)
    return newMovie;
  } catch (error) {
    throw error.message;
  }
}

module.exports = {
  getMoviesService,
  createMovieService,
};


