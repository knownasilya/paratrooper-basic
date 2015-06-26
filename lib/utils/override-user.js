'use strict';

// Override or set user if not set
module.exports = function overrideSshUser(user, address) {
  var split = address.split('@');

  if (split.length === 2) {
    return user + '@' + split[1];
  }

  return user + '@' + split[0];
};
