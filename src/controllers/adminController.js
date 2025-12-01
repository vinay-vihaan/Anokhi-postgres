exports.getDashboardData = (req, res) => {
    res.status(200).json({ message: 'Dashboard data' });
};

exports.getAllUsers = (req, res) => {
    res.status(200).json({ message: 'All users' });
};

exports.deleteUser = (req, res) => {
    res.status(200).json({ message: 'User deleted' });
};

exports.getAnalyticsData = (req, res) => {
    res.status(200).json({ message: 'Analytics data' });
};