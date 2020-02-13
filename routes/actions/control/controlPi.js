const axios = require('axios');
const db = require('../../../models');

module.exports = async (req, res) => {
    try {
        // Find Client with id
        //let client = await db.Client.findOne({ _id: req.body.id });

        // Make request to client
        // let url = `http://${client.ip}:${(process.env.PORT || 80)}/control/`;
        // let request = await axios.post(url, req.body);
        console.log('checking', req.body);
        
        res.status(200).json(url);
    }
    catch (error) {
        throw error;
    };
};