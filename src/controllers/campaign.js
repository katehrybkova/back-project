const database = require('../models/database');


module.exports.getAllCampaigns = function (req, res) {
    database
        .getAllCampaigns()
        .then(results => res.send(results))
        .catch((err) => {
            res
                .status(400)
                .json({ err: err.message })
        })


}
module.exports.getCampaign = function (req, res) {
    database
        .getCampaign(req.params.id)
        .then((results) => {
            if (results) {
                res.json(results);
            } else {
                res
                    .status(400)
                    .json({ err: 'User not found' });
            }
        })
        .catch((err) => {
            res
                .status(400)
                .json({ err: err.message });
        })
};


module.exports.addCampaign = function (req, res) {
    database
      .addCampaign(req.body)
      .then((results) => {
        res
          .status(201)
          .json(results);        
      })
      .catch((err) => {
        res
          .status(400)
          .json({err: err.message});
      })
  };
  
