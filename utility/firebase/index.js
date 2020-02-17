const admin = require('firebase-admin');
const config = require('./config');

module.exports.initializeApp = () => {
    admin.initializeApp({
        credential: admin.credential.cert(config),
        databaseURL: process.env.FB_DB_URL,
        private_key: (process.env.FB_PRIVATE_KEY).replace(/\\n/g, '\n')
    });
};