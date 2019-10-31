
const express = require('express');
const request = require('request');
const fs = require('fs');

var app = express();


app.get("/", (req, res) => {
    res.send("Hello Docker!!! - Vijay.");
});

app.get("/index", (req, res) => {
    fs.readFile("index.html", function(err, data) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
    });
});

app.listen(8080, '0.0.0.0');