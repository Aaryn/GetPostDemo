var mutil = require('./mathUtil');
var querystring = require('querystring');
exports.display = function(req,res){
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
		var a = (info.a && !isNaN(info.a))
	 	  ? new Number(info.a):NaN;
		var b = (info.b && !isNaN(info.b))
		   ? new Number(info.b):NaN;
		res.end(
		 mutil.page("Multiplication",mutil.navbar(),[
	 	 (!isNaN(a)&&!isNaN(b) ?
		("<p class='result'>{aa} + {bb} = {result}</p>"
		.replace("{aa}",a)
		.replace("{bb}",b)
		.replace("{result}",a + b))
		:""),
		"<p>Enter numbers to add</p>",
		"<form name='add' action='/add' method='post'>",
		"A: <input type='text' name='a'/><br/>",
		"B: <input type='text' name='b'/>",
		"<input type='submit' value='submit'/>",
		"</form>"
		].join('\n'))
		);
	});
	
};