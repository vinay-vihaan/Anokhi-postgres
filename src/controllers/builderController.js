const { Builder, Property } = require('../models');

exports.getAllBuilders = async (req, res) => {
  try {
    const builders = await Builder.findAll({
      include: [{
        model: Property,
        as: 'properties'
      }]
    });
    res.json(builders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getBuilderProperties = async (req, res) => {
  try {
    const builder = await Builder.findByPk(req.params.id, {
      include: [{
        model: Property,
        as: 'properties'
      }]
    });
    if (!builder) {
      return res.status(404).json({ message: 'Builder not found' });
    }
    res.json(builder.properties);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};