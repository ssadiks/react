// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');
var bodyParser = require('body-parser');
var app        = express();

// configure body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port     = process.env.PORT || 3030; // set our port

var mongoose   = require('mongoose');
mongoose.connect('mongodb://localhost/todos'); // connect to our database

var routerTodo = require('./routes/todo.routes');
// REGISTER OUR ROUTES -------------------------------
app.use('/api', routerTodo);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);