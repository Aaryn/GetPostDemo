var http = require('http');
var mutil = require('./mathUtil');

var server = http.createServer(function(req,res){
if(req.url === '/'){
	require('./home-node').get(req,res);
}else if(req.url === '/mult'){
	require('./mult-node').display(req,res);
}
else if(req.url === '/add'){
	require('./add-node').display(req,res);
}
});


server.listen(8124);
console.log('server started');