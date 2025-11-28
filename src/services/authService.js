const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { User } = require('../models');

const authService = {
    register: async (userData) => {
        const { email, password } = userData;
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({ ...userData, password_hash: hashedPassword });
        return newUser;
    },

    login: async (email, password) => {
        const user = await User.findOne({ where: { email } });
        if (!user) {
            throw new Error('User not found');
        }
        const isPasswordValid = await bcrypt.compare(password, user.password_hash);
        if (!isPasswordValid) {
            throw new Error('Invalid password');
        }
        const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
        return { user, token };
    },

    verifyToken: (token) => {
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            return decoded;
        } catch (error) {
            throw new Error('Invalid token');
        }
    }
};

module.exports = authService;