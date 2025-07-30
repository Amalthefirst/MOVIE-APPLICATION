const User = require('../models/User');

exports.getProfile = async (req, res) => {
  res.json({
    username: req.user.username,
    email: req.user.email,
    favorites: req.user.favorites,
    watchlists: req.user.watchlists,
  });
};

exports.addFavorite = async (req, res) => {
  const { movieId } = req.body;
  if (!req.user.favorites.includes(movieId)) {
    req.user.favorites.push(movieId);
    await req.user.save();
  }
  res.json({ favorites: req.user.favorites });
};

exports.removeFavorite = async (req, res) => {
  req.user.favorites = req.user.favorites.filter(id => id !== req.body.movieId);
  await req.user.save();
  res.json({ favorites: req.user.favorites });
};

exports.createWatchlist = async (req, res) => {
  const { name } = req.body;
  req.user.watchlists.push({ name, movies: [] });
  await req.user.save();
  res.json({ watchlists: req.user.watchlists });
};

exports.addToWatchlist = async (req, res) => {
  const { listName, movieId } = req.body;
  const list = req.user.watchlists.find(wl => wl.name === listName);
  if (list && !list.movies.includes(movieId)) {
    list.movies.push(movieId);
    await req.user.save();
  }
  res.json({ watchlists: req.user.watchlists });
};