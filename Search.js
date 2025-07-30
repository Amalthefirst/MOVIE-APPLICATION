import React, { useState } from 'react';
import axios from '../api/axios';

const Search = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const handleSearch = async e => {
    e.preventDefault();
    const res = await axios.get(`/movies/search?query=${query}`);
    setMovies(res.data.results || []);
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input value={query} onChange={e => setQuery(e.target.value)} />
        <button>Search</button>
      </form>
      <div>
        {movies.map(movie => (
          <div key={movie.id}>
            <h3>{movie.title}</h3>
            {movie.poster_path && <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt="" />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;