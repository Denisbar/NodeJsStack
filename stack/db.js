var mysql = require('mysql');
var connection = mysql.createConnection({
    host     : 'us-cdbr-iron-east-05.cleardb.net',
    user     : 'bcb1b298150b3e',
    password : '2308421a', // Please change to your local db password
    database : 'heroku_d3747e56b77da10' // DB name
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;

//comment