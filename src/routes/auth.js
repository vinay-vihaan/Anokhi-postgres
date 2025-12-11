const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { validateRegistration, validateLogin } = require('../validators/authValidators');

// User Registration
router.post('/register', validateRegistration, authController.register);

// User Login
router.post('/login', validateLogin, authController.login);

// Token Refresh
router.post('/refresh-token', authController.refreshToken);

// Forgot password
router.post('/forgot-password', authController.forgotPassword);

// Reset password
router.post('/reset-password', authController.resetPassword);

module.exports = router;
