const express = require('express');
const { body } = require('express-validator');
const authController = require('../controllers/authController');
const { authLimiter } = require('../middleware/rateLimiter');

const router = express.Router();

// Register route
router.post(
    '/register',
    authLimiter,
    [
        body('full_name').trim().notEmpty().withMessage('Full name is required'),
        body('email').isEmail().withMessage('Valid email is required'),
        body('phone').isMobilePhone().withMessage('Valid phone number is required'),
        body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
    ],
    authController.register
);

// Login route
router.post(
    '/login',
    authLimiter,
    [
        body('email').isEmail().withMessage('Valid email is required'),
        body('password').notEmpty().withMessage('Password is required'),
    ],
    authController.login
);

// Refresh token route
router.post('/refresh-token', authController.refreshToken);

module.exports = router;
