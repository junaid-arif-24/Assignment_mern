const jwt = require('../utils/jwt');
const { USERS } = require('../models/userModel');

const login = (req, res) => {
  const { username, password } = req.headers;
  const user = USERS.find(
    u => u.username === username && u.password === password,
  );
  if (user) {
    const token = jwt.generateJwt(user);
    res.json({ message: 'Logged in successfully', token });
  } else {
    res.status(403).json({ message: 'User authentication failed' });
  }
};

module.exports = { login };
