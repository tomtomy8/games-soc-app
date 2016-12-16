var express = require('express');
var app = express();
var list = require("./list");

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

app.get('/list', function(request, response) {
  list.getUsers(request, response);
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});