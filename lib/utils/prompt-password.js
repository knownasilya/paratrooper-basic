'use strict';

var inquirer = require('inquirer');

module.exports = function promptForPassword(server, cb) {
  inquirer.prompt([
    {
      type: 'password',
      name: 'sshPassword',
      message: 'Please enter your password for ' + server + ' server:'
    }
  ], function (answers) {
    cb(answers.sshPassword);
  });
}
