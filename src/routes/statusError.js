var express = require('express');
var router = express.Router();
var fs = require('fs')
var path = require('path')
//
//router.param('filepath', function(req, res, next, filename){
//  console.log('filepath')
//  next()
//});

function parseError(data){
  var errors = []

  var dataSplits = data.split('\n')
  for( var i=1; i<dataSplits.length;i++){
    var splited = dataSplits[i].replace('\n','').split(';')
    //console.log(splited)
    errors.push({
      service: splited[7],
      api: splited[5],
      response_code: splited[8],
      timestamp: splited[1],
      entity: splited[0]
    })
  }
  console.log(errors)
  return { data: errors};
}
router.get('/file/:filepath', function(req, res) {
  var filename = path.join(__dirname,'../../data',req.params.filepath)
  var defaultData = {
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
  console.log(filename)
  fs.readFile(filename,'utf-8',function(error,data){
    if(error)
      res.status(200).json(defaultData).end();
    else
      res.status(200).json(parseError(data)).end();
  })

  //console.log(data)
  //res.status(200).json(data).end();
});

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
