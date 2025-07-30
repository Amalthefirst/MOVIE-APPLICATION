import React, { useEffect, useState } from 'react';
import axios from '../api/axios';

const Recommendations = () => {
  const [recs, setRecs] = useState([]);

  useEffect(() => {
    axios.get('/recommendations').then(res => setRecs(res.data.movies || []));
  }, []);

  return (
    <div>
      <h1>Recommended for you</h1>
      <div>
        {recs.map(movie => (
          <div key={movie.id}>{movie.title}</div>
        ))}
      </div>
    </div>
  );
};

export default Recommendations;