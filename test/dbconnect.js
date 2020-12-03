const { expect } = require('chai')
var chai = require("chai");;
const con = require('../config/db.config')
let server = require('../server');
let should = chai.should();

describe('Mysql', () => {
   
     it('should connect to mysql', (done) => {

      con.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
        
      //expect(error).to.eql(null);
           
        });
        done()
       
      })
    })
 
 
 

