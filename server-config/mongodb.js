const mongoose = require('mongoose');
const util = require('util')


module.exports = () => {
    const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/inhouse';

    const mdbConfig = {
        useCreateIndex: true,
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
        promiseLibrary: global.Promise
    };

    mongoose.connect(MONGODB_URI, mdbConfig);
    let mongoose_connection = mongoose.connection

    mongoose_connection.once('open', () => {
        console.log('mongoose connection successful');
        // console.log('from mongoose -> ' +  mongoose_connection);
        console.log(util.inspect(mongoose_connection, {showHidden: false, depth: null}))

    });
};