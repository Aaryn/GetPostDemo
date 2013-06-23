var http = require('http');
var url = require('url');
var mutil = require('./mathUtil');
var querystring = require('querystring');
var user = 'undefined';
var postsign = function(req,res){
	res.writeHead(200,{
	  'Content-Type':'text/html'
	});
	var info = '';
	req.on('data', function(chunk){
		info+=chunk;
	});
	
	req.on('end', function(){
		info = querystring.parse(info);
		console.log('info'+info);
		user = info.a!='undefined'
	 	  ? info.a:'Guest';
		res.end( mutil.page("sign",mutil.navbar(),[
		"<p>Enter numbers to add</p>",
		"<form name='sign' action='/postsign' method='post'>",
		"name: <input type='text' name='a'/><br/>",
		"<input type='submit' value='submit'/>",
		"</form>"
		].join('\n'))
		);
	});
	
};

var page = function(req,res){
	res.writeHead(200,{
	  'Content-Type':'text/html'
	});
	var info = '';
	req.on('data', function(chunk){
		info+=chunk;
	});
	
	req.on('end', function(){
		info = querystring.parse(info);
		console.log('info'+info);
		user = info.a!='undefined'
	 	  ? info.a:undefined;
		console.log(user);
		console.log(user===undefined);
		  console.log(user!='Guest'&&user!='undefined'&&!(user===undefined));
		res.end(
		 mutil.page("Home Page","",[
	 	 (user!='Guest'&&user!='undefined' ?
		("<p class='result'>welcome {aa}</p>"
		.replace("{aa}",user))
		:"<p class='result'>fail,you have no right</p>"),
		"<p>Enter your name</p>",
		"<form name='add' action='/page' method='post'>",
		"name: <input type='text' name='a'/><br/>",
		"<input type='submit' value='submit'/>",
		"</form>"
		].join('\n'))
		);
	});
	
};





var server = http.createServer(function(req,res){
var requrl = url.parse(req.url, true);
if(requrl.pathname === '/'){
	page(req,res);
}else if(requrl.pathname === '/page'){
	page(req,res);
}
else if(requrl.pathname === '/postsign'){
	postsign(req,res);
}


});

server.listen(8124);

console.log('Server running at http://127.0.0.1:8124/');