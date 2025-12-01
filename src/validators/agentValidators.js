const { body } = require('express-validator');

const validateAgent = [
    body('name').notEmpty().withMessage('Name is required').isString().withMessage('Name must be a string'),
    body('user_id').notEmpty().withMessage('User ID is required').isInt().withMessage('User ID must be an integer'),
];

module.exports = {
    validateAgent,
};