(function() {
  var express, port, util, web;
  util = require('util');
  express = require('express');
  web = express.createServer();
  web.use(express.bodyParser());
  web.get('/', function(req, res) {
    return res.send("ok");
  });
  web.post('/ping', function(req, res) {
    console.log(req.body);
    return res.send("ok");
  });
  port = process.env.PORT || 3000;
  web.listen(port, function() {
    return console.log("Listening on port " + port);
  });
}).call(this);
