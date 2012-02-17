(function() {
  var GitHub, express, gh, hookPath, hookUrl, host, port, repo, repoName, repoUser, web;
  host = process.env.HOST || 'ghpn.herokuapp.com';
  hookPath = '/ping';
  hookUrl = "http://" + host + hookPath;
  express = require('express');
  web = express.createServer();
  web.use(express.bodyParser());
  web.get('/', function(req, res) {
    return res.send("ok");
  });
  web.post(hookPath, function(req, res) {
    console.log(req.body);
    return res.send("ok");
  });
  port = process.env.PORT || 3000;
  GitHub = require('./github').GitHub;
  gh = new GitHub({
    user: process.env.GITHUB_USER,
    password: process.env.GITHUB_PASSWORD
  });
  repoUser = process.env.REPO_USER || 'jamesmacaulay';
  repoName = process.env.REPO_NAME || 'notifier_test';
  repo = new GitHub.Repo(gh, repoUser, repoName);
  repo.getHooks().on('complete', function(hooks) {
    var existingId, hook, _i, _len, _ref, _results;
    existingId = null;
    _results = [];
    for (_i = 0, _len = hooks.length; _i < _len; _i++) {
      hook = hooks[_i];
      _results.push(((_ref = hook.config) != null ? _ref.url : void 0) === hookUrl ? existingId = hook.id : void 0);
    }
    return _results;
  });
}).call(this);
