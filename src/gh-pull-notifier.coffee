util = require 'util'
rest = require 'restler'
# express = require 'express'


pullRequestHook = {"payload": "{\"number\":3,\"repository\":{\"name\":\"notifier_test\",\"created_at\":\"2012-02-16T21:15:48Z\",\"updated_at\":\"2012-02-16T22:08:48Z\",\"url\":\"https://api.github.com/repos/jamesmacaulay/notifier_test\",\"id\":3464067,\"pushed_at\":\"2012-02-16T22:08:48Z\",\"owner\":{\"avatar_url\":\"https://secure.gravatar.com/avatar/7bf3b0eb4c1383589c9b5c6b1c672b31?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png\",\"gravatar_id\":\"7bf3b0eb4c1383589c9b5c6b1c672b31\",\"url\":\"https://api.github.com/users/jamesmacaulay\",\"id\":340,\"login\":\"jamesmacaulay\"}},\"pull_request\":{\"number\":3,\"head\":{\"repo\":{\"master_branch\":null,\"name\":\"notifier_test\",\"has_wiki\":true,\"created_at\":\"2012-02-16T21:15:48Z\",\"size\":84,\"clone_url\":\"https://github.com/jamesmacaulay/notifier_test.git\",\"watchers\":2,\"private\":false,\"updated_at\":\"2012-02-16T22:08:48Z\",\"url\":\"https://api.github.com/repos/jamesmacaulay/notifier_test\",\"git_url\":\"git://github.com/jamesmacaulay/notifier_test.git\",\"language\":null,\"ssh_url\":\"git@github.com:jamesmacaulay/notifier_test.git\",\"fork\":false,\"pushed_at\":\"2012-02-16T22:08:48Z\",\"svn_url\":\"https://github.com/jamesmacaulay/notifier_test\",\"id\":3464067,\"mirror_url\":null,\"open_issues\":3,\"has_downloads\":true,\"has_issues\":true,\"homepage\":\"\",\"forks\":2,\"description\":\"\",\"html_url\":\"https://github.com/jamesmacaulay/notifier_test\",\"owner\":{\"avatar_url\":\"https://secure.gravatar.com/avatar/7bf3b0eb4c1383589c9b5c6b1c672b31?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png\",\"gravatar_id\":\"7bf3b0eb4c1383589c9b5c6b1c672b31\",\"url\":\"https://api.github.com/users/jamesmacaulay\",\"id\":340,\"login\":\"jamesmacaulay\"}},\"label\":\"jamesmacaulay:foo\",\"sha\":\"718cd0743810e06806579783ef574447400838d7\",\"ref\":\"foo\",\"user\":{\"avatar_url\":\"https://secure.gravatar.com/avatar/7bf3b0eb4c1383589c9b5c6b1c672b31?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png\",\"gravatar_id\":\"7bf3b0eb4c1383589c9b5c6b1c672b31\",\"url\":\"https://api.github.com/users/jamesmacaulay\",\"id\":340,\"login\":\"jamesmacaulay\"}},\"issue_url\":\"https://github.com/jamesmacaulay/notifier_test/issues/3\",\"created_at\":\"2012-02-16T22:09:13Z\",\"merged\":false,\"merged_by\":null,\"changed_files\":1,\"title\":\"foo\",\"body\":\"this is a pull request\",\"comments\":0,\"additions\":0,\"updated_at\":\"2012-02-16T22:09:13Z\",\"diff_url\":\"https://github.com/jamesmacaulay/notifier_test/pull/3.diff\",\"url\":\"https://api.github.com/repos/jamesmacaulay/notifier_test/pulls/3\",\"_links\":{\"html\":{\"href\":\"https://github.com/jamesmacaulay/notifier_test/pull/3\"},\"self\":{\"href\":\"https://api.github.com/repos/jamesmacaulay/notifier_test/pulls/3\"},\"comments\":{\"href\":\"https://api.github.com/repos/jamesmacaulay/notifier_test/issues/3/comments\"},\"review_comments\":{\"href\":\"https://api.github.com/repos/jamesmacaulay/notifier_test/pulls/3/comments\"}},\"id\":842091,\"patch_url\":\"https://github.com/jamesmacaulay/notifier_test/pull/3.patch\",\"mergeable\":true,\"closed_at\":null,\"merged_at\":null,\"commits\":1,\"review_comments\":0,\"deletions\":0,\"html_url\":\"https://github.com/jamesmacaulay/notifier_test/pull/3\",\"user\":{\"avatar_url\":\"https://secure.gravatar.com/avatar/7bf3b0eb4c1383589c9b5c6b1c672b31?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png\",\"gravatar_id\":\"7bf3b0eb4c1383589c9b5c6b1c672b31\",\"url\":\"https://api.github.com/users/jamesmacaulay\",\"id\":340,\"login\":\"jamesmacaulay\"},\"base\":{\"repo\":{\"master_branch\":null,\"name\":\"notifier_test\",\"has_wiki\":true,\"created_at\":\"2012-02-16T21:15:48Z\",\"size\":84,\"clone_url\":\"https://github.com/jamesmacaulay/notifier_test.git\",\"watchers\":2,\"private\":false,\"updated_at\":\"2012-02-16T22:08:48Z\",\"url\":\"https://api.github.com/repos/jamesmacaulay/notifier_test\",\"git_url\":\"git://github.com/jamesmacaulay/notifier_test.git\",\"language\":null,\"ssh_url\":\"git@github.com:jamesmacaulay/notifier_test.git\",\"fork\":false,\"pushed_at\":\"2012-02-16T22:08:48Z\",\"svn_url\":\"https://github.com/jamesmacaulay/notifier_test\",\"id\":3464067,\"mirror_url\":null,\"open_issues\":3,\"has_downloads\":true,\"has_issues\":true,\"homepage\":\"\",\"forks\":2,\"description\":\"\",\"html_url\":\"https://github.com/jamesmacaulay/notifier_test\",\"owner\":{\"avatar_url\":\"https://secure.gravatar.com/avatar/7bf3b0eb4c1383589c9b5c6b1c672b31?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png\",\"gravatar_id\":\"7bf3b0eb4c1383589c9b5c6b1c672b31\",\"url\":\"https://api.github.com/users/jamesmacaulay\",\"id\":340,\"login\":\"jamesmacaulay\"}},\"label\":\"jamesmacaulay:master\",\"sha\":\"39bc4d0f283deb3fbb02650e4cd97a7904cc8886\",\"ref\":\"master\",\"user\":{\"avatar_url\":\"https://secure.gravatar.com/avatar/7bf3b0eb4c1383589c9b5c6b1c672b31?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png\",\"gravatar_id\":\"7bf3b0eb4c1383589c9b5c6b1c672b31\",\"url\":\"https://api.github.com/users/jamesmacaulay\",\"id\":340,\"login\":\"jamesmacaulay\"}},\"state\":\"open\"},\"sender\":{\"avatar_url\":\"https://secure.gravatar.com/avatar/7bf3b0eb4c1383589c9b5c6b1c672b31?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png\",\"gravatar_id\":\"7bf3b0eb4c1383589c9b5c6b1c672b31\",\"url\":\"https://api.github.com/users/jamesmacaulay\",\"id\":340,\"login\":\"jamesmacaulay\"},\"action\":\"opened\"}"}


