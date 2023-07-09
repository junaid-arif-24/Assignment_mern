const handleNotFound = (req, res, next) => {
    res.status(404).json({ message: 'Not found' });
  };
  
  const handleError = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal server error' });
  };
  
  module.exports = { handleNotFound, handleError };
  