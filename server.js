// get dependencies
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// parse requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Enable CORS for all HTTP methods
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

// Configuring the database
const config = require('./mongo');

require('./book.routes')(app);

// Connecting to the database
config.connect();

// default route
app.get('/', (req, res) => {
    res.json({"message": "Welcome to Tabcorp Book app"});
});

const port = process.env.PORT || 3000;
app.listen(port, function(){
  console.log('Listening on port test ' + port);
 });