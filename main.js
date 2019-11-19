var express = require('express');
var app = express();



app.use("/", express.static(__dirname + '/data'));

app.get('/', function (req, res) {
  
  res.send(`<!doctype html>
  <html>
  <head>
    <title>OWDB</title>
    <meta charset="utf-8"> 
    <link rel="stylesheet" type="text/css" href="/style.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/cytoscape/3.10.2/cytoscape.esm.js"></script>   
  </head>
  <body>
    <h1>asdfzxc</h1>
    <div id="cy"></div>
    <script type="text/javascript" src="/code.js"></script>
  </body>
  </html>`);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});