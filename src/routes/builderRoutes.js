const express = require('express');
const router = express.Router();
const builderController = require('../controllers/builderController');

router.get('/', builderController.getAllBuilders);
router.get('/:id/properties', builderController.getBuilderProperties);

module.exports = router;