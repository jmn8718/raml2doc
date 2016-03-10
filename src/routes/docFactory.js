var express = require('express');
var router = express.Router();
var url = require("url");
var raml2html = require('raml2html');
var minify = require('html-minifier').minify;
var raml2obj = require('raml2obj');

router.get('/raml', function(req, res, next) {
  var uriParts = url.parse(req.url, true, true);
  var ramlUrl = uriParts.query.url
  var configWithDefaultTemplates = raml2html.getDefaultConfig();
  raml2html.render(ramlUrl,configWithDefaultTemplates).then(function(result) {
    var resultMinified = minify(result,{ removeAttributeQuotes: true, collapseWhitespace:true });
    console.log(result.length)
    console.log(resultMinified.length)
    var headers = {
      "Content-Type": "text/html; charset=utf-8"
    };
    res.writeHead(200, headers);
    res.end(resultMinified)

  }, function(error) {
    var headers = {
      "Content-Type": "text/plain; charset=utf-8"
    };
    res.writeHead(400, headers);
    res.end(error.toString())
  })
});

router.get('/custom', function(req, res, next) {
  var uriParts = url.parse(req.url, true, true);
  var ramlUrl = uriParts.query.url
  raml2obj.parse(ramlUrl).then(function(ramlObj) {
    res.json(ramlObj).end()
  }, function(error) {
    var headers = {
      "Content-Type": "text/plain; charset=utf-8"
    };
    res.writeHead(400, headers);
    res.end(error.toString())
  });
})
module.exports = router;
