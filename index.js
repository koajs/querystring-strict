/**!
 * querystring-strict - index.js
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

var qs = require('querystring');
var merge = require('merge-descriptors');

module.exports = function (app) {
  merge(app.request, {

    /**
     * Get parsed query-string.
     *
     * @return {Object}
     * @api public
     */

    get query() {
      var str = this.querystring;
      if (!str) return {};

      var c = this._querycache = this._querycache || {};
      var query = c[str];
      if (!query) {
        query = c[str] = qs.parse(str);
        for (var key in query) {
          var value = query[key];
          if (Array.isArray(value)) {
            query[key] = value[0];
          }
        }
      }
      return query;
    }
  });

  return app;
};
