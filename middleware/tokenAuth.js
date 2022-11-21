const { verifyToken } = require('../jwt/auth');

const tokenValidation = (req, res, next) => {
    const { authorization } = req.headers;

    if (!authorization) {
        res.status(401).json({ message: 'Token not found' });
    }

    try {
        verifyToken(authorization);
        next();
    } catch (error) { 
        return res.status(401).json({ message: error });
    }
};

module.exports = { tokenValidation };
