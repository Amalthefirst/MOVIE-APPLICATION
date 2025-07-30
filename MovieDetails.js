import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../api/axios';
import { AuthContext } from '../contexts/AuthContext';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [reviews, setReviews] = useState([]);
  const { token } = useContext(AuthContext);

  useEffect(() => {
    axios.get(`/movies/${id}`).then(res => setMovie(res.data));
    axios.get(`/reviews/${id}`).then(res => setReviews(res.data));
  }, [id]);

  const addFavorite = async () => {
    await axios.post('/user/favorite', { movieId: id });
  };

  return movie && (
    <div>
      <h1>{movie.title}</h1>
      <button onClick={addFavorite}>Favorite</button>
      <p>{movie.overview}</p>
      <div>
        <h2>Reviews</h2>
        {reviews.map(r => (
          <div key={r._id}><b>{r.user.username}</b>: {r.review} ({r.rating}/10)</div>
        ))}
      </div>
    </div>
  );
};

export default MovieDetails;