// Development environmental variables
if (!process.env.DEV_MODE) {
    require('dotenv').config()
};

// Libas
const express = require('express');
const path = require('path');
const app = express();
const server = require('http').createServer(app);
const bodyParser = require('body-parser');
const logger = require('morgan');

// Utils
// const mongodb = require('./utility/mongodb');
// const firebase = require('./utility/firebase');
// const routes = require('./routes');

// Use static
const PORT = process.env.PORT || 3001;
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
};

// Mongo connection
//mongodb.initializeDB();

// Init firebase app
//firebase.initializeApp();

// Parse body
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: '2mb' }));

// Headers
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

// Initialize Routes
//routes.initializeRoutes(app);

// Get Built index html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './client/build/index.html'));
});

// Listen Server
server.listen(PORT, () => {
    console.log(`🌎 ==> Server now on port ${PORT}!`);
});