
const express = require('express');
const router = express.Router();
const savedSearchController = require('../controllers/savedSearchController');

router.post('/', savedSearchController.createSavedSearch);
router.get('/user/:userId', savedSearchController.getSavedSearchesByUser);
router.delete('/:id', savedSearchController.deleteSavedSearch);

module.exports = router;
