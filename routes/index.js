const axios = require('axios');

module.exports = (app, db) => {
    app.post('/test/', async (req, res) => {
        console.log('body', req.body)
        // try {
        //     let test = await axios.post('http://192.168.0.111:3000', req.body);
        //     res.end();
        // } catch (error) {
        //     res.status(500).end();
        //     throw error;
        // }
    });
};