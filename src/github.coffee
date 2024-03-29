rest = require 'restler'

class exports.GitHub
  class @Repo
    constructor: (@github, @user, @repo) ->

    path: -> "repos/#{@user}/#{@repo}"

    createHook: (hook) ->
      @github.post(@path() + "/hooks", hook)

    updateHook: (id, hook) ->
      @github.post(@path() + "/hooks/#{id}", hook)

    getHooks: ->
      @github.get(@path() + "/hooks")

    getIssueEvents: ->
      @github.get(@path() + "/issues/events")
    
    getIssueComments: (issueId) ->
      @github.get(@path() + "/issues/#{issueId}/comments")

  constructor: (opts={}) ->
    @user = opts.user
    @password = opts.password
  
  repo: (user, repo) -> new GitHub.Repo(this, user, repo)
  
  post: (path, obj) ->
    rest.post(@requestUrl(path), obj, @requestOptions())

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
    recipients = []
      


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

