const admin = require('firebase-admin');
const jwToken = require('jsonwebtoken');

module.exports = async (req, res) => {
    const headerAuth = await req.headers['authorization'];

    if (headerAuth) {
        const token = headerAuth.split('Bearer')[1].trim();
        const auth = await admin.auth().verifyIdToken(token);

        if (auth) {
            let token = await jwToken.sign({ username:'test' },
                process.env.JWT_SECRET, {
                algorithm: process.env.ALGORITHM
            });
            res.status(200).json({ auth: { token } });
        };
    };
};
