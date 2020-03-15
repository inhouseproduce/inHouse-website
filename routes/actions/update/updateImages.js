const axios = require('axios');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const db = require('../../../models');

module.exports = async (req, res) => {
    // Find Client with id
    let client = await db.Client.findOne({ _id: req.params.id });

    // Make request to client
    let url = `https://${client.uuid}.balena-devices.com/image/update/`;

    let tokenData = {
        client: client.client,
        uuid: bcrypt.hashSync(client.uuid, 10)
    };

    // Generate token
    let token = await jwt.sign(tokenData,
        process.env.JWT_SECRET, {
        algorithm: process.env.ALGORITHM
    });


    await axios.get(url, {
        headers: {
            'authorization': `Bearer ${token}`
        }
    });

    res.end();
};