const { check, validationResult } = require('express-validator');

const validateProperty = [
    check('title').not().isEmpty().withMessage('Title is required'),
    check('description').not().isEmpty().withMessage('Description is required'),
    check('price').isDecimal().withMessage('Price must be a decimal value'),
    check('bedrooms').isInt({ min: 1 }).withMessage('Bedrooms must be a positive integer'),
    check('bathrooms').isInt({ min: 1 }).withMessage('Bathrooms must be a positive integer'),
    check('location').not().isEmpty().withMessage('Location is required'),
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
