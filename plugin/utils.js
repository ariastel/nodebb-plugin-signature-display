const { translator, utils } = require('./nodebb');


function sanitizeSignature(signature, { disableAll, disableLinks, disableImages }) {

  if (disableAll) {
    return '';
  }

  const signatureAfterTranslator = translator.escape(signature);
  if (!disableLinks && !disableImages) {
    return signatureAfterTranslator;
  }

  const tagsToStrip = [];
  if (disableLinks) {
    tagsToStrip.push('a');
  }
  if (disableImages) {
    tagsToStrip.push('img');
  }

  return utils.stripHTMLTags(signatureAfterTranslator, tagsToStrip);
}

module.exports = { sanitizeSignature };
