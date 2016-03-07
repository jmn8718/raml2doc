var express = require('express');
var router = express.Router();
var fs = require('fs')
//
//router.param('filepath', function(req, res, next, filename){
//  console.log('filepath')
//  next()
//});

router.get('/file/:filepath', function(req, res) {
  console.log(req.params)
  var data = {
    data :[
      {
        service: 'get',
        api: 'de',
        response_code: 500,
        timestamp: 'now'
      } ,
      {
        service: 'post',
        api: 'as',
        response_code: 400,
        timestamp: 'yesterday'
      }
    ]
  }

  console.log(data)
  res.status(200).json(data);
  res.end()
});

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
