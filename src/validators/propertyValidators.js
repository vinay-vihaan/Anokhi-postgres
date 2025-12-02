const { check, validationResult } = require('express-validator');

const validateProperty = [
    check('title').not().isEmpty().withMessage('Title is required'),
    check('description').not().isEmpty().withMessage('Description is required'),
    check('property_type').not().isEmpty().withMessage('Property type is required'),
    check('listing_type').isIn(['rent', 'sale']).withMessage('Invalid listing type'),
    check('price').isFloat({ gt: 0 }).withMessage('Price must be a positive number'),
    check('area').isFloat({ gt: 0 }).withMessage('Area must be a positive number'),
    check('bedrooms').isInt({ min: 0 }).withMessage('Bedrooms must be a non-negative integer'),
    check('bathrooms').isInt({ min: 0 }).withMessage('Bathrooms must be a non-negative integer'),
    check('furnishing').not().isEmpty().withMessage('Furnishing status is required'),
    check('status').isIn(['active', 'sold', 'rented']).withMessage('Invalid status'),
    check('location.address').not().isEmpty().withMessage('Address is required'),
    check('location.city').not().isEmpty().withMessage('City is required'),
    check('location.state').not().isEmpty().withMessage('State is required'),
    check('location.country').not().isEmpty().withMessage('Country is required'),
    check('location.latitude').isFloat().withMessage('Latitude must be a number'),
    check('location.longitude').isFloat().withMessage('Longitude must be a number'),
];

const validateBooking = [
    check('propertyId').isInt().withMessage('Property ID must be an integer'),
    check('bookingDate').isISO8601().withMessage('Booking date must be a valid date'),
];

const validate = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};

module.exports = { validateProperty, validate, validateBooking };