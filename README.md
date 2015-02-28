# THIS REPOSITORY IS NOW DEPRECATED

This module had been merged into [koa-qs](https://github.com/koajs/qs), please use the `first` mode.

```js
require('koa-qs')(app, 'first')
```

querystring-strict
=======

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![appveyor build status][appveyor-image]][appveyor-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Gittip][gittip-image]][gittip-url]
[![David deps][david-image]][david-url]
[![iojs version][iojs-image]][iojs-url]
[![node version][node-image]][node-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/koa-querystring-strict.svg?style=flat-square
[npm-url]: https://npmjs.org/package/koa-querystring-strict
[travis-image]: https://img.shields.io/travis/koajs/querystring-strict.svg?style=flat-square
[travis-url]: https://travis-ci.org/koajs/querystring-strict
[appveyor-image]: https://ci.appveyor.com/api/projects/status/ija0bd5d7esb54x3?svg=true
[appveyor-url]: https://ci.appveyor.com/project/fengmk2/querystring-strict
[coveralls-image]: https://img.shields.io/coveralls/koajs/querystring-strict.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/koajs/querystring-strict?branch=master
[gittip-image]: https://img.shields.io/gittip/fengmk2.svg?style=flat-square
[gittip-url]: https://www.gittip.com/fengmk2/
[david-image]: https://img.shields.io/david/koajs/querystring-strict.svg?style=flat-square
[david-url]: https://david-dm.org/koajs/querystring-strict
[iojs-image]: https://img.shields.io/badge/io.js-%3E=_1.0-yellow.svg?style=flat-square
[iojs-url]: http://iojs.org/
[node-image]: https://img.shields.io/badge/node.js-%3E=_0.11-green.svg?style=flat-square
[node-url]: http://nodejs.org/download/
[download-image]: https://img.shields.io/npm/dm/koa-querystring-strict.svg?style=flat-square
[download-url]: https://npmjs.org/package/koa-querystring-strict

This patches a koa app with `this.query.foo` return strict `string`. Disable multi values.

In 95% use cases, application only want `string` query params.

This patch can avoid some stupid `TypeError` and some security issues like [MongoDB inject](http://www.wooyun.org/bugs/wooyun-2010-086474)
when the developers forget handling query params type check.

## What's different

A normal request `GET /foo?p=a,b&p=b,c`.

- before patch

```js
console.log('%j', this.query.p);
["a,b", "b,c"]
```

- after patch

```js
console.log('%j', this.query.p);
"a,b"
```

## Install

```bash
$ npm i koa-querystring-strict
```

## Usage

```js
var koa = require('koa');
var app = koa();
require('koa-querystring-strict')(app);
```

## License

[MIT](LICENSE)
