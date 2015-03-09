'use strict';

exports = module.exports = function(config) {
  let winston = require('winston');
  let logger = new (winston.Logger)({
    transports: [
      new (winston.transports.Console)(config.winston.console),
      new (winston.transports.File)(config.winston.file)
    ]
  });

  return logger;
};

exports['@require'] = [ 'config/settings' ];
exports['@singleton'] = true;
exports['@literal'] = false;