const fs = require('fs-extra');
const { customLogger, CustomValidator } = require('../../custom-tools');
/**
 * @type {configObject}
 */
let _config = null;

/**
 * @private
 * @description Load configs from input file
 * @param {string} filePath
 * @returns {void} void
 * @throws {Error} error
 */
function _load(filePath) {
  if (!CustomValidator.nonEmptyString(filePath)) {
    customLogger.info('Input path is empty, terminated...');
    throw new Error('Path is empty');
  }
  if (filePath.startsWith('.') || filePath.startsWith('..')) {
    throw new Error('Path must be absolutely');
  }
  customLogger.info(`Check file exist with path ${filePath}...`);
  if (!fs.existsSync(filePath)) {
    throw new Error(`File not exist with path ${filePath}`);
  }
  const data = fs.readFileSync(filePath);
  _config = JSON.parse(data);
}

module.exports = {
  conf: _config,
  load: _load,
};
