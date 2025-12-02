const Property = require('../models/property');

exports.getAllListings = async (req, res) => {
  try {
    const properties = await Property.findAll();
    const listings = properties.map(property => ({
      property_id: property.property_id,
      builder_id: property.user_id,
      title: property.title,
      location: property.location.address,
      price: property.price,
      status: property.status,
      views: property.views,
      leads: property.leads
    }));
    res.json(listings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};