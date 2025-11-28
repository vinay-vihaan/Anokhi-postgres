const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');
const { authenticate } = require('../middleware/auth');
const { validateBooking } = require('../validators/propertyValidators');

// Route to create a new booking
router.post('/', authenticate, validateBooking, bookingController.createBooking);

// Route to get all bookings for a user
router.get('/', authenticate, bookingController.getUserBookings);

// Route to get a specific booking by ID
router.get('/:id', authenticate, bookingController.getBookingById);

// Route to update a booking
router.put('/:id', authenticate, validateBooking, bookingController.updateBooking);

// Route to delete a booking
router.delete('/:id', authenticate, bookingController.deleteBooking);

module.exports = router;