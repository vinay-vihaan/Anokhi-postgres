
const { Amenity } = require('../models');

const createAmenity = async (req, res) => {
    try {
        const amenity = await Amenity.create(req.body);
        res.status(201).json(amenity);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getAllAmenities = async (req, res) => {
    try {
        const amenities = await Amenity.findAll();
        res.status(200).json(amenities);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createAmenity,
    getAllAmenities,
};