const path = require("path");
const fs = require("fs");


const createDayReportRoute = (req, res) => {
    const reportData = req.body;
    const { campaignId , date} = reportData;
    const campaignFolderPath = path.join(__dirname, "../../db/campaign");
    const dayReportPath = path.join(campaignFolderPath, campaignId, `${date}.json`);
    
    fs.writeFileSync(dayReportPath, JSON.stringify(reportData))
    res.end(JSON.stringify({status:"created", report:reportData}))
}

const getDayReportRoute = (req, res) => {
    res.end("getDayReportRoute: " + req.params.id)
}


module.exports = { createDayReportRoute, getDayReportRoute }