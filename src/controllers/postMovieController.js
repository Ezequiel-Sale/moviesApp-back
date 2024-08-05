const { createMovieService } = require("../services/moviesService");

const createMovie = async (req, res) => {
    try {
      const { title, year, director, duration, genre, rate, poster } = req.body;
      const newMovie = await createMovieService({
        title,
        year,
        director,
        duration,
        genre,
        rate,
        poster,
      });
      res.status(201).send(newMovie);
    } catch (error) {
      res.status(500).send(error.message)
    }
  };

  module.exports = {createMovie};