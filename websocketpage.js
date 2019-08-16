//llamado de cosas a usar
var express = require('express');
var socket = require('socket.io');
const HOST= '0.0.0.0';
const PORT = process.env.PORT || 3000;

//app setup
var app = require('express')();
var http = require('http').Server(app);
app.set('host',HOST,'port',PORT);

var server = app.listen(PORT,HOST,function(){
	var host = server.address().address;
 	var port = server.address().port;
  	console.log('Example app listening at http://', host,' and port ', port);
});

//llama a la carpeta y usa su index.html
app.use(express.static('paginas'));

app.get('/', function(req, res, next){
    res.sendStatus(200);
});

var io = socket(server);

io.on('connection',function(socket){
	console.log('conectado al socket ',socket.id);
	console.log(http);
	socket.on('chat',function(data){
		//todos los sockets io.sockets
		io.sockets.emit('chat',data);
	});
	socket.on('typing',function(data){
		//socket.broadcast todos menos el que envia
		socket.broadcast.emit('typing',data);
	});
});

