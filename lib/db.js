var mysql = require('mysql');
var db = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  password : 'xotmd2',
  database : 'opentutorials'
});
db.connect();
module.exports = db;
