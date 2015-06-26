'use strict';

module.exports = function initPrompts(data) {
  var npmScripts = data.scriptKeys.filter(function (key) {
    return key !== 'install' && key !== 'postinstall';
  });

  return [
    {
      name: 'sshAddress',
      message: 'What is the server\'s SSH address?',
      validate: function (address) {
        if (!address) {
          return 'Cannot be blank';
        }

        var split = address.split('@');

        if (split.length === 2 && split[0].length) {
          return true;
        }

        return 'Must have an \'@\' somewhere in the middle, e.g. me@myserver';
      }
    }, {
      name: 'runNpmScript',
      type: 'expand',
      message: 'Would you like to run an npm script after `postinstall` runs?',
      default: 0,
      choices: [
        { key: 'n', name: 'No', value: false },
        { key: 'y', name: 'Yes', value: true }
      ],
      when: function () {
        return npmScripts.length > 0;
      }
    }, {
      name: 'npmScript',
      type: 'list',
      message: 'Which npm script would you like to run?',
      choices: npmScripts,
      when: function (answers) {
        return answers.runNpmScript;
      }
    }, {
      name: 'npmInstallArguments',
      message: 'Arguments for `npm install`, e.g. \'--production\'.'
    }
  ];
};
