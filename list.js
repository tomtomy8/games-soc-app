var express = require('express');
var fs = require("fs");
var app = express();

module.exports = { 
    getUsers: function(req, res) {
        fs.readFile("data/users.json", "utf8", function(err, data){
            if(!err) {
                res.end(data);
            }
        });
    }
}