// src/services/paymentService.js

const { Transaction } = require('../models');
const { Op } = require('sequelize');

class PaymentService {
    async createTransaction(transactionData) {
        try {
            const transaction = await Transaction.create(transactionData);
            return transaction;
        } catch (error) {
            throw new Error('Transaction creation failed: ' + error.message);
        }
    }

    async getTransactionById(transactionId) {
        try {
            const transaction = await Transaction.findOne({
                where: { id: transactionId }
            });
            return transaction;
        } catch (error) {
            throw new Error('Transaction retrieval failed: ' + error.message);
        }
    }

    async getTransactionsByUserId(userId) {
        try {
            const transactions = await Transaction.findAll({
                where: { userId: userId },
                order: [['createdAt', 'DESC']]
            });
            return transactions;
        } catch (error) {
            throw new Error('Transactions retrieval failed: ' + error.message);
        }
    }

    async updateTransaction(transactionId, updateData) {
        try {
            const [updated] = await Transaction.update(updateData, {
                where: { id: transactionId }
            });
            return updated;
        } catch (error) {
            throw new Error('Transaction update failed: ' + error.message);
        }
    }

    async deleteTransaction(transactionId) {
        try {
            const deleted = await Transaction.destroy({
                where: { id: transactionId }
            });
            return deleted;
        } catch (error) {
            throw new Error('Transaction deletion failed: ' + error.message);
        }
    }
}

module.exports = new PaymentService();