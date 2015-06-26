module.exports = {
  prompts: {
    init: require('./lib/prompts/init')
  },
  init: require('./lib/init'),
  deploy: require('./lib/deploy'),
  remove: require('./lib/remove')
};
