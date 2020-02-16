const express = require('express');
const path = require('path');
const app = express();
const server = require('http').createServer(app);
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const logger = require('morgan');
const admin = require('firebase-admin');

// Development environmental variables
if (process.env.DEV_MODE) {
    require('dotenv').config()
};

const PORT = process.env.PORT || 3001;
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
};

// Mongo connection
mongoDB();

// Init firebase app
firebaseSDK(admin);

// Parse body
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: '2mb' }));

// Headers
headers(app)

require('./routes')(app);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './client/build/index.html'));
});

server.listen(PORT, () => {
    console.log(`🌎 ==> Server now on port ${PORT}!`);
});

function headers(app) {
    app.use((req, res, next) => {
        // Headers
        res.header('Access-Control-Allow-Origin', '*');
        res.header(
            'Access-Control-Allow-Headers',
            'Origin, X-Requested-With, Content-Type, Accept, Authorization'
        );

        // Header options
        if (req.method === 'OPTIONS') {
            res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
            return res.status(200).json({});
        };
        next();
    });
};

function mongoDB() {
    const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/inhouse';
    mongoose.set('useCreateIndex', true);

    const mdbConfig = {
        useNewUrlParser: true,
        useFindAndModify: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    };

    mongoose.connect(MONGODB_URI, mdbConfig);
    mongoose.connection.once('open', () => {
        console.log('mongoose connection successful');
    });
};

function firebaseSDK(admin) {
    const devConfig = {
        "type": "service_account",
        "project_id": process.env.FB_PROJECT_ID,
        "private_key_id": process.env.FB_PRIVATE_KEY_ID,
        "private_key": JSON.stringify(process.env.FB_PRIVATE_KEY),
        "client_email": process.env.FB_CLIENT_EMAIL,
        "client_id": process.env.FB_CLIENT_ID,
        "auth_uri": process.env.FB_AUTH_URI,
        "token_uri": process.env.FB_TOKEN_URI,
        "auth_provider_x509_cert_url": process.env.FB_PROVIDER_X509_CERT_URL,
        "client_x509_cert_url": process.env.FB_CLIENT_X509_CERT_URL
    }

    admin.initializeApp({
        credential: admin.credential.cert(devConfig),
        databaseURL: process.env.FB_DB_URL
    });
};