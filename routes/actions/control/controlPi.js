const axios = require('axios');
const db = require('../../../models');

module.exports = async (req, res) => {
    try {
        // Find Client with id
        let client = await db.Client.findOne({ _id: req.body.id });

        // Make request to client
        let request = await axios.post(`http://${client.ip}:${process.env.PORT || 3000}/control/`, req.body);

        res.status(200).json();
    }
    catch (error) {
        throw error;
    };
};