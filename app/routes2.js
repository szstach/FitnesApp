var Form = require('./models/todo');


module.exports = function(appF) {

	// api ---------------------------------------------------------------------
	// get all todos
	

    appF.get('/api/forms', function(req, res) {

		// use mongoose to get all todos in the database
		Form.find(function(err, forms) {

			// if there is an error retrieving, send the error. nothing after res.send(err) will execute
			if (err)
				res.send(err)

			res.json(forms); // return all todos in JSON format
		});
	});
    
    
    
    
	// create todo and send back all todos after creation

    	appF.post('/api/forms', function(req, res) {

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
	appF.delete('/api/forms/:form_id', function(req, res) {
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

	// application -------------------------------------------------------------
	appF.get('*', function(req, res) {
		res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
	});
};


