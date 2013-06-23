var http = require('http');
var url = require('url');
var mutil = require('./mathUtil');

var server = http.createServer(function(req,res){
var requrl = url.parse(req.url, true);
if(requrl.pathname === '/'){
	require('./home-node').get(req,res);
}else if(requrl.pathname === '/mult'){
	require('./mult-node').display(req,res);
}
else if(requrl.pathname === '/add'){
	require('./add-node').display(req,res);
}
});


server.listen(8124);
console.log('server started');