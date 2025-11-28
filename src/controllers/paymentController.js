const Payment = require('../models/transaction');
const { Op } = require('sequelize');

// Create a new payment transaction
exports.createPayment = async (req, res) => {
    try {
        const { userId, amount, paymentMethod, status } = req.body;
        const payment = await Payment.create({ userId, amount, paymentMethod, status });
        res.status(201).json(payment);
    } catch (error) {
        res.status(500).json({ message: 'Error creating payment', error });
    }
};

// Get payment details by ID
exports.getPaymentById = async (req, res) => {
    try {
        const payment = await Payment.findByPk(req.params.id);
        if (!payment) {
            return res.status(404).json({ message: 'Payment not found' });
        }
        res.status(200).json(payment);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching payment', error });
    }
};

// Get all payments for a user
exports.getPaymentsByUserId = async (req, res) => {
    try {
        const payments = await Payment.findAll({ where: { userId: req.params.userId } });
        res.status(200).json(payments);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching payments', error });
    }
};

// Update payment status
exports.updatePaymentStatus = async (req, res) => {
    try {
        const payment = await Payment.findByPk(req.params.id);
        if (!payment) {
            return res.status(404).json({ message: 'Payment not found' });
        }
        payment.status = req.body.status;
        await payment.save();
        res.status(200).json(payment);
    } catch (error) {
        res.status(500).json({ message: 'Error updating payment', error });
    }
};

// Delete a payment transaction
exports.deletePayment = async (req, res) => {
    try {
        const payment = await Payment.findByPk(req.params.id);
        if (!payment) {
            return res.status(404).json({ message: 'Payment not found' });
        }
        await payment.destroy();
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: 'Error deleting payment', error });
    }
};