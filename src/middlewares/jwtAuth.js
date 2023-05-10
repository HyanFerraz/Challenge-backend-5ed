const jwt = require('jsonwebtoken');
const config = require('../config/auth');

module.exports = {
    async verifyToken(req, res, next) {
        const token = req.cookies.authcookie;
        if (!token) {
            return res.status(401).json({ error: 'Access denied' });
        }

        try {
            const verified = jwt.verify(token, config.secret);
            req.user = verified;
            next();
        }
        catch (err) {
            res.status(400).json({ error: 'Invalid token' });
        }
    }
}
