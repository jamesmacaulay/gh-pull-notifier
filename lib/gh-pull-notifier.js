(function() {
  var GitHub, Jabber, express, gh, hookPath, hookUrl, host, jabber, port, repo, repoName, repoUser, web;
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
  web.listen(port, function() {
    return console.log("Listening on port " + port);
  });
  GitHub = require('./github').GitHub;
  gh = new GitHub({
    user: process.env.GITHUB_USER,
    password: process.env.GITHUB_PASSWORD
  });
  repoUser = process.env.REPO_USER || 'jamesmacaulay';
  repoName = process.env.REPO_NAME || 'notifier_test';
  repo = new GitHub.Repo(gh, repoUser, repoName);
  repo.getHooks().on('success', function(hooks) {
    var existingHook, hook, newHook, _i, _len, _ref;
    existingHook = null;
    for (_i = 0, _len = hooks.length; _i < _len; _i++) {
      hook = hooks[_i];
      if (((_ref = hook.config) != null ? _ref.url : void 0) === hookUrl) {
        existingHook = hook;
      }
    }
    if (existingHook) {
      return console.log(JSON.stringify(existingHook));
    } else {
      newHook = {
        name: 'web',
        active: true,
        events: ['issues', 'issue_comment', 'commit_comment', 'pull_request'],
        config: {
          url: hookUrl
        }
      };
      return repo.createHook(newHook).on('success', function(hook) {
        return console.log(JSON.stringify(hook));
      });
    }
  });
  Jabber = require('./jabber').Jabber;
  jabber = new Jabber({
    user: process.env.GTALK_USER,
    password: process.env.GTALK_PASSWORD
  });
}).call(this);
