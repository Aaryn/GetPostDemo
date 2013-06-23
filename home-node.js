var mutil = require('./mathUtil');

exports.get = function(req,res){
	res.writeHead(200,{
	  'Content-Type':'text/html'
	});
	res.end(
	  mutil.page("Math Game",mutil.navbar(),"<p>Math Game</p>")
	);
};