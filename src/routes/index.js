const express = require('express');
const authRoutes = require('./auth.js');
const propertyRoutes = require('./properties.js');
const agentRoutes = require('./agents.js');
const bookingRoutes = require('./bookings.js');
const paymentRoutes = require('./payments.js');
const adminRoutes = require('./admin.js');
const userRoutes = require('./users.js'); // Import user routes
const propertyTypeRoutes = require('./propertyTypeRoutes.js');
const builderRoutes = require('./builderRoutes.js');

const router = express.Router();

// Define main routes
router.use('/auth', authRoutes);
router.use('/properties', propertyRoutes);
router.use('/agents', agentRoutes);
router.use('/bookings', bookingRoutes);
router.use('/payments', paymentRoutes);
router.use('/admin', adminRoutes);
router.use('/users', userRoutes); // Use user routes
router.use('/property-types', propertyTypeRoutes);
router.use('/builders', builderRoutes);

module.exports = router;