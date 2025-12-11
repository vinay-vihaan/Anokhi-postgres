const { User } = require('../models');
const bcrypt = require('bcrypt');

exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching users.' });
    }
};

exports.createUser = async (req, res) => {
    try {
        const { full_name, email, phone, password, role } = req.body;

        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
            return res.status(409).json({ error: 'User with this email already exists.' });
        }

        const salt = await bcrypt.genSalt(10);
        const password_hash = await bcrypt.hash(password, salt);

        const newUser = await User.create({
            full_name,
            email,
            phone,
            password_hash,
            role,
        });
        
        const userJson = newUser.toJSON();
        delete userJson.password_hash;

        res.status(201).json(userJson);
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ error: 'An error occurred while creating the user.' });
    }
};

exports.getUserById = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (user) {
            const userJson = user.toJSON();
            delete userJson.password_hash;
            res.status(200).json(userJson);
        } else {
            res.status(404).json({ error: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching the user.' });
    }
};

exports.updateUser = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (user) {
            const { full_name, email, phone, password, role } = req.body;
            if (password) {
                const salt = await bcrypt.genSalt(10);
                user.password_hash = await bcrypt.hash(password, salt);
            }
            user.full_name = full_name || user.full_name;
            user.email = email || user.email;
            user.phone = phone || user.phone;
            user.role = role || user.role;
            await user.save();
            const userJson = user.toJSON();
            delete userJson.password_hash;
            res.status(200).json(userJson);
        } else {
            res.status(404).json({ error: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while updating the user.' });
    }
};

exports.deleteUser = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (user) {
            await user.destroy();
            res.status(200).json({ message: 'User deleted successfully' });
        } else {
            res.status(404).json({ error: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while deleting the user.' });
    }
};
