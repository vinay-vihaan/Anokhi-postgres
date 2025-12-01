const rateLimit = require('express-rate-limit');

const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // 5 requests per windowMs
  message: 'Too many login/register attempts, please try again later',
  standardHeaders: true,
  legacyHeaders: false,
});

module.exports = authLimiter;