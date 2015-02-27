/**!
 * querystring-strict - test/querystring-strict.test.js
 *
 * Copyright(c) koajs and other contributors.
 * MIT Licensed
 *
 * Authors:
 *   fengmk2 <m@fengmk2.com> (http://fengmk2.com)
 */

"use strict";

/**
 * Module dependencies.
 */

var assert = require('assert');
var urllib = require('urllib');
var koa = require('koa');

describe('querystring-strict.test.js', function () {
  var app = koa();
  require('../')(app);

  app.use(function* () {
    this.body = [this.query, this.query];
  });

  var host;
  before(function (done) {
    app.listen(0, function () {
      host = 'http://localhost:' + this.address().port;
      done();
    });
  });

  it('should return the first query params string', function (done) {
    urllib.request(host + '/foo?p=a,b&p=b,c&empty=&empty=&empty=&n=1&n=2&n=1&ok=true', {
      dataType: 'json'
    }, function (err, body, res) {
      assert.ifError(err);
      assert.equal(res.statusCode, 200);
      assert.deepEqual(body, [
        {
          p: 'a,b',
          empty: '',
          n: '1',
          ok: 'true'
        },
        {
          p: 'a,b',
          empty: '',
          n: '1',
          ok: 'true'
        }
      ]);
      done();
    });
  });

  it('should return empty query', function (done) {
    urllib.request(host, {
      dataType: 'json'
    }, function (err, body, res) {
      assert.ifError(err);
      assert.equal(res.statusCode, 200);
      assert.deepEqual(body, [{}, {}]);
      done();
    });
  });
});
