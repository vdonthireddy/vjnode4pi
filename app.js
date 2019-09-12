
const express = require('express');
const request = require('request');
var app = express();


app.get("/", (req, res) => {
    res.send("Hello Docker!!! - Vijay\n");
});

app.listen(8080, '0.0.0.0');