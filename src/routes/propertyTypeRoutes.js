const express = require('express');
const router = express.Router();
const propertyTypeController = require('../controllers/propertyTypeController');

router.get('/', propertyTypeController.getAllPropertyTypes);

module.exports = router;