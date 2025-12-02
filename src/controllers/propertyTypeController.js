const PropertyType = require('../models/propertyType');

exports.getAllPropertyTypes = async (req, res) => {
  try {
    const propertyTypes = await PropertyType.findAll();
    res.json(propertyTypes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};