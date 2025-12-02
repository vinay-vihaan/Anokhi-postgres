const express = require('express');
const router = express.Router();
const builderUserController = require('../controllers/builderUserController');

router.get('/', builderUserController.getAllBuilderUsers);

module.exports = router;