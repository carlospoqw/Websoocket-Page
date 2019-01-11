//llamado de cosas a usar
var express = require('express');
var socket =require('socket.io');

//app setup
var app = express();
app.set('port',process.env.PORT || 4000);

var server = app.listen(4000,function(){
	var host = server.address().address;
 	var port = server.address().port;
  	console.log('Example app listening at http://', host,' and port ', port);
});

//llama a la carpeta y usa su index.html
app.use(express.static('paginas'));

//socket setup
var io = socket(server);

io.on('connection',function(socket){
	console.log('conectado al socket ',socket.id);

	socket.on('chat',function(data){
		//todos los sockets io.sockets
		io.sockets.emit('chat',data);
	});
	socket.on('typing',function(data){
		//socket.broadcast todos menos el que envia
		socket.broadcast.emit('typing',data);
	});
});