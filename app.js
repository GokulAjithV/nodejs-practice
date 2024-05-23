const express = require("express");
const app = express();
const compression = require("compression");
const port = 3000;
const api = require("./api");

app.use(express.json()); //parse the incoming client request to JSON format

app.use(express.urlencoded({ extended: true})); //parse the urlencoded requests body

app.use(compression()); //Compress the response body to increase performance

app.use("/api", api); //Register our api folder to receive all client requests

app.listen(port, () => {
    console.log(`API running on http://localhost:${port}`)
});