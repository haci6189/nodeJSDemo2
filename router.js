
var controller = require('./controller');
module.exports = function(app) {
	/*app.get('/',function(req, res){
		res.send('My first express application');
	});
	
	app.get('/list',function(req, res){
		// read file sample.html
	var array = fs.readFileSync('addressBook.txt').toString().split("\n");
		res.send(array);
	});*/
	
	//verbesserter router
	
	//app.get('/',controller.indexAction);
	app.get('/list', controller.listAction);
	app.post('/antwort', controller.addAction);
}