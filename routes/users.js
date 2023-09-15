var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
/* GET users listing. */
router.get('/cool', function(req, res, next) {
  res.send('joedio');
});
/* GET users listing. */
router.get('/cool/beach', function(req, res, next) {
  res.send('t');
});
/* GET users listing. */
router.get('/ifc', function(req, res, next) {
  res.send('g');
});

module.exports = router;
