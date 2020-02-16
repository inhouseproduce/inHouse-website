const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const db = require('../../../models');

module.exports = async (req, res) => {
    // Gether process envs
    const JWT_SECRET = process.env.JWT_SECRET;

    // Extract headers
    let header = req.headers.authorization;
    let bearer = header.split('Bearer ')[1].trim();

    try {
        // Decode token get data that contains
        let decoded = await jwt.verify(bearer, JWT_SECRET);
        let { client, uuid, } = decoded;

        if (client && uuid) {
            // Find client by name
            let found = await db.Client.findOne({ name: client });

            // Compare db and recived uuid
            bcrypt.compare(found.uuid, uuid, async (err, match) => {
                if (match) {
                    // Create session token with client info
                    let sessionToken = await jwt.sign({
                        client: found.name,
                        location: found.location,
                        config: found.config
                    }, JWT_SECRET);

                    // Send back data
                    res.status(200).json({ sessionToken });
                }
            });
        }
    } catch (error) {
        res.status(401).end();
    };
};