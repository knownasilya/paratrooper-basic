'use strict';

var sshDeploy = require('./ssh-deploy');
var overrideSshUser = require('./utils/override-user');
var promptForPassword = require('./utils/prompt-password');

module.exports = function (settings, options) {
  if (options.user) {
    settings.sshAddress = overrideSshUser(options.user, settings.sshAddress);
  }

  promptForPassword(settings.sshAddress, function (password) {
    settings.sshPassword = password;
    // TODO: generate deploy script
    sshDeploy(settings, options.sshIdentityFile);
    // TODO: generate script, verify in callback
  });
};

