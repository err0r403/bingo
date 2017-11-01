var app = require('express')();
var express = require('express');
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;
var _ = require('underscore')._;

app.use(express.static('public'));

if(!room){
	var room = 'bingoDefault';
}
console.log('Server Running');
console.log('Default Room: ' + room);

app.get('/bingo/:id*', function(req, res){
	var rooms = [ 
		'puntual',
		'2',
		'3'
	];
  console.log('Ha solicitado unirse a: ' + req.params.id);
  if(_.contains(rooms, req.params.id)){
  	room = req.params.id;
  	console.log(room + ' existe!');
  }else{
  	var room = 'bingoDefault';
  	console.log('NO existe!');
  }
  res.sendFile(__dirname + '/bingo.html');
});

console.log('Room: ' + room);

var history = {};
	history[room] = [];
    
	io.sockets.on('connection', function(socket) {
		console.log('Nueva conexión de: ' + socket);
		socket.on('disconnect', function(){
		    console.log('Conexión terminada de:' + socket.id);
	 	});
	    
		socket.on('ultimo numero', function(nro){
			io.to(room).emit('ultimo numero', nro);
			history[room].push(nro);
			console.log(history[room]);
		});
		socket.on('join', function(room) {
	    	console.log(socket.id + ' ha entrado a ' + room);
	        socket.join(room);
	        room = room;       
        	var keys = _.keys(history);
        	console.log(history);
        	console.log(history[room]);
        	if (_.contains(keys, room)) {
				socket.emit("history", history[room]);
			}else{
				console.log('sin datos');
			}
	    });
	
	});


http.listen(port, function(){
  console.log('listening on *:' + port);
});
