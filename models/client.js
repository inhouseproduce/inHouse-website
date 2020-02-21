var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ClientSchema = new Schema({
    name: {
        type: String,
    },

    location: {
        type: String
    },

    phone: {
        type: String
    },

    uuid: {
        type: String
    },

    image: {
        type: String
    },
});

var Client = mongoose.model("Client", ClientSchema)
module.exports = Client;