class GitHub
  class @Repo
    constructor: (@github, @user, @repo) ->

    getIssueEvents: ->
      @github.get("repos/#{@user}/#{@repo}/issues/events")
    
    getIssueComments: (issueId) ->
      @github.get("repos/#{@user}/#{@repo}/issues/#{issueId}/comments")

  constructor: (opts={}) ->
    @user = opts.user
    @password = opts.password
  
  repo: (user, repo) -> new GitHub.Repo(this, user, repo)

  get: (path) ->
    rest.get(@requestUrl(path), @requestOptions())

  requestOptions: ->
    username: @user
    password: @password
 
  requestUrl: (path) ->
    path = path.replace(/^\//,'')
    "https://api.github.com/#{path}"

class RepoMonitor
  constructor: (@repo) ->
  
  start: ->
    # @repo.getIssueEvents().on 'success', (events) =>
      # console.log @recipientsForEvent(events[0])
    @repo.getIssueComments

  fetchRecipientsForEvent: (event, callback) ->
    recipients = @recipientsForEvent(event)


  recipientsForHook: (hook) ->
    payload = JSON.parse(hook.payload)


  recipientsForEvent: (event) ->
    recipients = []

    issueCreator = event?.issue?.user?.login
    recipients.push issueCreator if issueCreator

    if desc = event?.issue?.body
      for username in @mentionsFromText(desc)
        recipients.push username unless username in recipients

    recipients


  
  recipientsForIssueComment: (comment) ->
    recipients = []


  mentionsFromText: (text) ->
    mentions = []
    re = /(?:\s|^)\@\w+\b/gm
    while result = re.exec(text)
      username = result[0].replace(/^\W*/,'')
      mentions.push username unless username in mentions
    mentions

  
gh = new GitHub
  user: process.env.GITHUB_USER
  password: process.env.GITHUB_PASSWORD


testRepo = gh.repo('jamesmacaulay', 'notifier_test')

console.log testRepo.recipientsForHook(pullRequestHook)

# gh.get("/repos/Shopify/batman/issues/events/9612378").on 'complete', (data, res) ->
#   for k,v of data
#     console.log k

# shopify = gh.repo('Shopify', 'shopify')

# shopify.getIssueEvents().on 'complete', (data) ->
  # console.log data.map (e) -> e.created_at
  # console.log data[0].issue


# monitor = new RepoMonitor(shopify)

# console.log monitor.mentionsFromText('@ssoroka for review\r\n\r\nThe public field is filtered on for shopify wide product search, which is used by search.shopify.com. This field defaults to false, and there is no longer a way for users to enable this. Because of this, search.shopify.com will only find products for 2.8% of shops, so this pull request makes all non-password protected active shops searchable through product search.')

# shopify.getIssueEvents().on 'success', (events, res) -> console.log res.body


# hookCatcher = express.createServer()
# 
# hookCatcher.post '/ping', (req, res) ->
#   console.log req
#   res.send "ok"
# 
# hookCatcher.listen(80)
# 

# shopify.getIssueComments(1080).on 'success', (comments) -> console.log comments

