const { body } = require('express-validator');

const validateRegistration = [
    body('full_name').notEmpty().withMessage('Full name is required'),
    body('email').isEmail().withMessage('Valid email is required'),
    body('phone').notEmpty().withMessage('Phone number is required'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
];

const validateLogin = [
    body('email').isEmail().withMessage('Valid email is required'),
    body('password').notEmpty().withMessage('Password is required'),
];

const refreshTokenValidator = [
    body('refresh_token').notEmpty().withMessage('Refresh token is required'),
];

module.exports = {
    validateRegistration,
    validateLogin,
    refreshTokenValidator,
};