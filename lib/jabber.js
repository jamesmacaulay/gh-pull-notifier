(function() {
  var xmpp;
  xmpp = require("node-xmpp");
  exports.Jabber = (function() {
    function Jabber(opts) {
      var jabber;
      if (opts == null) {
        opts = {};
      }
      this.user = opts.user;
      this.password = opts.password;
      jabber = new xmpp.Client({
        jid: this.user,
        password: this.password,
        host: "talk.google.com",
        port: 5222
      });
      jabber.on("online", function() {
        return util.puts("jabber online");
      });
      jabber.on("error", function(e) {
        return util.puts(e);
      });
      jabber.send(new xmpp.Element('message', {
        to: 'dennis@jadedpixel.com',
        type: 'chat'
      }).c('body').t('test message'));
    }
    return Jabber;
  })();
}).call(this);
