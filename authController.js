const User = require('../models/User');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const user = await User.create({ username, email, password });
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '2d' });
    res.json({ token, user: { username, email, favorites: user.favorites, watchlists: user.watchlists } });
  } catch (err) { res.status(400).json({ error: err.message }); }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user || !(await user.comparePassword(password))) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '2d' });
  res.json({ token, user: { username: user.username, email: user.email, favorites: user.favorites, watchlists: user.watchlists } });
};