var mutil = require('./mathUtil');
var url = require('url');
exports.display = function(req,res){
	res.writeHead(200,{
	  'Content-Type':'text/html'
	});
	var urlinfo = url.parse(req.url, true);
	var a = (urlinfo.query.a && !isNaN(urlinfo.query.a))
	   ? new Number(urlinfo.query.a):NaN;
	var b = (urlinfo.query.b && !isNaN(urlinfo.query.b))
	   ? new Number(urlinfo.query.b):NaN;
	res.end(
	 mutil.page("Multiplication",mutil.navbar(),[
	  (!isNaN(a)&&!isNaN(b) ?
		("<p class='result'>{a} * {b} = {result}</p>"
		.replace("{a}",a)
		.replace("{b}",b)
		.replace("{result}",a * b))
		:""),
	"<p>Enter numbers to multiply</p>",
	"<form name='mult' action='./mult' method='get'>",
	"A: <input type='text' name='a'/><br/>",
	"B: <input type='text' name='b'/>",
	"<input type='submit' value='submit'/>",
	"</form>"
	].join('\n'))
	);
};