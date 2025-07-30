import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Login from './pages/Login';
import Register from './pages/Register';
import Search from './pages/Search';
import MovieDetails from './pages/MovieDetails';
import Profile from './pages/Profile';
import Recommendations from './pages/Recommendations';

function App() {
  return (
    <AuthProvider>
      <Router>
        <nav>
          <Link to="/">Search</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/recommendations">Recommendations</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/recommendations" element={<Recommendations />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;