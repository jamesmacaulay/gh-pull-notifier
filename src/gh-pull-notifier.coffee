host = process.env.HOST || 'ghpn.herokuapp.com'
hookPath = '/ping'
hookUrl = "http://#{host}#{hookPath}"

express = require 'express'

web = express.createServer()
web.use(express.bodyParser())

web.get '/', (req, res) ->
  res.send "ok"

web.post hookPath, (req, res) ->
  console.log req.body
  res.send "ok"

port = process.env.PORT || 3000
web.listen port, -> console.log "Listening on port #{port}"

GitHub = require('./github').GitHub

gh = new GitHub
  user: process.env.GITHUB_USER
  password: process.env.GITHUB_PASSWORD

repoUser = process.env.REPO_USER || 'jamesmacaulay'
repoName = process.env.REPO_NAME || 'notifier_test'
repo = new GitHub.Repo gh, repoUser, repoName


repo.getHooks().on 'success', (hooks) ->
  existingHook = null
  for hook in hooks
    existingHook = hook if hook.config?.url is hookUrl
  if existingHook
    console.log JSON.stringify(existingHook)
  else
    newHook =
      name: 'web'
      active: true
      events: ['issues', 'issue_comment', 'commit_comment', 'pull_request']
      config:
        url: hookUrl
    repo.createHook(newHook).on 'success', (hook) -> console.log JSON.stringify(hook)


