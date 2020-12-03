const Students = require('../models/students.model');

exports.baseRoute = async (req,res) =>{
  res.render('index');
};


exports.findAll = function(req, res) {
    Students.findAll(function(err, students) {
  console.log('controller')
  if (err)
  res.send(err);
  console.log('res', students);
  //res.send(students);
  res.render('addOredits', { title: 'Node Project', "posts": students });
});
};

exports.create = function(req, res) {
    const new_students = new Students(req.body);
    //handles null error
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
      res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
    Students.create(new_students, function(err, students) {
      if (err)res.send(err);
      
      else{res.json({error:false,message:"Students added successfully!",data:students})};
    });
    }
    };

    exports.findById = function(req, res) {
      console.log("id : "+req.params.id)
        Students.findById(req.params.id, function(err, data) {
          if (err) res.send(err);
        
        else{  if(data)
         { console.log("la "+data)
          res.render('addOredits', { title: 'One post !', "posts": data});
        }else{res.json({ error:false, message: 'Students does not exits' }); }
          //res.json(students);
        }
      });
        };

        exports.update = function(req, res) {
            if(req.body.constructor === Object && Object.keys(req.body).length === 0){
              res.status(400).send({ error:true, message: 'Please provide all required field' });
            }else{
                  var postID = req.body.id;
              if(req.params.id!="id")
              {
                console.log(req.params.id); 
                postID=req.params.id;  
              }  
              console.log("id : "+req.params.id)
              Students.update(postID, new Students(req.body), function(err, Students) {
             if (err) res.send(err);

             res.json({ error:false, message: 'Students successfully updated' });
          });
          }
          };

        exports.delete = function(req, res) {
          var postID = req.body.id;
          if(req.params.id!="id")
          {
            console.log(req.params.id); 
            postID=req.params.id;  
           }  
          
            console.log('id :'+postID);

            Students.delete( postID, function(err,students) {
              if (err )res.send(err);
              else{ 
                console.log(req.params.id+" is deleted")
              // res.render('index', { title: 'One post !', delete1 : req.body.id });
                res.json({ error:false, message: 'Students successfully deleted',idstu: req.body.id });
            }
            });
            };

