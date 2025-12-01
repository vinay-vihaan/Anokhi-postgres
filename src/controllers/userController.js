const { User } = require('../models');

exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching users.' });
    }
};

exports.createUser = (req, res) => {
    res.status(201).json({ message: 'User created' });
};

exports.getUserById = (req, res) => {
    res.status(200).json({ message: `User with id ${req.params.id}` });
};

exports.updateUser = (req, res) => {
    res.status(200).json({ message: `User with id ${req.params.id} updated` });
};

exports.deleteUser = (req, res) => {
    res.status(200).json({ message: `User with id ${req.params.id} deleted` });
};