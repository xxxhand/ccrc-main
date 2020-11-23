const path = require('path');
const { tools } = require('@ccrc/app-common');
const conf = require('@ccrc/app-common/shared/config');

/**
 * @class
 * @classdesc Describe app initializer
 */
class AppInitializer {
  /**
   * @static
   * @description Load config for app
   * @returns {void} void
   * @throws {Error} error
   */
  static loadConfig() {
    conf.load(path.resolve(require.main.path, `../../../configs/config.${tools.customArgvs.env}.json`));
  }
}

module.exports = AppInitializer;
