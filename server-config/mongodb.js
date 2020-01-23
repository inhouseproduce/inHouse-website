const mongoose = require('mongoose');

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/inhouse';

const mdbConfig = {
useCreateIndex: true,
useNewUrlParser: true,
useFindAndModify: false,
useUnifiedTopology: true,
promiseLibrary: global.Promise
};

mongoose.connect(MONGODB_URI, mdbConfig, function(err) {
    if (err) throw err;
});
let mongoose_connection = mongoose.connection;

mongoose_connection.once('open', () => {
    console.log("connected to mongodb");
});

module.exports = mongoose_connection;

