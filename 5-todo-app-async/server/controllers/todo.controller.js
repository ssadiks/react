//Import Todo Model
var Todo     = require('./../models/todo.model');

// middleware to use for all requests
var middleware = function (req, res, next) {
	// do logging
	console.log('Something is happening.');
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

        //res.header("Access-Control-Allow-Credentials", "true");
        res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
        //res.header("Access-Control-Allow-Headers", "Authorization, Access-Control-Allow-Origin, Origin, X-Requested-With, Content-Type, Accept");
        //res.header("Cache-Control", "no-cache, no-store, must-revalidate"); // HTTP 1.1.
        //res.header("Pragma", "no-cache"); // HTTP 1.0.
        //res.addDateHeader("Expires", 0); // Proxies.
	next();
}

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
var rootApi = function (req, res) {
	res.json({ message: 'hooray! welcome to our api!' });	
}

/**
* Create a todo
* @param req (Todo Object)
* @param res
* @returns void
*/
var createTodo = function (req, res) {
	
	var todo = new Todo();		// create a new instance of the Todo model
	todo.title = req.body.title;  // set the todos name (comes from the request)
	todo.completed = false

	todo.save(function(err, todo) {
	  if (err)
      res.status(500).send(err);
	
	  res.json(todo);
	});  
}

/**
* Get all todos
* @param req
* @param res
* @returns void
*/
var getTodos = function(req, res) {
  // Search term in title with insensitive case
  var title = req.query['title'];
  if(title !== undefined) {
    Todo.aggregate([
      { $match: { title: {$regex: title, $options : 'i'} } }
    ], function(err, todos) {
      if (err)
        res.send(err);
  
      res.json(todos);
    });    
  } else {
    Todo.find(function(err, todos) {
      if (err)
        res.send(err);
  
      res.json(todos);
    });
  }
	
}

/**
* Get a todo
* @param req
* @param res
* @returns todo
*/
var getTodo = function (req, res) {
	Todo.findById(req.params.todo_id, function(err, todo) {
		if (err)
			res.send(err);
		res.json(todo);
	});
}

/**
* Update Todo
* @param req (Todo object)
* @param res
* @returns void
*/
var updateTodo = function (req, res) {
	Todo.findById(req.params.todo_id, function(err, todo) {

		if (err)
			res.send(err);

		todo.title = req.body.title;
		todo.completed = req.body.completed;
		todo.save(function(err) {
			if (err)
				res.send(err);

			res.json({ message: 'Todo updated!' });
		});

	});
}


/**
* Delete Todo
* @param req
* @param res
* @returns void
*/
var deleteTodo = function (req, res) {
	Todo.remove({
		_id: req.params.todo_id
	}, function(err, todo) {
		if (err)
			res.send(err);

		res.json({ message: 'Successfully deleted' });
	});
}
  


module.exports = {
	rootApi,
	middleware,
	getTodos,
	getTodo,
	createTodo,
	updateTodo,
	deleteTodo
};