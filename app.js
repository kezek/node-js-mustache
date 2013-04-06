var connect = require('connect');
var mustache = require('mustache');
var fs = require ('fs');
var url = require('url');

fs.readFile(__dirname + '/public/index.html', function(err, template){
	if (err){
		throw err;
	}
	var app = connect()
		.use(function (req, res){
			var getParams = url.parse(req.url,true).query;
			console.log(getParams);
			var view = {
  				title: getParams.title ? getParams.title : 'John Doe',
  				age: getParams.age ? getParams.age : 'immortal'
			};

			var html = mustache.to_html(new String(template), view);
			res.end(html);
		})
		.listen(8080);
});

