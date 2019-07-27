const express = require('express');
const routerCampaign = express.Router();
const ctrlCampaign = require('../controllers/campaign');


routerCampaign.get('/',  ctrlCampaign.getAllCampaigns );

routerCampaign.get('/:id', ctrlCampaign.getCampaign);

routerCampaign.post('/', ctrlCampaign.addCampaign);

// routerCampaign.delete('/:id', ctrlCampaign.delCampaign);
// routerCampaign.put('/:id', ctrlCampaign.updateCampaign);



module.exports = routerCampaign; 