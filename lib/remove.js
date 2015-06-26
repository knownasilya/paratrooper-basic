'use strict';

var overrideSshUser = require('./utils/override-user');
var promptForPassword = require('./utils/prompt-password');
var sshRemove = require('./ssh-remove');

module.exports = function (settings, options) {
  if (options.user) {
    settings.sshAddress = overrideSshUser(options.user, settings.sshAddress);
    console.log(settings.sshAddress);
  }

  promptForPassword(settings.sshAddress, function (password) {
    settings.sshPassword = password;
    // TODO: generate scripts
    sshRemove(settings, options.sshIdentityFile);
  });
};
