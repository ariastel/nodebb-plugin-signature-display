module.exports = {
  meta: require.main.require('./src/meta'),
  translator: require.main.require('./src/translator'),
  User: require.main.require('./src/user'),
  utils: require.main.require('./src/utils'),

  winston: require.main.require('winston'),
};
