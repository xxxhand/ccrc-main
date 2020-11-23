global.Promise = require('bluebird');
const http = require('http');
const { LOGGER, tools } = require('@ccrc/app-common');
const app = require('../bootstrap/app');

LOGGER.info('Initial app start...');

const _core = http.createServer(app.callback());
_core.listen(Number.parseInt(tools.customArgvs.port, 10));
_core.on('listening', () => LOGGER.info(`Server up on ${_core.address().port}`));
_core.on('error', (err) => LOGGER.error(err.stack));
