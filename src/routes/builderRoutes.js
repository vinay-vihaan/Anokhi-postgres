const express = require('express');
const router = express.Router();
const builderController = require('../controllers/builderController');

router.get('/', builderController.getAllBuilders);

module.exports = router;