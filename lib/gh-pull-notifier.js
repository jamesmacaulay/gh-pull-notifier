(function() {
  var express, util, web;
  util = require('util');
  express = require('express');
  web = express.createServer();
  web.get('/', function(req, res) {
    return res.send("ok");
  });
  web.post('/ping', function(req, res) {
    return res.send("ok");
  });
  web.listen(3000);
}).call(this);
