process.env.NODE_ENV = 'test';
const bodyParser = require('body-parser');
var mysql = require('mysql');
let Student = require('../src/models/students.model');
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
const { expect } = require('chai');
let should = chai.should();
server.use(bodyParser.json());

let student = {
  name: "Christophe",
  lastName: "Belamy",
  class: "ing2"
}

chai.use(chaiHttp);

describe('Students', () => {
    
  describe('/GET students', () => {
      it('it should GET all the students', (done) => {
        chai.request(server)
            .get('/api/v1/students/')
            .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('object');
              done();
            });
      });
  });
  /*
  * Test the /POST route
  */
 describe('/POST students', () => {
      it('it should not POST a student ', (done) => {
          
        chai.request(server)
            .post('/api/v1/students/')
            .send(student)
            .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('object');
                  res.body.should.have.property('error');
                  expect(res.body.message).to.be.eql("Students added successfully!");
              done();
            });
      });

  });

  /*
  * Test the /GET/:id route
  */
 describe('/GET/:id students', () => {
    it('it should GET a student by the given id', (done) => {
           chai.request(server)
          
          .get('/api/v1/students/2')
          .end((err, res) => {
                res.should.have.status(200);
                expect(err).to.be.eql(null);
                res.body.should.be.a('object');
                
           
          });
          done();
        }
          
          )
    
});

describe('/DELETE/:id students', () => {
    it('it should delete a student by the given id', (done) => {

           chai.request(server)
          .delete('/api/v1/students/delete/Christophe')
          .then((err, res) => {
               expect(err).to.be.eql(null);
               expect(res.body.message).to.be.eql('Students successfully deleted');
          });
          
          done();
          
        })

          
});

describe(' test the students/update', () => {
  it('it should UPDATE a student given the id', (done) => {
     

            chai.request(server)
            .put('/api/v1/students/update/1')
            .send({name: "michelle",
             lastName: "C.S. Lewis",
             class: "ing8"
            })
            .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('object');
                  expect(res.body.message).to.be.eql('Students successfully updated');
            
      });
      done();
  });
});

});