const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const adSchema = new Schema({
  title: { type: String, required: true},
  owner: { type: String, required: true},
  description: { type: String, required: true},
  image: {type:[String], required: true},
  city: {type:String, required: true },
  state: {type:String, required: true },
  cost: {type:String, required: true },
  phone: {type:String},
  email: {type:String},
});

const Ad = mongoose.model("Ad", adSchema);

module.exports = Ad;
