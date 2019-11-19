var express = require('express');
var app = express();
var db = require('./lib/db');

app.get('/', function (req, res) {
  db.query(`SELECT * FROM ring`,function(err,stations){
    if(err){
      throw err;
    }
    res.send(stations);
  })

  //res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});