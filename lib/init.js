'use strict';

var scripts = require('./scripts');

module.exports = function (targetPath, options) {
  scripts.generate(targetPath, options);
};
