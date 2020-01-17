const mongoose = require('mongoose');

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

    // mongoose_connection.once('open', () => {
    //     console.log("connected to mongodb");
    // });





    // const Schema = mongoose.Schema;

    // const MessagingSchema = new Schema({
       
    // });
    
    // const Messenger = mongoose.model("messaging", MessagingSchema, "messaging");



    mongoose_connection.once('open', () => {
        console.log("here in mongoose connection!");
        // Messenger.find({}, function (err, client_list) 
        // {
   
        //         const client_data = JSON.parse(JSON.stringify(client_list[0]));
        //         client_data.clients.forEach(person => 
        //             {
        //             console.log( person.schedule_daily_checkups);
        //         });
         

        //   });

    });

    module.exports = mongoose_connection;

};