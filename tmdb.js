const axios = require('axios');
const TMDB_API_KEY = process.env.TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

exports.tmdbSearch = async (query, page = 1) => {
  const res = await axios.get(`${BASE_URL}/search/movie`, {
    params: { api_key: TMDB_API_KEY, query, page }
  });
  return res.data;
};

exports.tmdbDetails = async (movieId) => {
  const res = await axios.get(`${BASE_URL}/movie/${movieId}`, {
    params: { api_key: TMDB_API_KEY }
  });
  return res.data;
};

exports.tmdbDiscover = async (params = {}) => {
  const res = await axios.get(`${BASE_URL}/discover/movie`, {
    params: { api_key: TMDB_API_KEY, ...params }
  });
  return res.data;
};