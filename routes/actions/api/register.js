const jwt = require('jsonwebtoken');
const db = require('../../../models');

module.exports = async (req, res) => {
    let header = req.headers.authorization;
    let bearer = header.split('Bearer ')[1].trim();

    try {
        // Decode token get data that contains
        let decoded = await jwt.verify(bearer, 'secret');

        if (decoded.client) {
            // Save client info, return updated document
            let client = await db.Client.findOneAndUpdate({
                name: decoded.client
            }, {
                uuid: decoded.uuid,
                appId: decoded.appId
            }, {
                new: true
            });

            if (client) {
                // Create session token with client info
                let sessionToken = await jwt.sign({
                    client: client.name,
                    location: client.location,
                    config: client.config
                }, 'secret');

                // Send back data
                res.status(200).json({ sessionToken });
            }
        }
    } catch (error) {
        res.status(401).json({ error: 'Authentication failed' });
    };
};