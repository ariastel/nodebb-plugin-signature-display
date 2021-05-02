const { meta, User } = require('./nodebb');


const Controller = {};

Controller.getMetaSignatureConfig = function getMetaSignatureConfigs() {
  return {
    all: meta.config.disableSignatures === 1,
    links: meta.config['signatures:disableLinks'] === 1,
    images: meta.config['signatures:disableImages'] === 1,
  };
};

Controller.getUserSettings = async function getUserSettings(uid) {
  return User.getSettings(uid);
};

module.exports = Controller;
