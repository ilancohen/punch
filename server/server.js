// Module dependencies.
var express = require('express');

var app = express();

// Configuration
app.configure( function() {
});

// Routes
app.get('/', function(req, res) {
	res.send('Hello World');
	function execute(someFunction, value) {
		someFunction(value);
	}

	execute(function(word){ console.log(word) }, "Hello");
});

app.listen(3000);