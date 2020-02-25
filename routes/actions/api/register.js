const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const db = require('../../../models');

module.exports = async (req, res) => {
    // Token sent in header
    const token = headerToken();

    // Verify and get token data
    let { client, uuid, } = await verifyToken(token);

    // Query mdb client
    let { found, config } = await queryClient(client);

    // Compare db and recived uuid
    bcrypt.compare(found.uuid, uuid, async (err, match) => {
        if (match) {
            let session = await createSession(found, config);
            res.status(200).json({ sessionToken: session });
        }
        else {
            res.status(401).end();
        };
    });

    function headerToken() {
        // Extract headers token
        let header = req.headers.authorization;
        let bearer = header.split('Bearer ')[1].trim();
        return bearer;
    };

    async function queryClient(client) {
        try {
            // Find client profile
            let found = await db.Client.findOne({ name: client });
            // Find client config
            let config = await db.Config.findOne({ id: found._id });
            return { found, config };
        }
        catch (error) { res.status(401).end() }
    };

    async function verifyToken() {
        try {
            // Decode token get data that contains
            let decoded = await jwt.verify(token, process.env.JWT_SECRET);
            return decoded;
        }
        catch (error) { res.status(401).end() }
    };

    async function createSession(found, config) {
        // Create session token with client info
        try {
            return await jwt.sign({
                client: found.name,
                location: found.location,
                config: config
            }, process.env.JWT_SECRET);
        }
        catch (error) { res.status(401).end() }
    };
};