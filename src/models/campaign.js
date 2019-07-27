const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let campaignSchema = new Schema({
    date: { type: Date, default: Date.now, required: true },
    products: [{ name: String, id: String, weight: Number, calloriesPerWeight: Number }],
    campaignId: { type:  String, required: true , unique: true},
    userId: { type: String, required: true },
});


const Campaign = mongoose.model('Campaign', campaignSchema);



module.exports = Campaign;
