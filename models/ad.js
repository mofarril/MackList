const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const adSchema = new Schema({
  owner: {type: String, required: true},
  productTitle: { type: String, required: true},
  productImage: {data: Buffer, type: String, required: false},
  productDescription: { type: String, required: true},
  productDepartment: { type: String, required: true},
  productCost: {type:String, required: true},
  locationCity: {type:String, required: true },
  locationState: {type:String, required: true },
  sellerContactName: {type:String, required: true },
  sellerContactPhone: {type:String},
  sellerContactEmail: {type:String, required: true},
});

const Ad = mongoose.model("Ad", adSchema);

module.exports = Ad;

