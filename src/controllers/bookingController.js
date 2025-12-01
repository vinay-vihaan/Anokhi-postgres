const { Booking, Property, User } = require('../models');

// Create a new booking
exports.createBooking = async (req, res) => {
    try {
        const { userId, propertyId, bookingDate } = req.body;

        const property = await Property.findByPk(propertyId);
        if (!property) {
            return res.status(404).json({ message: 'Property not found' });
        }

        const booking = await Booking.create({
            userId,
            propertyId,
            bookingDate,
        });

        return res.status(201).json(booking);
    } catch (error) {
        return res.status(500).json({ message: 'Error creating booking', error });
    }
};

// Get all bookings for a user
exports.getUserBookings = async (req, res) => {
    try {
        const { userId } = req.params;

        const bookings = await Booking.findAll({
            where: { userId },
            include: [{ model: Property }],
        });

        return res.status(200).json(bookings);
    } catch (error) {
        return res.status(500).json({ message: 'Error fetching bookings', error });
    }
};

// Get a specific booking by ID
exports.getBookingById = async (req, res) => {
    try {
        const booking = await Booking.findByPk(req.params.id);
        if (!booking) {
            return res.status(404).json({ message: 'Booking not found' });
        }
        res.status(200).json(booking);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching booking', error });
    }
};

// Update a booking
exports.updateBooking = async (req, res) => {
    try {
        const [updated] = await Booking.update(req.body, {
            where: { id: req.params.id }
        });
        if (!updated) {
            return res.status(404).json({ error: 'Booking not found' });
        }
        const updatedBooking = await Booking.findByPk(req.params.id);
        res.status(200).json(updatedBooking);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Cancel a booking
exports.cancelBooking = async (req, res) => {
    try {
        const { bookingId } = req.params;

        const booking = await Booking.findByPk(bookingId);
        if (!booking) {
            return res.status(404).json({ message: 'Booking not found' });
        }

        await booking.destroy();
        return res.status(204).send();
    } catch (error) {
        return res.status(500).json({ message: 'Error canceling booking', error });
    }
};

// Delete a booking
exports.deleteBooking = async (req, res) => {
    try {
        const deleted = await Booking.destroy({
            where: { id: req.params.id }
        });
        if (!deleted) {
            return res.status(404).json({ error: 'Booking not found' });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};