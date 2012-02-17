(function() {
  var RepoMonitor, rest;
  var __indexOf = Array.prototype.indexOf || function(item) {
    for (var i = 0, l = this.length; i < l; i++) {
      if (this[i] === item) return i;
    }
    return -1;
  };
  rest = require('restler');
  exports.GitHub = (function() {
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
      var recipients;
      return recipients = [];
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
}).call(this);
