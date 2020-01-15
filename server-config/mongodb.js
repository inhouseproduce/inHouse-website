// const mongoose = require('mongoose');
const mongodb = require('mongodb').MongoClient;

module.exports = () => {
    const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/inhouse';

    const mdbConfig = {
        useCreateIndex: true,
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
        promiseLibrary: global.Promise
    };

    mongodb.connect(MONGODB_URI, function(err, db){
        console.log('mongodb connection successful');

        const collection = db.collection('clients');

        // Find some documents
        collection.find({}).toArray(function(err, docs) {
          console.log("Found the following records");
          console.log(docs)
        });
    });
    // mongoose.connect(MONGODB_URI, mdbConfig);
    // let mongoose_connection = mongoose.connection

    // mongoose_connection.once('open', () => {
    //     // console.log('from mongoose -> ' +  mongoose_connection);
    //     console.log(mongoose_connection.models);

    // });
};