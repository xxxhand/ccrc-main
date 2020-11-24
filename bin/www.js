global.Promise = require('bluebird');
const http = require('http');
const { LOGGER, tools } = require('@ccrc/app-common');
const conf = require('@ccrc/app-common/shared/config');
const app = require('@ccrc/backend');

LOGGER.info('Initial app start...');
LOGGER.info(`Connect to db ${conf.DATABASES.DEFAULT_MONGO.URI}`);

const _core = http.createServer(app.callback());
_core.listen(Number.parseInt(tools.customArgvs.port, 10));
_core.on('listening', () => LOGGER.info(`Server up on ${_core.address().port}`));
_core.on('error', (err) => LOGGER.error(err.stack));
