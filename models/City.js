var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var CitySchema = new Schema({
    // `city` is required and of type String
    city: {
        type: String,
        required: true
    },
    // `state` is required and of type String
    state: {
        type: String,
        required: false
    }
});

var City = mongoose.model("City", CitySchema);

module.exports = City;
