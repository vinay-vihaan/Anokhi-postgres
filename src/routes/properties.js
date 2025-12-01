const express = require('express');
const router = express.Router();
const propertyController = require('../controllers/propertyController');
const { validateProperty } = require('../validators/propertyValidators');

// Route to create a new property
router.post('/', validateProperty, propertyController.createProperty);

// Route to get all properties with optional filters
router.get('/', propertyController.getProperties);

// Route to get a single property by ID
router.get('/:id', propertyController.getPropertyById);

// Route to update a property by ID
router.put('/:id', validateProperty, propertyController.updateProperty);

// Route to delete a property by ID
router.delete('/:id', propertyController.deleteProperty);

module.exports = router;