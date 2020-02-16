const admin = require('firebase-admin');

// Verifies Client Session Token 
module.exports = async (req, res, next) => {
    if (req.headers && req.headers.authorization) {
        try {
            const token = await req.headers['authorization'].split('Bearer')[1].trim();
            admin.auth().verifyIdToken(token);
            next();

        } catch (error) {
            res.status(401).end();
        };
    } else {
        res.status(401).end();
    };
};