/* */ 
(function(Buffer) {
  "use strict";
  var etag = require('etag');
  var fresh = require('fresh');
  var fs = require('fs');
  var path = require('path');
  var zlib = require('zlib');
  var minifiedScript = path.join(__dirname, "/dist/index.min.js");
  var unminifiedScript = path.join(__dirname, "/dist/index.js");
  function supportsGzip(req) {
    var accept = req.headers['accept-encoding'];
    return accept && accept.indexOf('gzip') > -1;
  }
  function setHeaders(res, body) {
    res.setHeader("Cache-Control", "public, max-age=0");
    res.setHeader("Content-Type", "text/javascript");
    res.setHeader("ETag", etag(body));
  }
  function getScriptBody(options, connector) {
    var script = minifiedScript;
    if (options && !options.minify) {
      script = unminifiedScript;
    }
    return connector + fs.readFileSync(script);
  }
  function isConditionalGet(req) {
    return req.headers["if-none-match"] || req.headers["if-modified-since"];
  }
  function notModified(res) {
    res.removeHeader("Content-Type");
    res.statusCode = 304;
    res.end();
  }
  function init(options, connector, type) {
    var gzipCached;
    var requestBody = getScriptBody(options, connector);
    if (type && type === "file") {
      return requestBody;
    }
    return function(req, res) {
      var output = requestBody;
      setHeaders(res, output);
      if (isConditionalGet(req) && fresh(req.headers, res._headers)) {
        return notModified(res);
      }
      if (supportsGzip(req)) {
        res.setHeader("Content-Encoding", "gzip");
        if (!gzipCached) {
          var buf = new Buffer(output, "utf-8");
          zlib.gzip(buf, function(_, result) {
            gzipCached = result;
            res.end(result);
          });
        } else {
          res.end(gzipCached);
        }
      } else {
        res.end(output);
      }
    };
  }
  module.exports.middleware = init;
  module.exports.plugin = init;
  module.exports.minified = function() {
    return fs.readFileSync(minifiedScript, 'utf8');
  };
  module.exports.unminified = function() {
    return fs.readFileSync(unminifiedScript, 'utf8');
  };
})(require('buffer').Buffer);
