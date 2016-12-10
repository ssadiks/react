//Import Post Model
var Post     = require('./../models/post.model');

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
* Create a post
* @param req (Post Object)
* @param res
* @returns void
*/
var createPost = function (req, res) {
	
	var post = new Post();		// create a new instance of the Post model
	post.title = req.body.title;  // set the posts name (comes from the request)
	post.text = req.body.text;
	post.likes = 0;
	post.comments = [];
  /*var dateNow = Date.now();
  console.log(dateNow);
	post.date_created = dateNow;*/ // changement d'heure pas pris en compte
	

	post.save(function(err, post) {
	  if (err)
      res.status(500).send(err);
	
	  res.json(post);
	});  
}

/**
* Get all posts
* @param req
* @param res
* @returns void
*/
var getPosts = function(req, res) {
  // Search term in title with insensitive case
  var title = req.query['title'];
  if(title !== undefined) {
    Post.aggregate([
      { $match: { title: {$regex: title, $options : 'i'} } }
    ], function(err, posts) {
      if (err)
        res.send(err);
  
      res.json(posts);
    });    
  } else {
    Post.find(function(err, posts) {
      if (err)
        res.send(err);
  
      res.json(posts);
    });
  }
	
}

/**
* Get a post
* @param req
* @param res
* @returns post
*/
var getPost = function (req, res) {
	Post.findById(req.params.post_id, function(err, post) {
		if (err)
			res.send(err);
		res.json(post);
	});
}

/**
* Update Post
* @param req (Post object)
* @param res
* @returns void
*/
var updatePost = function (req, res) {
	Post.findById(req.params.post_id, function(err, post) {

		if (err)
			res.send(err);

		post.title = req.body.title;
		post.text = req.body.text;
		post.likes = req.body.likes;
		post.comments = req.body.comments;
		post.save(function(err) {
			if (err)
				res.send(err);

			res.json({ message: 'Post updated!' });
		});

	});
}


/**
* Delete Post
* @param req
* @param res
* @returns void
*/
var deletePost = function (req, res) {
	Post.remove({
		_id: req.params.post_id
	}, function(err, post) {
		if (err)
			res.send(err);

		res.json({ message: 'Successfully deleted' });
	});
}
  

/**
* Create Comment
* @param req (Array of Comment Object or Comment Object)
* @param res
* @returns void
*/
var createComment = function (req, res) {
  Post.findById(req.params.post_id, function(err, post) {
	function insertComment(element) {
		if(element.name === undefined)
			return res.json({message: "Error : Waiting for a Comment Object"});
		
		post.comments.push(element);
	}
	if(post) {
		console.log(req.body)
		// Check if Post is an array of object are just an object
		if(Array.isArray(req.body)) {
			(req.body).forEach(insertComment);
		} else {
			if(req.body.name === undefined)
				return res.json({message: "Error : Waiting for a Comment Object"});
			
			post.comments.push(req.body);
		}				
		post.save(function(err) {
		  if (err)
        res.send(err);
    // send last comment in the array
		res.json(post.comments[post.comments.length-1]);
	  });
	} else {
	  res.json({ message: 'Post doesn\'t exists' });
	}
	  });	
}
    
/**
* Get Comment
* @param req
* @param res
* @returns Comment
*/
var getComment = function (req, res) {
	Post.findOne({'comments._id' : req.params.comment_id}, {'comments.$': 1}, function(err, post) {
  if(post) {
	if (err)
	  res.send(err);
	res.json(post.comments);
  } else {
	res.json({ message: 'Comment doesn\'t exists' });
  }
	});
}
  
/**
* Delete Comment
* @param req
* @param res
* @returns void
*/ 
var deleteComment = function (req, res) {
  Post.update(
	{"_id" : req.params.post_id},
	{ $pull : {"comments" : {"_id" : req.params.comment_id } } },
	function(err, val) {
	  if (err)
		  res.send(err);
		res.json({ message: 'Comment deleted' });
	}
  )
}
  
/**
* Update Comment
* @param req (Object Comment)
* @param res
* @returns void
*/
var updateComment = function (req, res) {
	// If name is undefined
	if(req.body.name === undefined)
		return res.json({ message: 'Error : Waiting for a Comment Object' });
		
	Post.update(
	  {"_id": req.params.post_id, "comments._id" : req.params.comment_id},
	  { $set : {
		"comments.$.name" : req.body.name,
		"comments.$.message" : req.body.message,
		"comments.$.date_com" : req.body.date_com,
		"comments.$.likes" : req.body.likes
	  }},
	  function(err, val) {
		if (err)
			res.send(err);
		  res.json({ message: 'Comment updated' });
	  }
	)
}

module.exports = {
	rootApi,
	middleware,
	getPosts,
	getPost,
	createPost,
	updatePost,
	deletePost,
	createComment,
	getComment,
	updateComment,
	deleteComment
};