import { Booking } from '../models';
import { Property } from '../models';
import { User } from '../models';

// Create a new booking
export const createBooking = async (req, res) => {
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
export const getUserBookings = async (req, res) => {
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

// Cancel a booking
export const cancelBooking = async (req, res) => {
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