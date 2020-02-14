const express = require('express');
const path = require('path');
const app = express();
const server = require('http').createServer(app);
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const logger = require('morgan');

const PORT = process.env.PORT || 3001;
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
};

// Mongo connection
mongoDB();

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