const db = require('../../../models');
const axios = require('axios');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = async (req, res) => {
    const id = req.params.id;
    const config = req.body.config;

    let client = await db.Client.findOne({ _id: id });

    updateConfig(id, config, () => {
        updateClient(client);
    });

    res.status(200).end();
};

async function updateClient(client) {
    // Make request to client
    const url = `https://${client.uuid}.balena-devices.com/update/config/`;

    let token = signToken(client);

    await axios.get(url, {
        headers: {
            'authorization': `Bearer ${token}`
        }
    });
};

async function updateConfig(id, config, callback) {
    try {
        if (callback) callback();
        return await db.Config.findOneAndUpdate({ id }, { config });
    }
    catch (err) {
        if (callback) callback(err);
        return false;
    };
};

async function signToken(client) {
    let tokenData = {
        client: client.client,
        uuid: bcrypt.hashSync(client.uuid, 10)
    };

    // Generate token
    return await jwt.sign(tokenData,
        process.env.JWT_SECRET, {
        algorithm: process.env.ALGORITHM
    });
};
