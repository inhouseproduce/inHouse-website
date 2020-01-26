const express = require('express');
const path = require('path');
const app = express();

const logger = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const db = require('./modules');

const PORT = process.env.PORT || 3001;

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
};

// ---- Headers
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: '20mb' }));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );

    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    };

    next();
});

// ---- Mongo connection
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


require('./routes')(app, db); //Route files

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './client/build/index.html'));
});

app.listen(PORT, () => {
    console.log(`🌎 ==> Server now on port ${PORT}!`);
});