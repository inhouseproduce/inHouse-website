var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var LogsSchema = new Schema({
    logs: [{
        type: Object
    }],

    images: [{
        name: {
            type: String
        },
        image: {
            type: String,
        },
        createdAt: {
            type: Date
        }
    }]
});

var Logs = mongoose.model("Logs", LogsSchema)
module.exports = Logs;