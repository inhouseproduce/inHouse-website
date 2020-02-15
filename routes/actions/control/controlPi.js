const axios = require('axios');
const db = require('../../../models');

module.exports = async (req, res) => {
    try {
        // Find Client with id
        let client = await db.Client.findOne({ _id: req.body.id });

        // Make request to client
        let url = `http://${client.uuid}.balena-devices.com/control/`;
        let request = await axios.post(url, req.body);

        res.status(200).json(url);
    }
    catch (error) {
        res.status(300).end();
    };
};