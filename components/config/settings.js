'use strict';
let isDebug = require('isdebug');

let settings = {};

// The server framework
// http://hapijs.com/api
settings.hapi = {
  options: {},
  server: {}
};

// http://hapijs.com/api#serverconnectionoptions
settings.hapi.server.connection = {
  address: '127.0.0.1',
  port: '8080'
};


// The logger
// https://github.com/winstonjs/winston
settings.winston = {};
settings.winston.console = {
  level: 'debug',
  silent: isDebug,
  colorize: true,
  timestamp: true
};
settings.winston.file = {
  level: 'info',
  silent: !isDebug,
  colorize: false,
  timestamp: true,
  filename: '/tmp/html-site.log'
};

exports = module.exports = settings;

exports['@singleton'] = true;
exports['@literal'] = true;