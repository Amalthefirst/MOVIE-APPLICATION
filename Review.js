const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  movieId: { type: String, required: true },
  rating: { type: Number, min: 1, max: 10 },
  review: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('Review', reviewSchema);