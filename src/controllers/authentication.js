const User = require('../models/Users');
const bcrypt = require('bcrypt');

module.exports = {
    async login(req, res) {
        const { email, password } = req.body;
        if (!email) {
            return res.status(400).json({ error: 'Email is required' });
        } else if (!password) {
            return res.status(400).json({ error: 'Password is required' });
        }

        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(400).json({ error: 'Email not found' });
        }

        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return res.status(400).json({ error: 'Invalid password' });
        }

        return res.json({user});
    },

    async register(req, res) {
        const { username, email, password } = req.body;
        if (!username) {
            return res.status(400).json({ error: 'Username is required' });
        } else if (!email) {
            return res.status(400).json({ error: 'Email is required' });
        } else if (!password) {
            return res.status(400).json({ error: 'Password is required' });
        }

        const user = await User.findOne({ where: { email } });
        if (user) {
            return res.status(400).json({ error: 'Email already exists' });
        }
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);

        const newUser = await User.create({ username, email, password: hash });
        return res.json({ newUser });
    }
}