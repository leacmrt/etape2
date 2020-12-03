const express = require('express');
const bodyParser = require('body-parser');
// create express app
const app = express();

var path = require('path');
// Setup server port
const port = process.env.PORT ||5000;

const exphbs = require('express-handlebars');
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse requests of content-type - application/json
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, '/public')));
app.set('views', path.join(__dirname, '/views/'));
app.engine('hbs', exphbs({ extname: 'hbs', defaultLayout: 'layout', layoutsDir: __dirname + '/views/Layouts/' }));
app.set('view engine', 'hbs')

// define a root route
app.get('/', (req, res) => {
  res.send("Hello World");
});

// Require employee routes
const studentsRoutes = require('./src/routes/students.routes')
// using as middleware
app.use('/api/v1', studentsRoutes)


// listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

module.exports = app;