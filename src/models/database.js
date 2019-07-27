const Campaigns = require('./campaign');


module.exports.getAllCampaigns = () => Campaigns.find();
module.exports.getCampaign = (paramsId) => Campaigns.findById({"_id": paramsId});
module.exports.addCampaign = function (data) {
    let Campaign = new Campaigns({
        date: data.date,
        products: data.products,
        campaignId: data.campaignId,
        userId: data.userId,
    });
    return Campaign.save();
  };