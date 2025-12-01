const { check, validationResult } = require('express-validator');

const validatePayment = [
    check('bookingId').isInt().withMessage('Booking ID must be an integer'),
    check('amount').isDecimal().withMessage('Amount must be a decimal value'),
    check('paymentMethod').not().isEmpty().withMessage('Payment method is required'),
];

const validate = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};

module.exports = { validatePayment, validate };