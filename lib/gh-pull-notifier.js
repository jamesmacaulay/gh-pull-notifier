(function() {
  var GitHub, express, gh, hookCatcher, util;
  util = require('util');
  express = require('express');
  GitHub = require('./github').GitHub;
  gh = new GitHub({
    user: process.env.GITHUB_USER,
    password: process.env.GITHUB_PASSWORD
  });
  hookCatcher = express.createServer();
  hookCatcher.post('/ping', function(req, res) {
    return res.send("ok");
  });
  hookCatcher.listen(3000);
}).call(this);
