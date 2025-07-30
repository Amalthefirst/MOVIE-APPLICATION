import React, { useEffect, useState, useContext } from 'react';
import axios from '../api/axios';
import { AuthContext } from '../contexts/AuthContext';

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const { logout } = useContext(AuthContext);

  useEffect(() => {
    axios.get('/user/profile').then(res => setProfile(res.data));
  }, []);

  if (!profile) return <div>Loading...</div>;

  return (
    <div>
      <h1>{profile.username}</h1>
      <h2>Favorites</h2>
      <ul>
        {profile.favorites.map(id => <li key={id}>{id}</li>)}
      </ul>
      <button onClick={logout}>Log out</button>
    </div>
  );
};

export default Profile;