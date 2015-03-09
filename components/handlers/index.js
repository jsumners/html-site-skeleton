'use strict';

let log = {};

function indexHandler(request, reply) {
  log.debug('Handling request for /');

  // Defines the context that Goji will use when processing templates.
  // Since our layout file uses a "body" property to determine which partial
  // to load, we set that property to the index partial.
  let context = {
    body: 'index'
  };

  // Tell Hapi we're ready for it to reply to the client.
  reply.view('layout', context);
}

exports = module.exports = function($log) {
  log = $log;
  return indexHandler;
};

exports['@require'] = [ 'logger' ];
exports['@singleton'] = true;
exports['@literal'] = false;