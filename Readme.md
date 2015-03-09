# HTML Site Skeleton

This project provides a starting point for building a website that serves
HTML with the [Hapi][hapi] framework. Some of the features the skeleton
provides are:

* Hapi powered
* Dependency Injection via [Electrolyte][electrolyte]
* Templating via [Goji][goji]
* Logging via [Winston][winston]
* Frontend resources managed via [Bower][bower]

## Requirements

1. A Node implementation that supports [ES6][es6] features (i.e. [io.js][iojs])
2. [Bower][bower]: `npm install -g bower`
3. A web site to build

## Getting Started

1. Clone the repository
2. Delete the .git directory to start fresh
3. Install backend dependencies: `npm install`
4. Install frontend dependencies: `bower install`
5. Start the development server: `npm start`
6. Open the site: [http://localhost:8080/](http://localhost:8080/)

# License

[MIT License](http://jsumners.mit-license.org/)


[hapi]: http://hapijs.com/
[electrolyte]: https://github.com/jaredhanson/electrolyte
[goji]: http://jsumners.github.io/goji
[winston]: https://github.com/winstonjs/winston
[bower]: http://bower.io/
[es6]: https://iojs.org/en/es6.html
[iojs]: https://iojs.org/