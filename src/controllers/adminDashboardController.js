const User = require('../models/user');
const Listing = require('../models/listing');

exports.getDashboardData = async (req, res) => {
  try {
    const totalUsers = await User.count();
    const activeListings = await Listing.count({ where: { status: 'active' } });
    // Assuming you have a way to calculate revenue and pending approvals
    const revenue = 4520000; // Placeholder
    const pendingApprovals = 28; // Placeholder

    res.json({
      total_users: totalUsers,
      active_listings: activeListings,
      revenue: revenue,
      pending_approvals: pendingApprovals,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};