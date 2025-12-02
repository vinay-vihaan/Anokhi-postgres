const BuilderUser = require('../models/builderUser');

exports.getAllBuilderUsers = async (req, res) => {
  try {
    const builderUsers = await BuilderUser.findAll();
    res.json(builderUsers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};