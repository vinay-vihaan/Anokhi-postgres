const { body, param } = require('express-validator');

const propertyValidators = {
    createProperty: [
        body('title').notEmpty().withMessage('Title is required'),
        body('description').notEmpty().withMessage('Description is required'),
        body('price').isNumeric().withMessage('Price must be a number'),
        body('area').isNumeric().withMessage('Area must be a number'),
        body('bedrooms').isInt({ min: 0 }).withMessage('Bedrooms must be a non-negative integer'),
        body('bathrooms').isInt({ min: 0 }).withMessage('Bathrooms must be a non-negative integer'),
        body('location').notEmpty().withMessage('Location is required'),
        body('listing_type').isIn(['sale', 'rent']).withMessage('Listing type must be either sale or rent'),
        body('images').isArray().withMessage('Images must be an array'),
        body('amenities').optional().isArray().withMessage('Amenities must be an array'),
        body('tags').optional().isArray().withMessage('Tags must be an array'),
    ],

    updateProperty: [
        param('id').isUUID().withMessage('Property ID must be a valid UUID'),
        body('title').optional().notEmpty().withMessage('Title cannot be empty'),
        body('description').optional().notEmpty().withMessage('Description cannot be empty'),
        body('price').optional().isNumeric().withMessage('Price must be a number'),
        body('area').optional().isNumeric().withMessage('Area must be a number'),
        body('bedrooms').optional().isInt({ min: 0 }).withMessage('Bedrooms must be a non-negative integer'),
        body('bathrooms').optional().isInt({ min: 0 }).withMessage('Bathrooms must be a non-negative integer'),
        body('location').optional().notEmpty().withMessage('Location cannot be empty'),
        body('listing_type').optional().isIn(['sale', 'rent']).withMessage('Listing type must be either sale or rent'),
        body('images').optional().isArray().withMessage('Images must be an array'),
        body('amenities').optional().isArray().withMessage('Amenities must be an array'),
        body('tags').optional().isArray().withMessage('Tags must be an array'),
    ],

    getProperty: [
        param('id').isUUID().withMessage('Property ID must be a valid UUID'),
    ],

    deleteProperty: [
        param('id').isUUID().withMessage('Property ID must be a valid UUID'),
    ],
};

module.exports = propertyValidators;