const createError = require('http-errors');

const authenticate = (req, res, next) => {
  // Simplified authentication - implement proper JWT/auth in production
  const userId = req.headers['user-id'] || req.query.userId;
  
  if (!userId) {
    return next(createError(401, 'Authentication required'));
  }

  req.userId = userId;
  next();
};

const errorHandler = (err, req, res, next) => {
  console.error('Error:', err);

  const status = err.status || 500;
  const message = err.message || 'Internal Server Error';

  res.status(status).json({
    success: false,
    error: {
      message,
      status,
      ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
    }
  });
};

const notFound = (req, res, next) => {
  next(createError(404, `Route ${req.originalUrl} not found`));
};

module.exports = {
  authenticate,
  errorHandler,
  notFound
};