
var Todo = require('./models/todo');
var Form = require('./models/form');


module.exports = function(app) {

	// api ---------------------------------------------------------------------
	// get all todos
	app.get('/api/todos', function(req, res) {

		// use mongoose to get all todos in the database
		Todo.find(function(err, todos) {

			// if there is an error retrieving, send the error. nothing after res.send(err) will execute
			if (err)
				res.send(err)

			res.json(todos); // return all todos in JSON format
		});
	});

   
    
    
	// create todo and send back all todos after creation
	app.post('/api/todos', function(req, res) {

		// create a todo, information comes from AJAX request from Angular
		Todo.create({
			text : req.body.text,
            text1 : req.body.text1,
            text2 : req.body.text2,
			done : false
		}, function(err, todo) {
			if (err)
				res.send(err);

			// get and return all the todos after you create another
			Todo.find(function(err, todos) {
				if (err)
					res.send(err)
				res.json(todos);
			});
		});

	});
    
 

	// delete a todo
	app.delete('/api/todos/:todo_id', function(req, res) {
		Todo.remove({
			_id : req.params.todo_id
		}, function(err, todo) {
			if (err)
				res.send(err);

			// get and return all the todos after you create another
			Todo.find(function(err, todos) {
				if (err)
					res.send(err)
				res.json(todos);
			});
		});
	});

	// application -------------------------------------------------------------

    
    app.get('/api/forms', function(req, res) {

		// use mongoose to get all todos in the database
		Form.find(function(err, forms) {

			// if there is an error retrieving, send the error. nothing after res.send(err) will execute
			if (err)
				res.send(err)

			res.json(forms); // return all todos in JSON format
		});
	});
    
    
    
    
	// create todo and send back all todos after creation

    	app.post('/api/forms', function(req, res) {

		// create a todo, information comes from AJAX request from Angular
		Form.create({
			namee : req.body.namee,
            plec : req.body.plec,
            waga : req.body.waga,
            wzrost : req.body.wzrost,
            wiek : req.body.wiek,
            aktywnosc : req.body.aktywnosc,
            cel : req.body.cel,
            
			
		}, function(err, form) {
			if (err)
				res.send(err);

			// get and return all the todos after you create another
			Form.find(function(err, forms) {
				if (err)
					res.send(err)
				res.json(forms);
			});
		});

	});

	// delete a todo
	app.delete('/api/forms/:form_id', function(req, res) {
		Form.remove({
			_id : req.params.form_id
		}, function(err, form) {
			if (err)
				res.send(err);

			// get and return all the todos after you create another
			Form.find(function(err, forms) {
				if (err)
					res.send(err)
				res.json(forms);
			});
		});
	});
    
    
    app.get('*', function(req, res) {
		res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
	});
    
};


