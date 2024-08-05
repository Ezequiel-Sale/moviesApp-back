const {
  getMoviesService,
} = require("../services/moviesService");

const getMovies = async (req, res) => {
  try {
    const movies = await getMoviesService();
    res.status(200).send(movies);
  } catch (error) {
    res.status(500).send("No pudimos traer las peliculas");
  }
};

module.exports = {
  getMovies,
};
