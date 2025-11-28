import { Property } from '../models/property.js';
import { Op } from 'sequelize';

// Create a new property
export const createProperty = async (req, res) => {
    try {
        const property = await Property.create(req.body);
        res.status(201).json(property);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get all properties with optional filters
export const getProperties = async (req, res) => {
    const { location, priceRange, bedrooms, status } = req.query;
    const filters = {};

    if (location) {
        filters.location = { [Op.iLike]: `%${location}%` };
    }
    if (priceRange) {
        const [min, max] = priceRange.split('-').map(Number);
        filters.price = { [Op.between]: [min, max] };
    }
    if (bedrooms) {
        filters.bedrooms = bedrooms;
    }
    if (status) {
        filters.status = status;
    }

    try {
        const properties = await Property.findAll({ where: filters });
        res.status(200).json(properties);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get a single property by ID
export const getPropertyById = async (req, res) => {
    try {
        const property = await Property.findByPk(req.params.id);
        if (!property) {
            return res.status(404).json({ error: 'Property not found' });
        }
        res.status(200).json(property);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update a property
export const updateProperty = async (req, res) => {
    try {
        const [updated] = await Property.update(req.body, {
            where: { id: req.params.id }
        });
        if (!updated) {
            return res.status(404).json({ error: 'Property not found' });
        }
        const updatedProperty = await Property.findByPk(req.params.id);
        res.status(200).json(updatedProperty);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete a property
export const deleteProperty = async (req, res) => {
    try {
        const deleted = await Property.destroy({
            where: { id: req.params.id }
        });
        if (!deleted) {
            return res.status(404).json({ error: 'Property not found' });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};