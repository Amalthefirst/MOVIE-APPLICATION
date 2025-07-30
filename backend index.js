const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const authCtrl = require('../controllers/authController');
const userCtrl = require('../controllers/userController');
const movieCtrl = require('../controllers/movieController');
const reviewCtrl = require('../controllers/reviewController');
const recommendCtrl = require('../controllers/recommendController');

// Auth
router.post('/auth/register', authCtrl.register);
router.post('/auth/login', authCtrl.login);

// Movies
router.get('/movies/search', movieCtrl.searchMovies);
router.get('/movies/:id', movieCtrl.getMovieDetails);

// User
router.get('/user/profile', auth, userCtrl.getProfile);
router.post('/user/favorite', auth, userCtrl.addFavorite);
router.delete('/user/favorite', auth, userCtrl.removeFavorite);
router.post('/user/watchlist', auth, userCtrl.createWatchlist);
router.post('/user/watchlist/add', auth, userCtrl.addToWatchlist);

// Reviews
router.post('/review', auth, reviewCtrl.addReview);
router.get('/reviews/:movieId', reviewCtrl.getMovieReviews);

// Recommendations
router.get('/recommendations', auth, recommendCtrl.getRecommendations);

module.exports = router;