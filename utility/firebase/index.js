const admin = require('firebase-admin');
const config = require('./config');

module.exports.initializeApp = () => {
    admin.initializeApp({
        credential: admin.credential.cert(config),
        databaseURL: process.env.FB_DB_URL
    });
}