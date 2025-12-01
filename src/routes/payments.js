const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/paymentController');
const { validatePayment, validate } = require('../validators/paymentValidators');

// Route to initiate a payment
router.post('/initiate', validatePayment, validate, paymentController.createPayment);

// Route to confirm a payment
router.post('/confirm', paymentController.updatePaymentStatus);

// Route to get payment status
router.get('/status/:transactionId', paymentController.getPaymentById);

module.exports = router;