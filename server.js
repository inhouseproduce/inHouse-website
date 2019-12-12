const express = require('express');
const path = require('path');
const app = express();
const db = require('./modules');

const PORT = process.env.PORT || 3001;

const mongoConnection = require('./server-config/mongodb');
const setHeader = require('./server-config/header');

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
};

// Mongo connection
mongoConnection();

// Use header
setHeader(app);

//Routes
require('./routes')(app, db);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './client/build/index.html'));
});

app.listen(PORT, () => {
    console.log(`🌎 ==> Server now on port ${PORT}!`);
});