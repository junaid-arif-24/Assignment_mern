const {USERS} = require('../models/userModel');

const getUsers = (req, res) => {
  if (USERS.length === 0) {
    res.status(404).json({message: 'No users found'});
  }
  res.json(USERS);
};

module.exports = {getUsers};
