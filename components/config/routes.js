'use strict';
let ioc = require('electrolyte');

let routes = [];

routes.push({
  path: '/',
  method: 'GET',
  handler: ioc.create('handlers/index')
});

routes.push({
  path: '/index.html',
  method: 'GET',
  handler: function(request, reply) {
    reply.redirect('/');
  }
});

exports = module.exports = routes;

exports['@singleton'] = true;
exports['@literal'] = true;