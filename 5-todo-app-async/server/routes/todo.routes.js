// Import Todo Controller
var TodoController = require('./../controllers/todo.controller');
// create our router
var express    = require('express');
var router = express.Router();


// middleware to use for all requests
router.use(TodoController.middleware);

// Get message on Root Api
router.route('/').get(TodoController.rootApi);

// Get all Posts
router.route('/todos').get(TodoController.getTodos);
// Create Todo
router.route('/todos').post(TodoController.createTodo);

// Get one Todo by id
router.route('/todos/:todo_id').get(TodoController.getTodo);
// Update Todo by id
router.route('/todos/:todo_id').put(TodoController.updateTodo);
// Delete Todo by id
router.route('/todos/:todo_id').delete(TodoController.deleteTodo);


//export default router;
module.exports = router;