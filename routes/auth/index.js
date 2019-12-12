const jwToken = require('jsonwebtoken');
const encrypt = require('password-hash');

module.exports = (app, db) => {
    app.post('/authentication/', async (req, res) => {
        let { username, password } = req.body.form;
        
        // hashed as process.env
        const hashed = 'sha1$33202872$1$3a1f7ae607743d9235ede4fd1815841173497d3e';

        const match = encrypt.verify(password, hashed)
        if (match) {
            let token = await generateToken(username);

            res.status(200).json({ auth: true, token });

        } else {
            res.redirect(401, '/');
        }
    });

    const generateToken = async username => {
        // need secret key as process.env
        return await jwToken.sign({ username }, 'secretkey', { algorithm: 'HS256' });
    };
};

