const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const { authenticate } = require('../middleware/auth');

// Admin routes
router.get('/dashboard', authenticate, adminController.getDashboardData);
router.get('/users', authenticate, adminController.getAllUsers);
router.delete('/users/:id', authenticate, adminController.deleteUser);
router.get('/analytics', authenticate, adminController.getAnalyticsData);

module.exports = router;