const express = require("express");
const axios = require("axios");
const api = require("./api");
const app = express();
const PORT = process.env.PORT || 5050;

app.use(express.static(__dirname + "/all-eat/build"));

app.listen(PORT,() => {
    console.log(`We are listening on ${PORT}`);
});

let mainSite = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=25.8034486,-80.1985425&radius=1500&type=restaurant&key='


app.get(mainSite + api, function(req,res){
    res.json(data);


})
