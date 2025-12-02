const Favorite = require('../models/favorite');

exports.getAllFavorites = async (req, res) => {
  try {
    const favorites = await Favorite.findAll();
    res.json(favorites);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};