(function() {
  var GitHub, RepoMonitor, gh, pullRequestHook, rest, testRepo, util;
  var __indexOf = Array.prototype.indexOf || function(item) {
    for (var i = 0, l = this.length; i < l; i++) {
      if (this[i] === item) return i;
    }
    return -1;
  };
  util = require('util');
  rest = require('restler');
  pullRequestHook = {
    "payload": "{\"number\":3,\"repository\":{\"name\":\"notifier_test\",\"created_at\":\"2012-02-16T21:15:48Z\",\"updated_at\":\"2012-02-16T22:08:48Z\",\"url\":\"https://api.github.com/repos/jamesmacaulay/notifier_test\",\"id\":3464067,\"pushed_at\":\"2012-02-16T22:08:48Z\",\"owner\":{\"avatar_url\":\"https://secure.gravatar.com/avatar/7bf3b0eb4c1383589c9b5c6b1c672b31?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png\",\"gravatar_id\":\"7bf3b0eb4c1383589c9b5c6b1c672b31\",\"url\":\"https://api.github.com/users/jamesmacaulay\",\"id\":340,\"login\":\"jamesmacaulay\"}},\"pull_request\":{\"number\":3,\"head\":{\"repo\":{\"master_branch\":null,\"name\":\"notifier_test\",\"has_wiki\":true,\"created_at\":\"2012-02-16T21:15:48Z\",\"size\":84,\"clone_url\":\"https://github.com/jamesmacaulay/notifier_test.git\",\"watchers\":2,\"private\":false,\"updated_at\":\"2012-02-16T22:08:48Z\",\"url\":\"https://api.github.com/repos/jamesmacaulay/notifier_test\",\"git_url\":\"git://github.com/jamesmacaulay/notifier_test.git\",\"language\":null,\"ssh_url\":\"git@github.com:jamesmacaulay/notifier_test.git\",\"fork\":false,\"pushed_at\":\"2012-02-16T22:08:48Z\",\"svn_url\":\"https://github.com/jamesmacaulay/notifier_test\",\"id\":3464067,\"mirror_url\":null,\"open_issues\":3,\"has_downloads\":true,\"has_issues\":true,\"homepage\":\"\",\"forks\":2,\"description\":\"\",\"html_url\":\"https://github.com/jamesmacaulay/notifier_test\",\"owner\":{\"avatar_url\":\"https://secure.gravatar.com/avatar/7bf3b0eb4c1383589c9b5c6b1c672b31?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png\",\"gravatar_id\":\"7bf3b0eb4c1383589c9b5c6b1c672b31\",\"url\":\"https://api.github.com/users/jamesmacaulay\",\"id\":340,\"login\":\"jamesmacaulay\"}},\"label\":\"jamesmacaulay:foo\",\"sha\":\"718cd0743810e06806579783ef574447400838d7\",\"ref\":\"foo\",\"user\":{\"avatar_url\":\"https://secure.gravatar.com/avatar/7bf3b0eb4c1383589c9b5c6b1c672b31?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png\",\"gravatar_id\":\"7bf3b0eb4c1383589c9b5c6b1c672b31\",\"url\":\"https://api.github.com/users/jamesmacaulay\",\"id\":340,\"login\":\"jamesmacaulay\"}},\"issue_url\":\"https://github.com/jamesmacaulay/notifier_test/issues/3\",\"created_at\":\"2012-02-16T22:09:13Z\",\"merged\":false,\"merged_by\":null,\"changed_files\":1,\"title\":\"foo\",\"body\":\"this is a pull request\",\"comments\":0,\"additions\":0,\"updated_at\":\"2012-02-16T22:09:13Z\",\"diff_url\":\"https://github.com/jamesmacaulay/notifier_test/pull/3.diff\",\"url\":\"https://api.github.com/repos/jamesmacaulay/notifier_test/pulls/3\",\"_links\":{\"html\":{\"href\":\"https://github.com/jamesmacaulay/notifier_test/pull/3\"},\"self\":{\"href\":\"https://api.github.com/repos/jamesmacaulay/notifier_test/pulls/3\"},\"comments\":{\"href\":\"https://api.github.com/repos/jamesmacaulay/notifier_test/issues/3/comments\"},\"review_comments\":{\"href\":\"https://api.github.com/repos/jamesmacaulay/notifier_test/pulls/3/comments\"}},\"id\":842091,\"patch_url\":\"https://github.com/jamesmacaulay/notifier_test/pull/3.patch\",\"mergeable\":true,\"closed_at\":null,\"merged_at\":null,\"commits\":1,\"review_comments\":0,\"deletions\":0,\"html_url\":\"https://github.com/jamesmacaulay/notifier_test/pull/3\",\"user\":{\"avatar_url\":\"https://secure.gravatar.com/avatar/7bf3b0eb4c1383589c9b5c6b1c672b31?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png\",\"gravatar_id\":\"7bf3b0eb4c1383589c9b5c6b1c672b31\",\"url\":\"https://api.github.com/users/jamesmacaulay\",\"id\":340,\"login\":\"jamesmacaulay\"},\"base\":{\"repo\":{\"master_branch\":null,\"name\":\"notifier_test\",\"has_wiki\":true,\"created_at\":\"2012-02-16T21:15:48Z\",\"size\":84,\"clone_url\":\"https://github.com/jamesmacaulay/notifier_test.git\",\"watchers\":2,\"private\":false,\"updated_at\":\"2012-02-16T22:08:48Z\",\"url\":\"https://api.github.com/repos/jamesmacaulay/notifier_test\",\"git_url\":\"git://github.com/jamesmacaulay/notifier_test.git\",\"language\":null,\"ssh_url\":\"git@github.com:jamesmacaulay/notifier_test.git\",\"fork\":false,\"pushed_at\":\"2012-02-16T22:08:48Z\",\"svn_url\":\"https://github.com/jamesmacaulay/notifier_test\",\"id\":3464067,\"mirror_url\":null,\"open_issues\":3,\"has_downloads\":true,\"has_issues\":true,\"homepage\":\"\",\"forks\":2,\"description\":\"\",\"html_url\":\"https://github.com/jamesmacaulay/notifier_test\",\"owner\":{\"avatar_url\":\"https://secure.gravatar.com/avatar/7bf3b0eb4c1383589c9b5c6b1c672b31?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png\",\"gravatar_id\":\"7bf3b0eb4c1383589c9b5c6b1c672b31\",\"url\":\"https://api.github.com/users/jamesmacaulay\",\"id\":340,\"login\":\"jamesmacaulay\"}},\"label\":\"jamesmacaulay:master\",\"sha\":\"39bc4d0f283deb3fbb02650e4cd97a7904cc8886\",\"ref\":\"master\",\"user\":{\"avatar_url\":\"https://secure.gravatar.com/avatar/7bf3b0eb4c1383589c9b5c6b1c672b31?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png\",\"gravatar_id\":\"7bf3b0eb4c1383589c9b5c6b1c672b31\",\"url\":\"https://api.github.com/users/jamesmacaulay\",\"id\":340,\"login\":\"jamesmacaulay\"}},\"state\":\"open\"},\"sender\":{\"avatar_url\":\"https://secure.gravatar.com/avatar/7bf3b0eb4c1383589c9b5c6b1c672b31?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png\",\"gravatar_id\":\"7bf3b0eb4c1383589c9b5c6b1c672b31\",\"url\":\"https://api.github.com/users/jamesmacaulay\",\"id\":340,\"login\":\"jamesmacaulay\"},\"action\":\"opened\"}"
  };
  GitHub = (function() {
    GitHub.Repo = (function() {
      function Repo(github, user, repo) {
        this.github = github;
        this.user = user;
        this.repo = repo;
      }
      Repo.prototype.getIssueEvents = function() {
        return this.github.get("repos/" + this.user + "/" + this.repo + "/issues/events");
      };
      Repo.prototype.getIssueComments = function(issueId) {
        return this.github.get("repos/" + this.user + "/" + this.repo + "/issues/" + issueId + "/comments");
      };
      return Repo;
    })();
    function GitHub(opts) {
      if (opts == null) {
        opts = {};
      }
      this.user = opts.user;
      this.password = opts.password;
    }
    GitHub.prototype.repo = function(user, repo) {
      return new GitHub.Repo(this, user, repo);
    };
    GitHub.prototype.get = function(path) {
      return rest.get(this.requestUrl(path), this.requestOptions());
    };
    GitHub.prototype.requestOptions = function() {
      return {
        username: this.user,
        password: this.password
      };
    };
    GitHub.prototype.requestUrl = function(path) {
      path = path.replace(/^\//, '');
      return "https://api.github.com/" + path;
    };
    return GitHub;
  })();
  RepoMonitor = (function() {
    function RepoMonitor(repo) {
      this.repo = repo;
    }
    RepoMonitor.prototype.start = function() {
      return this.repo.getIssueComments;
    };
    RepoMonitor.prototype.fetchRecipientsForEvent = function(event, callback) {
      var recipients;
      return recipients = this.recipientsForEvent(event);
    };
    RepoMonitor.prototype.recipientsForHook = function(hook) {
      var payload;
      return payload = JSON.parse(hook.payload);
    };
    RepoMonitor.prototype.recipientsForEvent = function(event) {
      var desc, issueCreator, recipients, username, _i, _len, _ref, _ref2, _ref3, _ref4;
      recipients = [];
      issueCreator = event != null ? (_ref = event.issue) != null ? (_ref2 = _ref.user) != null ? _ref2.login : void 0 : void 0 : void 0;
      if (issueCreator) {
        recipients.push(issueCreator);
      }
      if (desc = event != null ? (_ref3 = event.issue) != null ? _ref3.body : void 0 : void 0) {
        _ref4 = this.mentionsFromText(desc);
        for (_i = 0, _len = _ref4.length; _i < _len; _i++) {
          username = _ref4[_i];
          if (__indexOf.call(recipients, username) < 0) {
            recipients.push(username);
          }
        }
      }
      return recipients;
    };
    RepoMonitor.prototype.recipientsForIssueComment = function(comment) {
      var recipients;
      return recipients = [];
    };
    RepoMonitor.prototype.mentionsFromText = function(text) {
      var mentions, re, result, username;
      mentions = [];
      re = /(?:\s|^)\@\w+\b/gm;
      while (result = re.exec(text)) {
        username = result[0].replace(/^\W*/, '');
        if (__indexOf.call(mentions, username) < 0) {
          mentions.push(username);
        }
      }
      return mentions;
    };
    return RepoMonitor;
  })();
  gh = new GitHub({
    user: process.env.GITHUB_USER,
    password: process.env.GITHUB_PASSWORD
  });
  testRepo = gh.repo('jamesmacaulay', 'notifier_test');
  console.log(testRepo.recipientsForHook(pullRequestHook));
}).call(this);
