var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET question page. */
router.get('/question', function(req, res, next) {
  res.render('question-page', { title: 'Question Page' });
});

module.exports = router;
