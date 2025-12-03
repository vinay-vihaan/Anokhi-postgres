
const { Review } = require('../models');

const createReview = async (req, res) => {
    try {
        const review = await Review.create(req.body);
        res.status(201).json(review);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getReviewsByProperty = async (req, res) => {
    try {
        const reviews = await Review.findAll({ where: { property_id: req.params.propertyId } });
        res.status(200).json(reviews);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createReview,
    getReviewsByProperty,
};