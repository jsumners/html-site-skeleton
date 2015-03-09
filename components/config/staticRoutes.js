'use strict';

let routes = [];

// jQuery
routes.push({
  method: 'GET',
  path: '/jquery/{param*}',
  handler: {
    directory: {
      path: 'web/bower/jquery/dist'
    }
  }
});

// Bootstrap
routes.push({
  method: 'GET',
  path: '/bootstrap/{param*}',
  handler: {
    directory: {
      path: 'web/bower/bootstrap/dist'
    }
  }
});

// Local (non-third party) satic resources
routes.push({
  method: 'GET',
  path: '/{param*}',
  handler: {
    directory: {
      path: 'web/local'
    }
  }
});

exports = module.exports = routes;

exports['@singleton'] = true;
exports['@literal'] = true;