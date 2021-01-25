var mysql = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '8169x5it',
    database : 'testDB'
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;
