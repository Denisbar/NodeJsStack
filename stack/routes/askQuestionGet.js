var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var db = require('../db');

/* GET ask-question page. */
router.get('/ask-question', function(req, res, next) {
    res.render('ask-question-page', { title: 'Question Page' });
});

module.exports = router;
