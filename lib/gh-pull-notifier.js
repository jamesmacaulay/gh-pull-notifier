(function() {
  var GitHub, express, gh, testRepo, util;
  util = require('util');
  express = require('express');
  GitHub = require('./github').GitHub;
  gh = new GitHub({
    user: process.env.GITHUB_USER,
    password: process.env.GITHUB_PASSWORD
  });
  testRepo = gh.repo('jamesmacaulay', 'notifier_test');
  testRepo.getIssueEvents().on('success', function(events) {
    return console.log(events);
  });
}).call(this);
