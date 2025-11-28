const { Property } = require('../models');

const createProperty = async (propertyData) => {
    try {
        const property = await Property.create(propertyData);
        return property;
    } catch (error) {
        throw new Error('Error creating property: ' + error.message);
    }
};

const getAllProperties = async (filters) => {
    try {
        const properties = await Property.findAll({ where: filters });
        return properties;
    } catch (error) {
        throw new Error('Error fetching properties: ' + error.message);
    }
};

const getPropertyById = async (id) => {
    try {
        const property = await Property.findByPk(id);
        if (!property) {
            throw new Error('Property not found');
        }
        return property;
    } catch (error) {
        throw new Error('Error fetching property: ' + error.message);
    }
};

const updateProperty = async (id, propertyData) => {
    try {
        const [updated] = await Property.update(propertyData, {
            where: { id }
        });
        if (!updated) {
            throw new Error('Property not found or no changes made');
        }
        return await getPropertyById(id);
    } catch (error) {
        throw new Error('Error updating property: ' + error.message);
    }
};

const deleteProperty = async (id) => {
    try {
        const deleted = await Property.destroy({
            where: { id }
        });
        if (!deleted) {
            throw new Error('Property not found');
        }
        return true;
    } catch (error) {
        throw new Error('Error deleting property: ' + error.message);
    }
};

module.exports = {
    createProperty,
    getAllProperties,
    getPropertyById,
    updateProperty,
    deleteProperty
};