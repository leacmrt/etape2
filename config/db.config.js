var mysql = require('mysql');
var pool  = mysql.createPool({
   connectionLimit : 100,
  host            : '127.0.0.1',
  user            : 'root',
  password        : '',
  database        : 'devops',
});

pool.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
 // if (error) throw error;
  //console.log('The solution is: ', results[0].solution);

});

 /* pool.getConnection(function(err) {
    if (err) throw err;
    console.log("Database Connected!");
  });
  */ module.exports = pool ; 
  // CREATE A DATABASE
 /* con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query ("CREATE DATABASE devops", function (err, result) {
      if (err) throw err;
      console.log("Database created ");
    });
  });

  //CREATE A TABLE
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "CREATE TABLE students (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), lastName VARCHAR(255), class VARCHAR(255))";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Table created");
    });
  });


  //INSERT TABLE
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "INSERT INTO students (name, lastName, class) VALUES ?";
    var values = [
      ['John', "Clark", "English"],
      ['Peter', "Johnson","Maths"]
    ];    
    con.query(sql, [values], function (err, result) {
        if (err) throw err;
        console.log("Number of records inserted: " + result.affectedRows);
      });
    });
   
 */

