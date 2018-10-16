
const express = require("express");
const axios = require("axios");
const api = require("./api");
const app = express();
// const PORT = process.env.PORT || 5050;

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


app.get('/movies/:id', async (req, res) => {
	try {
		let {data} = await axios.get(`http://swapi.co/api/films/${req.params.id}`);
		res.json(data);
	} catch(e) {
		res.json({'Error': 'Error'});
	}
})

app.listen(5050,() => {
    console.log(`We are listening on port 5000`);
});
