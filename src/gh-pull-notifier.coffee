util = require 'util'
express = require 'express'
# GitHub = require('./github').GitHub 
  
# gh = new GitHub
  # user: process.env.GITHUB_USER
  # password: process.env.GITHUB_PASSWORD


# testRepo = gh.repo('jamesmacaulay', 'notifier_test')
# 
# testRepo.getIssueEvents().on 'success', (events) ->
#   console.log events
# 
# console.log testRepo.recipientsForHook(pullRequestHook)

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


web = express.createServer()
# web.use(express.bodyParser)

web.get '/', (req, res) ->
  res.send "ok"

web.post '/ping', (req, res) ->
  # console.log req.body
  res.send "ok"

web.listen(3000)


# shopify.getIssueComments(1080).on 'success', (comments) -> console.log comments

