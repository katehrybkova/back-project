const express = require('express');
const router = express.Router();
const { createCampaignRoute, updateCampaignRoute, getCampaignRoute } = require("./campaign/campaign-routes")
const { createDayReportRoute, getDayReportRoute } = require("./day-report/day-report-routes")


router.get('/', function (req, res) {
    res.send('Hello World!');
});

router.post("/day-report", createDayReportRoute);


router.post("/campaign", createCampaignRoute);
router.put("/campaign/:id", updateCampaignRoute);
router.get("/campaign/:id", getCampaignRoute);


module.exports = router
