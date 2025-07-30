const { tmdbSearch, tmdbDetails } = require('../utils/tmdb');

exports.searchMovies = async (req, res) => {
  const { query, page } = req.query;
  const data = await tmdbSearch(query, page);
  res.json(data);
};

exports.getMovieDetails = async (req, res) => {
  const { id } = req.params;
  const data = await tmdbDetails(id);
  res.json(data);
};