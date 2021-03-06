/* GET list-page. */
var express = require('express');
var router = express.Router();
var db = require('../db');

var sql = 'SELECT Questions.is_answered, Questions.title, Questions.question_id, Questions.question_body, Users.user_name FROM Questions INNER JOIN Users ON Users.id = Questions.author_id';
router.get('/list-page', function(req, res, next) {
    db.query(sql, function(err, rows){
        res.render('list-page', { title: 'List Page', ses: sess.username, questions: rows });
        console.log(sess.username);
    });
});

module.exports = router;
