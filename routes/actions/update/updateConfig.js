const db = require('../../../models');
const axios = require('axios');

module.exports = async (req, res) => {
    let client = await db.Client.findOne({ _id: req.params.id });

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