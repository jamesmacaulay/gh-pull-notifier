xmpp = require "node-xmpp"

class exports.Jabber
  constructor: (opts={}) ->
    @user = opts.user
    @password = opts.password
  
    jabber = new xmpp.Client
      jid: @user
      password: @password
      host: "talk.google.com"
      port: 5222

    jabber.on "online", ->
      util.puts "jabber online"

    jabber.on "error", (e) ->
      util.puts e

    jabber.send(new xmpp.Element('message',
        to: 'dennis@jadedpixel.com',
        type: 'chat'
      ).
      c('body').
      t('test message'))