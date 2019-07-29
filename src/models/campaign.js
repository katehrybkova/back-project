const mongoose = require("mongoose");

const Schema = mongoose.Schema;

var productSchema = new Schema({  name: String, id: String, weight: Number, calloriesPerWeight: Number });

let campaignSchema = new Schema({
    date: { type: String, default: Date.now, required: true },
    products: [productSchema],
    campaignId: { type:  String, required: true , unique: true},
    userId: { type: String, required: true },
});


const Campaign = mongoose.model('Campaign', campaignSchema);



module.exports = Campaign;
