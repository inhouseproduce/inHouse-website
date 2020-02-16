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
        "private_key": '-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCjD4FLFdcbB6q5\nv7vnT30rOw0DfNbDXUlqs14nRGdmp4xe8T+1V3WD7kN8z5wS3UctQHgAaTlUwEGZ\nLT4vPq8A/DrhobGJ8PoURNkpGx8q36ME0/Al++jnj3dBrWhzCZYuPFNvXyAlr+5T\nQXjGcY5+4bKk116t/M3MIZijt/qFgLlQZh/sY9xOcnuN//yyZmBglviRJ1VgmHC1\nz0V+rKAki/KyaQIhhJerBw6OtY7fAKkg/pf05tP1n+oGXLbksQC/ArLwnGW5MmEa\nEaIT7vHmlR43r0Q6r3aXaQBYk2NhxcdRO284fFDRDFYuBierezSFM9CjU3g0bY3w\n1XKsraRRAgMBAAECggEAPEUNXZLvhIKjdG+thNRJKBL1/u2ENgbDjahJq0rpyzQv\nuqICEcWHXqHRGQ9lmUVnuw6irEg4VB6RwIvL+ct6BOu12dMZm6pRzO8bs0lejkrF\n5xFtKKUBU6GgC0sMmcSX2XQbxMUMzVFHTkebXAH6EOTcUnh2eum/qW1bjVwBwZkY\ngf4dvM6usSa+rYg3mPynm+mpHX7PrSTZBkb0BxHkdFFb9ShkEKmB2AUEPnlQuCrk\n1wdSbVZQckRODNaDaV0HniH6Drt5la2oMHZCaP+bp/puUWm+LXZ9CfbPz+f9Zfuy\npxno9cTWF4FWa0jgNgl78hlXT2onSOF+dEGVAF4DZwKBgQDfaukM8HC73aJgmzDT\nK70Lb7FlSqQjmJQ7TaXSM9VTY9P1fEN+OZu6R1L76ksAqrODO1vYL3krAMEdB4Fp\nQc4IWYkQmC6J4GHXUF7nzb5nkJtdczH6yPCCJRXvAu/SLYBlFehE4RBn9XnhPfma\n3JAMHGA0LqT/Q9uKYlxjC71Z2wKBgQC61zhaB7EfatT6ohRYjBtR5uQd2D0lctoY\n/4PtXa9fagNy44fl5Ob2Y2zBZ3qkwy14OXjR7lnye/jf49qmkx6Qmphu7b4IDWOb\nfmUGozt3YCAfiODoVJuE/ouscp0ngus+5MUuKPc0tSxQwYj4V1TcljFtLQ+WVb9y\n07Xc3VdgQwKBgC1jSMkqJ5zi39QEcxzTa+pg3IcZbNMWcjbCBYf4o8P3Kd5bSlLg\nXTSwvLkU1fviseldK8F1k4Ya9yBwn+fESJkFp4TJhdrYzMezOjSZZa8gf4+ykVrD\na6jk49nUnOfz+nuOwcsMdgrIoeQSdRzy5giv0xOGzlpVbMpmRSKSBfu1AoGBAIdo\n/X06P+M+INb4anh2KkKkbMU4d7BRWcFuRaXdFQG4qoE0Z8R0rfL5wdM1dMw+bBDK\nzkaPUP8NXCSfVVMOIsO4VytmACiD06HY68zwtmNg9kcEg8O9teygMogrlLwTBP1S\n/Zjjta2sdE6exO7/FBC+hVnTo41X3eWRjCdi/zVTAoGBAMP2dE53wAT4StHzsugh\nRB0cv/T93ClfL5k1XYF2j01HOywvPYE83wiZe5RX3kaiqVaTPAvonHYQDO3EqQSa\ng+CsAMHzTYsD7Y0ViwUxe4OOmY9ZiKxnzz5raaSRqveXHfHvizgwL01FAg7Xzn/H\nDP3nkFvMEqgNtHi3XXknpWli\n-----END PRIVATE KEY-----\n',
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