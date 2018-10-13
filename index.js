const express = require("express");
const axios = require("axios");

const app = express();

const PORT = process.env.PORT || 5050;

app.use(express.static(__dirname + "/all-eat/build"));
