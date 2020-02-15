const axios = require('axios');
const bcrypt = require('bcrypt');

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
        let token = await jwt.sign(tokenData, 'secret', {
            algorithm: 'HS256'
        });

        // Make request
        let request = await axios.post(url, req.body, {
            headers: {
                'authorization': `Bearer ${token}`
            },
        });

        res.status(200).json(url);
    }
    catch (error) {
        res.status(300).end();
    };
};