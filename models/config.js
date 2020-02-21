var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ConfigSchema = new Schema({
    id: {
        type: String
    },
    config: {
        engine: {
            type: Object
        },
        modules: {
            type: Object
        }
    }
});

var Config = mongoose.model("Config", ConfigSchema)
module.exports = Config;