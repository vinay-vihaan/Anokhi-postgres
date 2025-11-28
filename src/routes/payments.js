const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/paymentController');
const { validatePayment } = require('../validators/paymentValidators');

// Route to initiate a payment
router.post('/initiate', validatePayment, paymentController.initiatePayment);

// Route to confirm a payment
router.post('/confirm', paymentController.confirmPayment);

// Route to get payment status
router.get('/status/:transactionId', paymentController.getPaymentStatus);

module.exports = router;