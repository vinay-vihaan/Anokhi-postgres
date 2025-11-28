import express from 'express';
import authRoutes from './auth.js';
import propertyRoutes from './properties.js';
import agentRoutes from './agents.js';
import bookingRoutes from './bookings.js';
import paymentRoutes from './payments.js';
import adminRoutes from './admin.js';

const router = express.Router();

// Define main routes
router.use('/auth', authRoutes);
router.use('/properties', propertyRoutes);
router.use('/agents', agentRoutes);
router.use('/bookings', bookingRoutes);
router.use('/payments', paymentRoutes);
router.use('/admin', adminRoutes);

export default router;