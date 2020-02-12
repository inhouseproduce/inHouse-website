const jwt = require('jsonwebtoken');
const db = require('../../../models');

module.exports = async (req, res) => {
    let header = req.headers.authorization;
    let bearer = header.split('Bearer ')[1].trim();

    // Decode token get data that contains
    let decoded = await jwt.verify(bearer, 'secret');

    // Save client info, return updated document
    let client = await db.Client.findOneAndUpdate({
        name: decoded.client
    }, {
        ip: decoded.ip
    }, { new: true });

    // Create session token with client info
    let sessionToken = await jwt.sign({
        client: client.name,
        location: client.location,
        config: client.config
    }, 'secret');

    // Send back data
    res.status(200).json({ sessionToken });
};