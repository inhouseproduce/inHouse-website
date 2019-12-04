const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ConfigSchema = new Schema({
    name: {
        type: String
    },
    config: {
        type: Object
    }
});

const Config = mongoose.model("Config", ConfigSchema)
module.exports = Config;