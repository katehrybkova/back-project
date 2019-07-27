// const router= require("./src/router/router");
const bodyParser = require('body-parser');
const express = require('express');
const routerCampaigns = require('./src/routes/campaigns');
const mongoose = require('mongoose');


mongoose.Promise = global.Promise;
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.connect('mongodb+srv://Katerin:rfnz067@cluster0-vtmj5.gcp.mongodb.net/test?retryWrites=true');

const app = express();
//-----------
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});
//-----------------
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use('/campaigns', routerCampaigns);


app.use((err, req, res, next)=>{
  res.end("error: " + err)
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});



