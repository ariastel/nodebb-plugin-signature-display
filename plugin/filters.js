const constants = require('./constants');
const controller = require('./controller');
const { sanitizeSignature } = require('./utils');


const Filters = {};
let app;

Filters.init = async (hookData) => {
  app = hookData.app;
  return hookData;
};

Filters.addMenuItem = async function addMenuItem(customHeader) {
  customHeader.plugins.push({
    route: `/${constants.plugin.route}`,
    icon: constants.plugin.icon,
    name: constants.displayName,
  });
  return customHeader;
};

Filters.updateCustomSettings = async function updateCustomSettings(payload) {

  const meta = controller.getMetaSignatureConfig();
  if (meta.all) {
    return payload;
  }

  const { uid } = payload;
  if (!uid) {
    return payload;
  }

  const settings = await controller.getUserSettings(uid);
  const settingsHtml = await app.renderAsync('partials/account/settings/signature-display', {
    signaturesHideMetaLinks: meta.links,
    signaturesHideMetaImages: meta.images,
    signaturesHideUserAll: settings[`${constants.namespace}:all`] === '1',
    signaturesHideUserLinks: settings[`${constants.namespace}:links`] === '1',
    signaturesHideUserImages: settings[`${constants.namespace}:images`] === '1',
  });

  payload.customSettings.push({
    title: '[[signature-display:sign_d_settings]]',
    content: settingsHtml,
  });

  return payload;
};

/* eslint-disable no-param-reassign */
Filters.userSaveSettings = async function filterUserSaveSettings(payload) {
  payload.settings[`${constants.namespace}:all`] = payload.data.signaturesHideUserAll;
  payload.settings[`${constants.namespace}:links`] = payload.data.signaturesHideUserLinks;
  payload.settings[`${constants.namespace}:images`] = payload.data.signaturesHideUserImages;
  return payload;
};

Filters.parseSignature = async function parseSignature(payload) {

  const { uid } = payload;
  if (!uid) {
    return payload;
  }

  const settings = await controller.getUserSettings(uid);
  payload.userData.signature = sanitizeSignature(payload.userData.signature, {
    disableAll: settings[`${constants.namespace}:all`] === '1',
    disableLinks: settings[`${constants.namespace}:links`] === '1',
    disableImages: settings[`${constants.namespace}:images`] === '1',
  });
  return payload;
};
/* eslint-enable no-param-reassign */

module.exports = Filters;
