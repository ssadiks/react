// Import Post Controller
var PostController = require('./../controllers/post.controller');
// create our router
var express    = require('express');
var router = express.Router();


// middleware to use for all requests
router.use(PostController.middleware);

// Get message on Root Api
router.route('/').get(PostController.rootApi);

// Get all Posts
router.route('/posts').get(PostController.getPosts);
// Create Post
router.route('/posts').post(PostController.createPost);

// Get one Post by id
router.route('/posts/:post_id').get(PostController.getPost);
// Update Post by id
router.route('/posts/:post_id').put(PostController.updatePost);
// Delete Post by id
router.route('/posts/:post_id').delete(PostController.deletePost);

// Create a new Hero
router.route('/posts/:post_id/comments').post(PostController.createComment);

// Get a hero by ids
router.route('/posts/:post_id/comments/:comment_id').get(PostController.getComment);
// Update a hero by ids
router.route('/posts/:post_id/comments/:comment_id').put(PostController.updateComment);
// Delete a hero by ids
router.route('/posts/:post_id/comments/:comment_id').delete(PostController.deleteComment);

//export default router;
module.exports = router;