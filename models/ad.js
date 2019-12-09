const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const adSchema = new Schema({
  productTitle: { type: String, required: true},
  productImage: { type: String, required: true},
  productDescription: { type: String, required: true},
  productCost: {type:[String], required: true},
  locationCity: {type:String, required: true },
  locationState: {type:String, required: true },
  sellerContactName: {type:String, required: true },
  sellerContactPhone: {type:String, required: true},
  sellerContactEmail: {type:String, required: true},
  sellerPreferedContact: {type:String, required: true}
});

const Ad = mongoose.model("Ad", adSchema);

module.exports = Ad;
