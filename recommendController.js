const { tmdbDetails, tmdbDiscover } = require('../utils/tmdb');

exports.getRecommendations = async (req, res) => {
  const favorites = req.user.favorites || [];
  let genres = new Set();
  for (let id of favorites.slice(0, 5)) {
    const movie = await tmdbDetails(id);
    if (movie.genres) movie.genres.forEach(g => genres.add(g.id));
  }
  const recs = genres.size
    ? await tmdbDiscover({ with_genres: [...genres].join(',') })
    : { results: [] };
  res.json({ movies: recs.results });
};