const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ClientSchema = new Schema({
    clientName: {
        type: String
    },

    System: {
        type: String
    },

    schedule: {
        type: Object
    }
});

const Client = mongoose.model("Client", ClientSchema)
module.exports = Client;