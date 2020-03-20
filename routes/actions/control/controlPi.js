const axios = require('axios');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const db = require('../../../models');

module.exports = async (req, res) => {
    try {
        // Find Client with id
        let client = await db.Client.findOne({ _id: req.body.id });

        // Make request to client
        let url = `https://${client.uuid}.balena-devices.com/control/`;

        // Token data
        let tokenData = {
            client: client.client,
            uuid: bcrypt.hashSync(client.uuid, 10)
        };

        // Generate token
        let token = await jwt.sign(tokenData,
            process.env.JWT_SECRET, {
            algorithm: process.env.ALGORITHM
        });

        // Make request
        let request = await axios.post(url, req.body, {
            headers: {
                'authorization': `Bearer ${token}`
            }
        });
        
        if (request) {
            res.status(200).json(url);
        }
        else {
            res.status(200).json({ error: 'request failed' });
        };
    }
    catch (error) {
        throw error;
        res.status(300).end();
    };
};