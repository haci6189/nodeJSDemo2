var fs = require('fs');
var strArray;
var person;
var birthDate1;
var birthDate2;
var birthDate3;
var birthDate4;
var birthDate5;
var days;

var counterFemale = 0;

function getAnswer(){
	var array = fs.readFileSync('addressBook.txt').toString().split("\n");
	for(i in array) {
    //console.log(array[i]);
	strArray = array[i];
	strArray = strArray.split(", ").join("\n")
	
	if(strArray.includes("Female")){
		counterFemale += 1;
	}
		if(i == 0){
		birthDate1 = strArray.substr(strArray.length - 3);
		//console.log(birthDate1);
	}else if(i == 1){
		birthDate2 = strArray.substr(strArray.length - 3);
		//console.log(birthDate2);
	}else if(i == 2){
		birthDate3 = strArray.substr(strArray.length - 3);
		//console.log(birthDate3);
	}else if(i == 3){
		birthDate4 = strArray.substr(strArray.length - 3);
		//console.log(birthDate4);
	}else if(i == 4){
		birthDate5 = strArray.substr(strArray.length - 2);
		//console.log("Date: "+birthDate5);
	}
	
		var array = fs.readFileSync('addressBook.txt').toString().split("\n");
		var birthdates = [birthDate1,birthDate2,birthDate3,birthDate4,birthDate5];
		for(i=0; i<birthdates.length; i++){
			//console.log(birthdates[i]);
			if(birthDate1>birthdates[i]){
				//Antwort
				person=array[i];
				//console.log("2. answer: "+person);
			}
		}
		
		for(i in array){
			strArray = array[i];
			strArray = strArray.split(", ").join("\n")
			if(i == 0){
				var birthDaay1 = strArray.substr(strArray.length - 9);
				var parts1 = birthDaay1.split("/");
				birthDaay1 =  new Date(parts1[2], parts1[1], parts1[0]);
				//console.log(birthDate1);
			}else if(i == 1){
				var birthDay2 = strArray.substr(strArray.length - 9);
				var parts2 = birthDay2.split("/");
				birthDay2 =  new Date(parts2[2], parts2[1], parts2[0]);
				//console.log(birthDate2);
			}
	
	days = Math.floor((birthDay2 - birthDaay1)/86400000);
	//console.log(days);
	
		}

}
}

module.exports = {
	//indexAction: indexAction,
	addAction: addAction,
	listAction:listAction
};

/*function indexAction (req, res){
	res.send('My first express app');
}*/

function listAction (req, res){
	var array = fs.readFileSync('addressBook.txt').toString().split("\n");
	
	res.send(array);
}

function addAction (req, res){
	console.log("Deine Eingabe: "+req.body.eing);
	var body;
	counterFemale = 0;
	getAnswer();
	//console.log("ausgeführt");
	res.writeHead(200,{
		'content-type': 'text/html;charset=utf-8'});
		
		var question = req.body.eing;
		var antwort ="Bitte geben Sie /questions, /questions/1, /questions/2 oder /questions/3 ein.";
		var antwort2,antwort3;
		
	if(question == "/questions"){
	  antwort = "1. answer: "+counterFemale;
	  antwort2 = "2. answer: "+person;
	  antwort3 = "3. answer: "+days;
	  
	  console.log("1. answer: "+counterFemale);
	  console.log("2. answer: "+person);
	  console.log("3. answer: "+days);
	  counterFemale = 0;
	  
  }else if(question == "/questions/1"){
	   antwort = "1. answer: "+counterFemale
	    console.log("1. answer: "+counterFemale);
		counterFemale = 0;
  }else if(question == "/questions/2"){
	  antwort = "2. answer: "+person;
	   console.log("2. answer: "+person);
	   counterFemale = 0;
  }if(question == "/questions/3"){
	  antwort = "3. answer: "+days;
	    console.log("3. answer: "+days);
		counterFemale = 0;
  }
  
  if(question == "/questions"){
	   body = '<DOCTYPE html>' +
		'<html>' +
			'<head>' +
					'<meta charset="utf-8">' +
					'<title>Node.js ArTo - Lösung</title>' +
					'<script src="//ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js"></script>'+
					'<link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css">'+
					'<link rel="stylesheet"  type="text/css" href="/css/myCSS.css" >'+
			'</head>' +
			'<body>' +
			'<form action="/">'+
					'<h1 style=color:green">Node.js Demo App</h1>' +
					'<p>AddressBook.txt wurde eingelesen...</p>'+
					'<p>'+antwort+'</p>'+
					'<p>'+antwort2+'</p>'+
					'<p>'+antwort3+'</p>'+
					'<button type="submit" class="btn btn-primary" >zurück</button>'+
			'</form>'+			
			'</body>'+
		'</html>';
  }else{
	  body = '<DOCTYPE html>' +
		'<html>' +
			'<head>' +
					'<meta charset="utf-8">' +
					'<title>Node.js Arto - Lösung</title>' +
					'<script src="//ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js"></script>'+
					'<link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css">'+
					'<link rel="stylesheet"  type="text/css" href="/css/myCSS.css" >'+
			'</head>' +
			'<body>' +
			'<form action="/">'+
					'<h1 style=color:green">Node.js Demo App</h1>' +
					'<p>AddressBook.txt wurde eingelesen...</p>'+
					'<p>'+antwort+'</p>'+
			'<button type="submit" class="btn btn-primary" >zurück</button>'+
			'</form>'+		
			'</body>'+
		'</html>';
  }
		
		
	res.end(body);
	//res.send('/list');
}

