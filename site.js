'use strict';
let path = require('path');

let isDebug = require('isdebug');
let Goji = require('goji');

// Configure our dependency injection/inversion of control container
let ioc = require('electrolyte');
ioc.loader('', ioc.node('components'));

// Use our container to load some dependencies
let settings = ioc.create('config/settings');
let log = ioc.create('logger');

// Setup the web server
let Hapi = require('hapi');
let server = new Hapi.Server(settings.hapi.server.options);
server.connection(settings.hapi.server.connection);

server.route(ioc.create('config/staticRoutes'));
server.route(ioc.create('config/routes'));

let templatesDir = path.resolve(__dirname + '/templates');
server.views({
  engines: {
    html: new Goji({
      cache: !isDebug,
      templatesDir: templatesDir
    })
  },
  path: templatesDir,
  isCached: !isDebug
});

// And start it
server.start(function serverStartCallback() {
  log.info(`Server started: ${server.info.uri}`);
});