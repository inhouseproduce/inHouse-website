// const mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;
const util = require('util');
module.exports = () => {
    const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/inhouse';

    // const mdbConfig = {
    //     useCreateIndex: true,
    //     useNewUrlParser: true,
    //     useFindAndModify: false,
    //     useUnifiedTopology: true,
    //     promiseLibrary: global.Promise
    // };


    // Use connect method to connect to the server
    MongoClient.connect(function(err, client) {
      console.log("Connected successfully to server");
    
      const db = client.db('webapp-inhouse');
      const collection = db.collection('clients');

      console.log("Here's a collection: "+ collection);
    });

    // mongodb.connect(MONGODB_URI, function(err, db){
    //     console.log('mongodb connection successful');

    //     const collection = db.collection('clients');

    //     // Find some documents
    //     collection.find({}).toArray(function(err, docs) {
    //       console.log("Found the following records");
    //       console.log(docs)
    //     });
    // });
    // mongoose.connect(MONGODB_URI, mdbConfig);
    // let mongoose_connection = mongoose.connection

    // mongoose_connection.once('open', () => {
    //     // console.log('from mongoose -> ' +  mongoose_connection);
    //     console.log(mongoose_connection.models);

    // });
};