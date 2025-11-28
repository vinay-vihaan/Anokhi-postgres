const { Property, User, Booking } = require('../models');

exports.getPropertyViews = async (req, res) => {
    try {
        const propertyViews = await Property.findAll({
            attributes: ['id', 'title', 'views'],
            order: [['views', 'DESC']],
        });
        res.status(200).json(propertyViews);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving property views', error });
    }
};

exports.getLeadCounts = async (req, res) => {
    try {
        const leadCounts = await Booking.count({
            group: ['propertyId'],
            attributes: ['propertyId'],
        });
        res.status(200).json(leadCounts);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving lead counts', error });
    }
};

exports.getUserAnalytics = async (req, res) => {
    try {
        const userAnalytics = await User.findAll({
            attributes: ['id', 'full_name', 'email', [sequelize.fn('COUNT', sequelize.col('Bookings.id')), 'bookingCount']],
            include: [{
                model: Booking,
                attributes: [],
            }],
            group: ['User.id'],
        });
        res.status(200).json(userAnalytics);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving user analytics', error });
    }
};