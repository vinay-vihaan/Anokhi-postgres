const Lead = require('../models/lead');

exports.getAllLeads = async (req, res) => {
  try {
    const leads = await Lead.findAll();
    res.json(leads);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};