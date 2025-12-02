const Builder = require('../models/builder');
const Property = require('../models/property');

exports.getAllBuilders = async (req, res) => {
  try {
    const builders = await Builder.findAll({
      include: [{
        model: Property,
      }]
    });
    res.json(builders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};