//test - demo

var express = require('express');
var morgan = require('morgan');
var serveStatic = require('serve-static');
var bodyParser = require('body-parser');
var app = express();

app.use(morgan('combined', {immediate:true}));
app.use(serveStatic('public'));
app.use(bodyParser.urlencoded({extendes:false}));

require('./router')(app);


app.listen(8080, function() {
	console.log('Server listening on port 8080');
});






























/*app.get('/', function (req,res) {
	res.send('My first application');
});

var http = require('http');
var fs = require('fs');
http.createServer(
	function(req, res){
		var path = require('url').parse(req.url).path;
		if(path.startsWith('/public/')) {
			fs.reaadFile(__dirname + path, 'utf8', function (err, data){
				if(err){
					res.statusCode = 404;
					res.end();
				}else{
					res.end(data);
				}
			});
		}else{
			res.statusCode = 403;
			res.end();
		}
		var body ='';
		request.on('readable', function (data){
			body += request.read();
		});
		
		request.on('end', function(){
			console.log(body);
		});
	response.writeHead(200,{'content-type':'text/plain'});
	response.end(body);
	}).listen(8080,'localhost');*/