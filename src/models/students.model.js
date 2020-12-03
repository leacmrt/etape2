var con = require('./../../config/db.config');
var path = require('path');//for css

//Employee object create
var Students = function(students){
  this.name = students.name;
  this.lastName = students.lastName;
  this.class = students.class;
  
};



//CREATE
Students.create = function (newStu, result) {
   con.query("INSERT INTO students set ?", newStu, function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(err, null);
    }
    else{
      console.log(res.insertId);
      result(null, res.insertId);
    }
    });
    };

    //SEARCH EMPLOYE BY ID
    Students.findById = function (id, result) {
      console.log ("Select * from students where id = ? ", id);
        con.query("Select * from students where id = ? ", id, function (err, resu) {
        if(err) {
          console.log("error: ", err);
          result(err, null);
        }
        else{
          console.log(resu)
          result(null, resu); 
        }
        });
        };

    //FIND ALL THE STUDENTS
    Students.findAll = function (result) {
        con.query("Select * from students", function (err, res) {
        if(err) {
          console.log("error: ", err);
          result(null, err);
        }
        else{
          console.log('students : ', res);
          result(null, res);
        }
        });
        }; 

    //UPDATE
    Students.update = function(id, students, result){
        con.query("UPDATE students SET name=?,lastName=?,class=? WHERE id = ?", [students.name,students.lastName,students.class, id], function (err, res) {
        if(err) {
          console.log("error: ", err);
          result(null, err);
        }else{
          result(null, res);
        }
        });
        };
    
    //DELETE A STUDENTS
    Students.delete = function(id, result){
        con.query("DELETE FROM students WHERE name = ?", [id], function (err, res) {
        if(err) {
          console.log("error: ", err);
          result(null, err);
        }
        else{
          result(null, res);
        }
        });
        };
        module.exports= Students;