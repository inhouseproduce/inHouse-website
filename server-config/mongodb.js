// const mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;
const util = require('util');
module.exports = () => {
    const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/inhouse';

    MongoClient.connect(MONGODB_URI, (err, db) => {  
        if (err) {
          return console.log(err);
        }
        console.log("Succesful YAY");
        console.log(db.collection('clients'));
      
        // Do something with db here, like inserting a record

      });



    // const mdbConfig = {
    //     useCreateIndex: true,
    //     useNewUrlParser: true,
    //     useFindAndModify: false,
    //     useUnifiedTopology: true,
    //     promiseLibrary: global.Promise
    // };

    // const client = new MongoClient(MONGODB_URI, {useNewUrlParser: true});

    // // Use connect method to connect to the server
    // client.connect(function(err) {
    //   console.log("Connected successfully to server");
    
    //   const db = client.db('collections');
    //   const collection = db.collection('client');

    //   collection.find({}).toArray(function(err, docs) {
    //     console.log("Found the following records");
    //     console.log(docs)
    //   });    
    // });

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