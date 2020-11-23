const { LOGGER, models, codes } = require('@ccrc/app-common');

LOGGER.info(`Hello ${new models.CustomError(codes.errorCodes.SUCCESS).message}`);
