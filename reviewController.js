const Review = require('../models/Review');

exports.addReview = async (req, res) => {
  const { movieId, rating, review } = req.body;
  const newReview = await Review.create({ user: req.user._id, movieId, rating, review });
  res.json(newReview);
};

exports.getMovieReviews = async (req, res) => {
  const { movieId } = req.params;
  const reviews = await Review.find({ movieId }).populate('user', 'username');
  res.json(reviews);
};