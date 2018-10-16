
const express = require("express");
const axios = require("axios");

const app = express();


app.use(express.static(__dirname + "/all-eat/build"));


// let mainSite = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=25.8034486,-80.1985425&radius=1500&type=restaurant&key='

app.get('/', (req, res) => {
    let data = "hello"
    res.send(data)
})

app.get('/foo/:zip', async (req,res) => {
    try {
        let {data} = await axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${req.params.zip}&radius=1500&type=restaurant&key=AIzaSyB_5EooJEuIoJmI67rOJkakoz1GOkVfA_Q`)
        res.json(data);
        console.log("IT WORKED")
    } catch(error) {
        res.json(error)
    }
})

const PORT = process.env.PORT || 5050;
app.listen(PORT,() => {
    console.log(`We are listening on port 5050`);
});
