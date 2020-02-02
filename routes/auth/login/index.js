const jwToken = require('jsonwebtoken');
const encrypt = require('password-hash');

module.exports = app => {
    app.post('/auth/', async (req, res) => {
        let body = req.body.form;
        let { username, password } = body;

        if (username && password) {
            const hashed = 'sha1$33202872$1$3a1f7ae607743d9235ede4fd1815841173497d3e';
            const match = encrypt.verify(password, hashed);

            if (match) {
                let token = await jwToken.sign({ username }, 'secretkey', { algorithm: 'HS256' });
                res.status(200).json({ auth: true, token });
            }
            else {
                res.redirect(401, '/');
            }
            res.status(200).json({ auth: true });
        };
    });
};