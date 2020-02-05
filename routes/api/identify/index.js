const jwt = require('jsonwebtoken');

module.exports = app => {
    app.get('/client/identify/', (req, res) => {
        let header = req.headers.authorization;
        let bearerToken = header.split('Bearer ')[1].trim();

        jwt.verify(bearerToken, 'secret', async (err, decoded) => {
            if (err) {
                res.status(301).end();
            };

            let sesstion = await jwt.sign({
                exp: Math.floor(Date.now() / 1000) + (60 * 60),
                data: { oldToken: bearerToken }
            }, 'secret');

            res.status(200).json({ sesstion });
        });
    });
};

