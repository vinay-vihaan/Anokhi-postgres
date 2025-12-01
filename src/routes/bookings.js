const express = require('express');
const router = express.Router();
const { createBooking, getUserBookings, getBookingById, updateBooking, cancelBooking } = require('../controllers/bookingController');
const { authenticate } = require('../middleware/auth');
const { validateBooking, validate } = require('../validators/propertyValidators');

// Route to create a new booking
router.post('/', authenticate, validateBooking, validate, createBooking);

// Route to get all bookings for a user
router.get('/', authenticate, getUserBookings);

// Route to get a specific booking by ID
router.get('/:id', authenticate, getBookingById);

// Route to update a booking
router.put('/:id', authenticate, validateBooking, validate, updateBooking);

// Route to delete a booking
router.delete('/:id', authenticate, cancelBooking);

module.exports = router;