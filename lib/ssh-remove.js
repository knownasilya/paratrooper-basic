'use strict';

var Handlebars = require('handlebars');
var execute = require('./execute');
var createRemoveScript = require('./scripts').remove;
var loadErrorCheck = require('./helpers/error-check');

loadErrorCheck(Handlebars);

module.exports = function remove(settings, identityFile) {
  execute(settings, identityFile, createRemoveScript(settings), function () {
    console.log('Stoping and removing application from ' + settings.sshAddress + ', located at '
      + settings.serverAppPath + '/' + settings.appName + '..');
  });
};
